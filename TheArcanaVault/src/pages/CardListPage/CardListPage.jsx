import { useEffect, useState } from "react";
import { Grid, Container, Typography, Box } from "@mui/material";

function CardListPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("https://tarotapi.dev/api/v1/cards");
        const data = await res.json();

        const formattedCards = data.cards.map((c) => ({
          name: c.name,
          image: `https://www.sacred-texts.com/tarot/pkt/img/${c.name_short}.jpg`,
        }));

        setCards(formattedCards);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, []);

  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h3"
        sx={{
          mb: 6,
          textAlign: "center",
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        The Universal Deck
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            {/* Construim "cartea" direct aici */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <img
                src={card.image}
                alt={card.name}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  textShadow: "1px 1px 2px black",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                {card.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardListPage;
