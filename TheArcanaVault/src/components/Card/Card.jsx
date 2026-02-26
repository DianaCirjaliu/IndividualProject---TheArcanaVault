//material ui components
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CardTarot({ image, name, meaning, description }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(207, 198, 198, 0.21)",
        borderRadius: "20px",
        maxWidth: "900px",
        widows: "100%",
        margin: "20px auto",
        border: "1px solid rgba(238, 235, 241, 0.3)",
        overflow: "hidden",
      }}
    >
      {/*text colon */}
      <CardContent
        sx={{
          flex: 1,
          display: { xs: "none", sm: "flex" },
          justifyContent: { xs: "flex-start", md: "center" },
          textAlign: { xs: "center", md: "left" },
          flexDirection: "column",
          maxWidth: "100%",
          p: 5,
          gap: 2,
          maxHeight: { xs: "300px", md: "500px" },
          overflowY: "auto",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: "1.5rem", md: "2.1rem" },
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Meaning: {meaning}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
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
          p: { xs: 2, md: 4 },
          bgcolor: "transparent",
          width: "100%",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: { xs: 300, sm: 400, md: 450 },
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain",
            borderRadius: "12px",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
          }}
          image={image}
          title="card image"
        />
      </Box>
    </Box>
  );
}

export default CardTarot;
