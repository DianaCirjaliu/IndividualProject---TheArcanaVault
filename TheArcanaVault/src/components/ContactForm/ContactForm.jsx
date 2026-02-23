import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ArcanaButton from "../Button/Button";

const whiteInputStyle = {
  width: "100%",
  overflow: "visible",
  mb: 2,
  "& .MuiInputBase-input": { color: "white" },
  "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.7)" },
  "& .MuiInputLabel-root.Mui-focused": { color: "white" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
      borderRadius: "15px",
    },
    "&:hover fieldset": { borderColor: "white" },
    "&.Mui-focused fieldset": { borderColor: "#A855F7" },
  },
};

function ContactForm() {
  return (
    <CardContent
      sx={{
        padding: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
        The stars incline, but they do not bind... unless you forget your
        password.
      </Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        sx={whiteInputStyle}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={whiteInputStyle}
      />
      <TextField
        id="outlined-basic"
        label="Contact number"
        variant="outlined"
        sx={whiteInputStyle}
      />

      <TextField
        id="outlined-basic"
        label="Message"
        variant="outlined"
        sx={whiteInputStyle}
      />

      <CardActions>
        <ArcanaButton children={"Submit"} />
      </CardActions>
    </CardContent>
  );
}

export default ContactForm;
