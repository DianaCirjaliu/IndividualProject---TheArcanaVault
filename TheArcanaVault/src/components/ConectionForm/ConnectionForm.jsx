//material ui components
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//custom components
import SingUp from "../SignUp/SingUp";
import LogIn from "../Login/LogIn";
import ArcanaButton from "../Button/Button";

//hooks
import { useEffect, useState } from "react";

//supabase api connection
import { supabase } from "../../services/supabaseClient";

function ConnectionForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data }) => setUser(data.session?.user ?? null));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (user) {
    return (
      <CardContent
        sx={{
          textAlign: "center",
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "100%",
          minHeight: "200px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Welcome back, Seeker</Typography>
        <Typography variant="body2">
          The vault is open for: {user.email}
        </Typography>
        <ArcanaButton onClick={() => supabase.auth.signOut()}>
          Leave the Vault
        </ArcanaButton>
      </CardContent>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <CardContent
        sx={{
          color: "rgba(255, 255, 255, 0.6)",
        }}
      >
        {isLogin ? (
          <SingUp onSwitch={() => setIsLogin(false)} />
        ) : (
          <LogIn onSwitch={() => setIsLogin(true)} />
        )}
      </CardContent>
    </Box>
  );
}

export default ConnectionForm;
