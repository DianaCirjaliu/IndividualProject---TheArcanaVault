import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CardTarot({ image, name, meaning, description }) {
  return (
    <Card
      sx={{
        maxWidth: 800,
        height: "fit-content",
        backgroundColor: "rgba(225, 213, 199, 0.58)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CardMedia
        sx={{ height: 400, width: 300 }}
        image={image}
        title="card image"
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {meaning}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardTarot;
