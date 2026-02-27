//material ui components
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

//custom components
import ArcanaButton from "../Button/Button";
import whiteInputStyle from "../../globalStyles/whiteInputStyle";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

//service
import { registerNewUser } from "../../services/auth/signUpService";

//hook
import { useState } from "react";

function SingUp({ onSwitch }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { email, password, confirm_password, username, zodiac } =
      Object.fromEntries(formData);

    //check to see if passwords are matching
    if (password !== confirm_password) {
      alert("The stars are crossed: Passwords do not match!");
      return;
    }

    setLoading(true);

    const result = await registerNewUser(email, password, username, zodiac);

    setLoading(false);

    if (result.success) {
      alert("Check ur email for confirmation");
      event.target.reset();
    } else {
      alert("Erorr: " + result.message);
    }

    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        textAlign: "center",
        alignItems: "center",
        gap: 1,
        pt: { xs: 8, sm: 4, md: 6 },
        pb: { xs: 10, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        maxHeight: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "rgba(255, 255, 255, 0.7)",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Create your account now
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: 2,
          px: { xs: 2, md: 0 },
          color: "rgba(255, 255, 255, 0.7)",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        The universe has been whispering your name since the dawn of the first
        aeon. <br />
        Now, it is time to claim your celestial identity.
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <TextField
          required
          label="Username"
          variant="outlined"
          name="username"
          sx={whiteInputStyle}
        />
        <TextField
          required
          label="Email"
          variant="outlined"
          name="email"
          sx={whiteInputStyle}
        />
        <TextField
          required
          select
          label="Zodiac sign"
          variant="outlined"
          name="zodiac"
          sx={whiteInputStyle}
          defaultValue={""}
        >
          <MenuItem value="Aries">Aries</MenuItem>
          <MenuItem value="Taurus">Taurus</MenuItem>
          <MenuItem value="Gemini">Gemini</MenuItem>
          <MenuItem value="Cancer">Cancer</MenuItem>
          <MenuItem value="Leo">Leo</MenuItem>
          <MenuItem value="Virgo">Virgo</MenuItem>
          <MenuItem value="Libra">Libra</MenuItem>
          <MenuItem value="Scorpio">Scorpio</MenuItem>
          <MenuItem value="Sagittarius">Sagittarius</MenuItem>
          <MenuItem value="Capricorn">Capricorn</MenuItem>
          <MenuItem value="Aquarius">Aquarius</MenuItem>
          <MenuItem value="Pisces">Pisces</MenuItem>
        </TextField>
        <TextField
          required
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          sx={whiteInputStyle}
        />
        <TextField
          required
          label="Confirm Password"
          variant="outlined"
          name="confirm_password"
          type="password"
          sx={whiteInputStyle}
        />
        <FormControlLabel
          required
          sx={{
            textAlign: "left",
            margin: "10px 0",
            "& .MuiFormControlLabel-label": {
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.8)",
              fontFamily: "'Playfair Display', serif",
            },
          }}
          control={
            <Checkbox
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                "&.Mui-checked": {
                  color: "#f1eff2",
                },
              }}
            />
          }
          label="I have read the celestial laws and I am ready to face what the stars have written for me."
        />

        <ArcanaButton
          type="submit"
          disabled={loading}
          children={loading ? "Aligning stars..." : "Create account"}
        />
      </Box>

      <SecondaryButton
        children={"Already have an account? Login"}
        onSwitch={onSwitch}
      />
    </Box>
  );
}

export default SingUp;
