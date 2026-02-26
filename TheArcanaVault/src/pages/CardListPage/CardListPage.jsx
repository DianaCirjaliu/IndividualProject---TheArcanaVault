//hooks
import { useEffect, useState } from "react";

//material ui components
import { Grid, Container, Typography, Box } from "@mui/material";

//custom component
import SearchBar from "../../components/SearchBar/SearchBar";

function CardListPage() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

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

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const displayedCards = [...filteredCards].sort((a, b) => {
    if (sortOrder === "asc") return a.name.localeCompare(b.name);
    if (sortOrder === "des") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h3"
        sx={{
          mb: 6,
          textAlign: "center",
          color: "rgba(255, 255, 255, 0.7)",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        The Universal Deck
      </Typography>
      <SearchBar
        onSearch={(text) => setSearchQuery(text)}
        onSort={(criteria) => setSortOrder(criteria)}
      />

      <Grid container spacing={4} justifyContent="center">
        {displayedCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
