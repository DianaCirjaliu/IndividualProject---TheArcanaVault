import ArcanaButton from "../../components/Button/Button";
import CardTarot from "../../components/Card/Card";
import { useState } from "react";

function ReadingPage() {
  const [card, setCard] = useState(null);

  const drawCard = async () => {
    try {
      const res = await fetch("https://tarotapi.dev/api/v1/cards/random?n=1");
      const data = await res.json();
      const c = data.cards[0];

      setCard({
        name: c.name,
        meaning: c.meaning_up,
        description: c.desc,
        image: `https://www.sacred-texts.com/tarot/pkt/img/${c.name_short}.jpg`,
      });
    } catch (e) {
      console.error("The stars are silent...", e);
    }
  };

  return (
    <div className="container">
      {card && <CardTarot {...card} />}

      <ArcanaButton children={"Draw Card"} onClick={drawCard}></ArcanaButton>
    </div>
  );
}

export default ReadingPage;
