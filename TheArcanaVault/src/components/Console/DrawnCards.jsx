import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function DrawnCards({ cards }) {
  if (!cards || cards.length === 0) return null;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, sm: 3 }} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={4} sm={4} key={index}>
            <Box
              component="img"
              src={card.image}
              alt={card.name}
              sx={{
                width: "100%",
                maxWidth: { xs: "50px", sm: "120px", md: "150px" },
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.2)",
                mb: 1,
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                margin: "0 auto",
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: { xs: "0.65rem", sm: "0.9rem" },
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {card.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DrawnCards;
