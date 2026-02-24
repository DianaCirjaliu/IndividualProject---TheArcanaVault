import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CardTarot({ image, name, meaning, description }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(207, 198, 198, 0.21)",
        borderRadius: "20px",
        overflow: "hidden",
        maxWidth: "900px",
        margin: "20px auto",
        border: "1px solid rgba(238, 235, 241, 0.3)",
      }}
    >
      {/*text colon */}
      <CardContent
        sx={{
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          maxHeight: "500px",
          maxWidth: "300px",
          overflow: "auto",
          gap: 4,
          pt: 6,
          pb: 6,
        }}
      >
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
          Meaning: {meaning}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
          Description: {description}
        </Typography>
      </CardContent>
      {/*image colon */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <Box sx={{ p: 2, flexShrink: 0 }}>
          <CardMedia
            component="img"
            sx={{ height: 400, width: 300, objectFit: "contain" }}
            image={image}
            title="card image"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default CardTarot;
