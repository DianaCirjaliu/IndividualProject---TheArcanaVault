import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function DrawnCards({ cards }) {
  if (!cards || cards.length === 0) return null;

  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <img
              src={card.image}
              alt={card.name}
              style={{
                width: "100%",
                maxWidth: "120px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.2)",
                marginBottom: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{ color: "rgba(255, 255, 255, 0.7)", fontStyle: "italic" }}
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
