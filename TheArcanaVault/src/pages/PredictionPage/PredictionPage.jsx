import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import getData from "../../utils/getData";
import Grid from "@mui/material/Grid";
import magicBallAnim from "../../assets/Magic Crystal Ball.json";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";

function PredictionPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAndCards = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        const userCards = getData(session.user.id);
        setData(userCards);
      }
      setLoading(false);
    };

    fetchUserAndCards();
  }, []);

  if (loading) return null;

  return (
    <div className="container" style={{ textAlign: "center" }}>
      {data.length === 0 ? (
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontStyle: "italic",
          }}
        >
          The spirits cannot speak if the cards have not been dealt. You must
          first
          <strong> return to the void and draw your three sacred cards</strong>.
          Only then may you return here to await the counsel from the all-mighty
          witch.
        </Typography>
      ) : (
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontStyle: "italic",
          }}
        >
          The cards are laid, and the energy is binding. Be patient, seeker, as
          the all-mighty Witch descends into the ethereal realms to weave your
          counsel. Her words are forming in the smoke of the sacred incense...
        </Typography>
      )}

      <Box sx={{ flexGrow: 1, margin: 2 }}>
        <Grid container spacing={1} justifyContent="center">
          {data.map((card, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <img
                src={card.image}
                alt={card.name}
                style={{
                  width: "60%",
                  maxWidth: "150px",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />

              <Typography variant="h6" sx={{ color: "white" }}>
                {card.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          width: "200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Lottie animationData={magicBallAnim} loop={true} />
      </Box>
    </div>
  );
}

export default PredictionPage;
