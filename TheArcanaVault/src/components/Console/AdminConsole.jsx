//material ui components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

//hooks
import { useEffect, useState } from "react";

//api to database
import { supabase } from "../../services/supabaseClient";

//custom components
import ArcanaButton from "../Button/Button";
import whiteInputStyle from "../../globalStyles/whiteInputStyle";
import DrawnCards from "./DrawnCards";

function AdminConsole() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    supabase
      .from("readings")
      .select("*")
      .eq("status", "pending")
      .then(({ data }) => setList(data || []));
  }, []);

  const sendReading = async () => {
    await supabase
      .from("readings")
      .update({ prediction_text: text, status: "completed" })
      .eq("id", selected.id);

    alert("Sent!");
    setList(list.filter((item) => item.id !== selected.id));
    setSelected(null);
  };

  return (
    <Box
      sx={{
        color: "rgba(255, 255, 255, 0.7)",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        width: "100%",
        height: "100%",
        margin: "0 auto",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif" }}>
        Pending Readings
      </Typography>
      {list.map((item) => (
        <Button
          key={item.id}
          onClick={() => setSelected(item)}
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          User: {item.user_id.slice(0, 5)}
        </Button>
      ))}

      {selected && (
        <Box sx={{ mt: 4 }}>
          <DrawnCards cards={selected.cards} />
          <TextField
            multiline
            fullWidth
            sx={whiteInputStyle}
            onChange={(e) => setText(e.target.value)}
          />
          <ArcanaButton onClick={sendReading}>Send to Seeker</ArcanaButton>
        </Box>
      )}
    </Box>
  );
}

export default AdminConsole;
