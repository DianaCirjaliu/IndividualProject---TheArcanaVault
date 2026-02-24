import CardContent from "@mui/material/CardContent";
import SingUp from "../SignUp/SingUp";
import LogIn from "../Login/LogIn";

function ConnectionForm() {
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
        <SingUp />
        {/* <LogIn /> */}
      </CardContent>
    </div>
  );
}

export default ConnectionForm;
