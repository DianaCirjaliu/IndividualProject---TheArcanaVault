import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import ArcanaButton from "../../components/Button/Button";
import zodiac from "/zodiac.png";

function Index() {
  return (
    <div className="container" style={{ flexDirection: "row" }}>
      {/*text colon */}
      <CardContent sx={{ p: { xs: 4, md: 8 }, flex: 1 }}>
        <NavBar />
        <Typography
          variant="h2"
          component="div"
          sx={{
            fontWeight: 500,
            mb: 2,
            fontFamily: "serif",
            fontSize: { xs: "2rem", md: "3.5rem" },
          }}
        >
          Welcome to <br />
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #A855F7 0%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Arcana Vault
          </Box>{" "}
          galaxy
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            maxWidth: 400,
            lineHeight: 1.6,
          }}
        >
          Explore yourself. Explore the future, if you dare ...
        </Typography>
        <ArcanaButton children={"Get Started"} />
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
        <CardMedia
          component="img"
          image={zodiac}
          alt="zodiac image"
          sx={{
            width: "100%",
            maxWidth: "450px",
            height: "auto",
            animation: "rotateZodiac 100s linear infinite",
            "@keyframes rotateZodiac": {
              from: { transform: "rotate(0deg)" },
              to: { transform: "rotate(360deg)" },
            },
          }}
        />
      </Box>
    </div>
  );
}

export default Index;
