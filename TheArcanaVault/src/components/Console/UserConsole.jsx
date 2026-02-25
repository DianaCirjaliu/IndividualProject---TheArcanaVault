import { useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";
import magicBallAnim from "../../assets/Magic Crystal Ball.json";
import Box from "@mui/material/Box";
import DrawnCards from "./DrawnCards"; // Verifică calea

function UserConsole({ userId }) {
  const [result, setResult] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);

  useEffect(() => {
    const fetchMyStatus = async () => {
      if (!userId) return;

      const { data, error } = await supabase
        .from("readings")
        .select("prediction_text, status, cards")
        .eq("user_id", userId)
        .single();

      if (error) {
        console.error("Error fetching reading:", error);
        return;
      }

      if (data) {
        setDrawnCards(data.cards || []);

        if (data.status === "completed") {
          setResult(data.prediction_text);
        }
      }
    };

    fetchMyStatus();
  }, [userId]);

  return (
    <>
      {result ? (
        <Typography
          variant="h5"
          sx={{ color: "rgba(255, 255, 255, 0.7)", fontStyle: "italic" }}
        >
          The mists have cleared, and the Witch has returned from the silent
          realms. Her vision of your fate is now etched in the stars. Listen
          closely to the echoes of the ancient ones...<br></br>
          <br></br>"{result}"
          <DrawnCards cards={drawnCards} />
        </Typography>
      ) : (
        <>
          <Typography
            variant="h5"
            sx={{ color: "rgba(255, 255, 255, 0.7)", fontStyle: "italic" }}
          >
            Your fate has been sealed in the stars. The Witch is currently
            interpreting the alignment of your soul's reflection. Do not turn
            away from the void, for the message is traveling through the mists
            of time to reach you.
          </Typography>
          <DrawnCards cards={drawnCards} />

          <Box sx={{ width: "200px", margin: "0 auto" }}>
            <Lottie animationData={magicBallAnim} loop={true} />
          </Box>
        </>
      )}
    </>
  );
}

export default UserConsole;
