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
    <div>
      <CardContent
        sx={{
          padding: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
          Speak your truth into the void, or forever remain a mystery to the
          stars. We're listening... if the alignment is right.
        </Typography>
        <TextField
          required
          label="Username"
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
          label="Contact number"
          variant="outlined"
          sx={whiteInputStyle}
        />

        <TextField
          required
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          sx={whiteInputStyle}
        />

        <CardActions>
          <ArcanaButton children={"Submit"} />
        </CardActions>
      </CardContent>
    </div>
  );
}

export default ContactForm;
