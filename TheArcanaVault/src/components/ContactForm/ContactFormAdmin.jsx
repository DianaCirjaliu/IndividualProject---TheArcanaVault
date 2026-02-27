//material ui components
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

//hooks
import { useEffect, useState } from "react";

//api to database
import { supabase } from "../../services/supabaseClient";

//custom components
import whiteInputStyle from "../../globalStyles/whiteInputStyle";
import ArcanaButton from "../Button/Button";

function ContactFormAdmin() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    supabase
      .from("contact_messages")
      .select("*")
      .eq("status", "pending")
      .then(({ data }) => setList(data || []));
  }, []);

  const sendResponse = async () => {
    await supabase
      .from("contact_messages")
      .update({ response: text, status: "completed" })
      .eq("id", selected.id);

    alert("Response sent!");
    setList(list.filter((item) => item.id !== selected.id));
    setSelected(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        m: { xs: 5, sm: 10 },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "rgba(255, 255, 255, 0.6)",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Pending contact messages
      </Typography>
      {list.map((item) => (
        <Button
          key={item.id}
          onClick={() => {
            setSelected(item);
            setText("");
          }}
          sx={{ color: "white" }}
        >
          User:{item.user_id.slice(0, 5)}
        </Button>
      ))}

      {selected && (
        <>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            "{selected.message}"
          </Typography>
          <TextField
            multiline
            fullWidth
            sx={whiteInputStyle}
            onChange={(e) => setText(e.target.value)}
          />
          <ArcanaButton onClick={sendResponse}>
            Send response to Seeker
          </ArcanaButton>
        </>
      )}
    </Box>
  );
}

export default ContactFormAdmin;
