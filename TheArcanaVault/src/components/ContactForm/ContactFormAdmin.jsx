import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
    <div className="container">
      <Typography variant="h5">Contact messages</Typography>
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
          <Typography sx={{ color: "#ccc", fontStyle: "italic", my: 2 }}>
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
    </div>
  );
}

export default ContactFormAdmin;
