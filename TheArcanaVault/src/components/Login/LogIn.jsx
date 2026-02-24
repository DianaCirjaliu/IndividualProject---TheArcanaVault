import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ArcanaButton from "../Button/Button";
import whiteInputStyle from "../../globalStyles/whiteInputStyle";
import Button from "@mui/material/Button";

function LogIn() {
  return (
    <>
      <Button
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          bgcolor: "rgba(168, 85, 247, 0.2)",
          color: "white",
          border: "1px solid rgba(168, 85, 247, 0.5)",
          borderRadius: "8px",
          padding: "6px 12px",
          fontSize: "0.8rem",
          textTransform: "none",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          zIndex: 2,
          "&:hover": { transform: "translateY(-4px)" },
        }}
      >
        Don't have an account? Sign up now
      </Button>
      <Typography variant="h5">Login into your account now</Typography>
      <Typography variant="body2">
        The stars incline, but they do not bind... unless you forget your
        password.
      </Typography>
      <TextField
        required
        label="Username"
        variant="outlined"
        sx={whiteInputStyle}
      />
      <TextField
        required
        label="Password"
        variant="outlined"
        sx={whiteInputStyle}
      />
      <ArcanaButton children={"Login"} />
    </>
  );
}

export default LogIn;
