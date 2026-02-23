import ArcanaButton from "../../components/Button/Button";
import CardTarot from "../../components/Card/Card";
import { useState } from "react";

function ReadingPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  function drawCard() {
    const mockCard = {
      name: "The Moon",
      meaning: "Illusion, fear, anxiety",
      description: "The Moon represents your imagination and the subconscious.",
      image:
        "https://www.tarotcardmeanings.net/images/tarotcards/tarot-moon.jpg",
    };

    setSelectedCard(mockCard);
  }

  return (
    <div className="container">
      {selectedCard && (
        <CardTarot
          name={selectedCard.name}
          meaning={selectedCard.meaning}
          description={selectedCard.description}
          image={selectedCard.image}
        />
      )}
      {/* <button onClick={drawCard}>test btn</button> */}
      <ArcanaButton children={"Draw Card"}></ArcanaButton>
    </div>
  );
}

export default ReadingPage;
