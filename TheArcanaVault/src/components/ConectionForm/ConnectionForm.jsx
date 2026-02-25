import CardContent from "@mui/material/CardContent";
import SingUp from "../SignUp/SingUp";
import LogIn from "../Login/LogIn";
import { useState } from "react";

function ConnectionForm() {
  const [isLogin, setIsLogin] = useState(false);
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
          <LogIn onSwitch={() => setIsLogin(false)} />
        ) : (
          <SingUp onSwitch={() => setIsLogin(true)} />
        )}
      </CardContent>
    </div>
  );
}

export default ConnectionForm;
