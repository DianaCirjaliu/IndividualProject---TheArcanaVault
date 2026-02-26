import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ArcanaButton from "../Button/Button";
import { sendContactMessage } from "../../services/contact/contactService";
import whiteInputStyle from "../../globalStyles/whiteInputStyle";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import Response from "../Dialog/Dialog";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function ContactFormUser({ userId }) {
  const [result, setResult] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    const fetchMyStatus = async () => {
      if (!userId) return;

      const { data, error: supabaseError } = await supabase
        .from("contact_messages")
        .select("response, status")
        .eq("user_id", userId)
        .eq("status", "completed")
        .order("created_at", { ascending: false })
        .single();

      if (supabaseError) {
        console.error(supabaseError);
        return;
      }

      if (data && data.status === "completed") {
        setResult(data.response);
      }
    };

    fetchMyStatus();
  }, [userId]);

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
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
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            fontFamily: "'Playfair Display', serif",
            textAlign: "center",
            maxWidth: "400px",
          }}
        >
          Speak your truth into the void, or forever remain a mystery to the
          stars. We're listening... if the alignment is right.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
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
          <Button variant="secondary" onClick={handleClickOpen}>
            Response
          </Button>
          <Response
            response={result ?? "No response yet"}
            handleClose={handleClose}
            open={open}
          />
        </Box>
      </CardContent>
    </Box>
  );
}

export default ContactFormUser;
