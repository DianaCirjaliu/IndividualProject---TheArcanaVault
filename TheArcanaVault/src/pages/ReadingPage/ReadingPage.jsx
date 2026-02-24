import Typography from "@mui/material/Typography";
import ArcanaButton from "../../components/Button/Button";
import CardTarot from "../../components/Card/Card";
import { useState } from "react";
import getData from "../../utils/getData";

function ReadingPage() {
  const [card, setCard] = useState(null);
  const [drawnCards, setDrawnCards] = useState(() => {
    return getData();
  });

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
        const data = {
          cards: updatedCards,
          timestamp: Date.now(),
        };
        localStorage.setItem("userFate", JSON.stringify(data));
      }
    } catch (e) {
      console.error("The stars are silent...", e);
    }
  };

  return (
    <div className="container" style={{ gap: "20px" }}>
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

      {drawnCards.length === 3}

      <ArcanaButton
        children={drawnCards.length === 3 ? "Destiny Sealed" : "Draw Card"}
        onClick={drawCard}
        disabled={drawnCards.length === 3}
      ></ArcanaButton>
    </div>
  );
}

export default ReadingPage;
