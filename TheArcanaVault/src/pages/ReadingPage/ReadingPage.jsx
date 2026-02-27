//material ui components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//custom components
import ArcanaButton from "../../components/Button/Button";
import CardTarot from "../../components/Card/Card";

//hooks
import { useEffect, useState } from "react";

//animation
import Lottie from "lottie-react";
import tarotCards from "../../assets/Tarot cards.json";

//api to database
import { supabase } from "../../services/supabaseClient";

function ReadingPage() {
  const [card, setCard] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkLastReading = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        const { data, error } = await supabase
          .from("readings")
          .select("cards, created_at")
          .eq("user_id", currentUser.id)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (data) {
          const lastReadingDate = new Date(data.created_at).getTime();
          const now = Date.now();
          const dayInMs = 24 * 60 * 60 * 1000;

          if (now - lastReadingDate < dayInMs) {
            setDrawnCards(data.cards || []);
          } else {
            setDrawnCards([]);
          }
        }

        if (error) console.log(error);
      }
    };

    checkLastReading();
  }, []);

  const drawCard = async () => {
    if (drawnCards.length >= 3) return;

    try {
      const res = await fetch("https://tarotapi.dev/api/v1/cards/random?n=1");
      const data = await res.json();
      const c = data.cards[0];

      const newCard = {
        name: c.name,
        meaning: c.meaning_up,
        description: c.desc,
        image: `https://www.sacred-texts.com/tarot/pkt/img/${c.name_short}.jpg`,
      };

      setCard(newCard);
      const updatedCards = [...drawnCards, newCard];
      setDrawnCards(updatedCards);

      if (updatedCards.length === 3) {
        const { error } = await supabase.from("readings").insert([
          {
            user_id: user.id,
            cards: updatedCards,
            status: "pending",
          },
        ]);

        if (error) console.error("Database error:", error);

        setTimeout(() => setCard(null), 20000);
      }
    } catch (e) {
      console.error("The stars are silent...", e);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {!user && (
        <Typography
          variant="h6"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontFamily: "'Playfair Display', serif",
            mb: 2,
            textAlign: "center",
          }}
        >
          You must be logged in to touch the sacred deck!
        </Typography>
      )}
      {card && <CardTarot {...card} />}
      {drawnCards.length === 0 && user && (
        <Typography
          variant="h6"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontFamily: "'Playfair Display', serif",
            mb: 2,
            textAlign: "center",
          }}
        >
          The veil between worlds is thin, and the spirits are restless. Reach
          into the ethereal void and draw three sacred cards to reveal the
          threads of your destiny... and once the alignment is complete, await
          for the all-mighty witch to tell you the meaning of your soul's
          reflection.
        </Typography>
      )}

      <Box
        sx={{
          width: { xs: "280px", sm: "400px", md: "800px" },
        }}
      >
        {drawnCards.length === 3 && !card && (
          <Lottie animationData={tarotCards} loop={false} />
        )}
      </Box>

      <ArcanaButton
        children={drawnCards.length === 3 ? "Destiny Sealed" : "Draw Card"}
        onClick={drawCard}
        disabled={drawnCards.length === 3 || !user}
      ></ArcanaButton>
    </Box>
  );
}

export default ReadingPage;
