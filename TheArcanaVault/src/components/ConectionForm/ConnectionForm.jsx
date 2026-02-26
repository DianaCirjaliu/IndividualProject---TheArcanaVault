import CardContent from "@mui/material/CardContent";
import SingUp from "../SignUp/SingUp";
import LogIn from "../Login/LogIn";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import Typography from "@mui/material/Typography";
import ArcanaButton from "../Button/Button";

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
    <div>
      <CardContent
        sx={{
          padding: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "rgba(255, 255, 255, 0.6)",
          gap: 0.5,
          height: "auto",
        }}
      >
        {isLogin ? (
          <SingUp onSwitch={() => setIsLogin(false)} />
        ) : (
          <LogIn onSwitch={() => setIsLogin(true)} />
        )}
      </CardContent>
    </div>
  );
}

export default ConnectionForm;
