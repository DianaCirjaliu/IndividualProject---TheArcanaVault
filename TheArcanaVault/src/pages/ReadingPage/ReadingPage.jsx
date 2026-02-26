import Typography from "@mui/material/Typography";
import ArcanaButton from "../../components/Button/Button";
import CardTarot from "../../components/Card/Card";
import { useEffect, useState } from "react";
import getData from "../../utils/getData";
import Lottie from "lottie-react";
import tarotCards from "../../assets/Tarot cards.json";
import Box from "@mui/material/Box";
import { supabase } from "../../services/supabaseClient";

function ReadingPage() {
  const [card, setCard] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        const cards = getData(currentUser.id);
        setDrawnCards(cards);
      }
    });
  }, []);

  const drawCard = async () => {
    if (drawnCards.length >= 3) {
      alert("The stars have spoken. No more cards can be drawn today.");
      return;
    }

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
        const readingData = {
          user_id: user.id,
          cards: updatedCards,
          status: "pending",
        };

        const { error } = await supabase.from("readings").insert([readingData]);
        if (error) {
          console.log(error);
        } else {
          localStorage.setItem(
            `userFate_${user.id}`,
            JSON.stringify({ cards: updatedCards, timestamp: Date.now() }),
          );
        }

        setTimeout(() => {
          setCard(null);
        }, 20000);
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
            fontStyle: "italic",
            mb: 2,
            textAlign: "center",
          }}
        >
          You must be logged in to touch the sacred deck!
        </Typography>
      )}
      {card && <CardTarot {...card} />}
      {drawnCards.length === 0 && (
        <Typography
          variant="h6"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontStyle: "italic",
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
