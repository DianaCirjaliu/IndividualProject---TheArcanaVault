//material ui components
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

//custom components
import ArcanaButton from "../Button/Button";
import whiteInputStyle from "../../globalStyles/whiteInputStyle";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

//hooks
import { useState } from "react";
import { useDispatch } from "react-redux";

//services
import { loginUser } from "../../services/auth/logInService";
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
    <Box
      sx={{
        gap: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        margin: "0 auto",
        width: "100%",
        pt: { xs: 8, sm: 4, md: 20 },
        pb: { xs: 10, md: 6 },
        px: { xs: 2, sm: 4, md: 20 },
      }}
    >
      <Typography variant="h5">Login into your account now</Typography>
      <Typography variant="body2">
        The stars incline, but they do not bind... unless you forget your
        password.
      </Typography>

      <Box
        component="form"
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
      </Box>

      <SecondaryButton
        children={"Don't have an account? Sign up now"}
        onSwitch={onSwitch}
      />
    </Box>
  );
}

export default LogIn;
