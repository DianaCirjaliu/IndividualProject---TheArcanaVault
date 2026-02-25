import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ArcanaButton from "../Button/Button";
import whiteInputStyle from "../../globalStyles/whiteInputStyle";
import Button from "@mui/material/Button";
import { useState } from "react";
import { loginUser } from "../../services/auth/logInService";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/authSlice";

function LogIn({ onSwitch }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { email, password } = Object.fromEntries(formData);

    setLoading(true);
    const result = await loginUser(email, password);
    setLoading(false);

    if (result.success) {
      dispatch(
        setCredentials({
          user: result.user,
          isAdmin: result.isAdmin,
        }),
      );
      alert("Welcome back, Seeker");
    } else {
      alert("The stars are clouded: " + result.message);
    }
  };
  return (
    <>
      <Button
        onClick={onSwitch}
        sx={{
          position: "fixed",
          bottom: 200,
          bgcolor: "rgba(79, 11, 142, 0.47)",
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

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          overflow: "visible",
          gap: 3,
        }}
      >
        <TextField
          required
          label="Email"
          name="email"
          variant="outlined"
          sx={whiteInputStyle}
        />
        <TextField
          required
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          sx={whiteInputStyle}
        />
        <ArcanaButton
          children={loading ? "Invoking celestial bond..." : "Login"}
          type="submit"
          disabled={loading}
        />
      </form>
    </>
  );
}

export default LogIn;
