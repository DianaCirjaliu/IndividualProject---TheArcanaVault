import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ArcanaButton from "../Button/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import whiteInputStyle from "../../globalStyles/whiteInputStyle";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

function SingUp() {
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
          zIndex: 2,
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": { transform: "translateY(-4px)" },
        }}
      >
        Already have an account? Login
      </Button>
      <Typography variant="h5">Create your account now</Typography>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        The universe has been whispering your name since the dawn of the first
        aeon. <br />
        Now, it is time to claim your celestial identity.
      </Typography>
      <TextField
        required
        label="Name"
        variant="outlined"
        sx={whiteInputStyle}
      />
      <TextField
        required
        label="Email"
        variant="outlined"
        sx={whiteInputStyle}
      />
      <TextField
        required
        select
        label="Zodiac sign"
        variant="outlined"
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
        sx={whiteInputStyle}
      />
      <TextField
        required
        label="Confirm Password"
        variant="outlined"
        sx={whiteInputStyle}
      />
      <FormControlLabel
        required
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
      <ArcanaButton children={"Create account"} />
    </>
  );
}

export default SingUp;
