import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ArcanaButton from "../Button/Button";
import { sendContactMessage } from "../../services/contact/contactService";
import whiteInputStyle from "../../globalStyles/whiteInputStyle";

function ContactForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData);

    try {
      await sendContactMessage(payload);
      alert(
        "Your message has been cast into the cosmic winds. We shall reply when the moon is full.",
      );
      event.target.reset();
    } catch (error) {
      alert(error.message);
    }
  };
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
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            overflow: "visible",
          }}
        >
          <TextField
            required
            label="Username"
            name="username"
            variant="outlined"
            sx={whiteInputStyle}
          />
          <TextField
            required
            label="Email"
            name="email"
            variant="outlined"
            sx={whiteInputStyle}
          />
          <TextField
            required
            label="Contact number"
            name="phone"
            variant="outlined"
            sx={whiteInputStyle}
          />

          <TextField
            required
            label="Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            sx={whiteInputStyle}
          />
          <ArcanaButton children={"Submit"} type="submit" />
        </form>
      </CardContent>
    </div>
  );
}

export default ContactForm;
