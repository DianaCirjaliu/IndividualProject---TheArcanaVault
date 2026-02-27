//material ui components
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//custom components import
import ArcanaButton from "../../components/Button/Button";

//hook
import { useNavigate } from "react-router-dom";

//animation
import Lottie from "lottie-react";
import zodiac from "../../assets/Zodiac sign.json";

function Index() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: { xs: "100%", md: "auto" },
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: "calc(40% + 50px)", sm: 15 },
        pb: { xs: "calc(40% + 50px)", sm: 15 },
      }}
    >
      {/*text colon */}
      <CardContent
        sx={{
          p: { xs: 2, md: 8 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{
            fontWeight: 500,
            mb: 2,
            color: "rgba(255, 255, 255, 0.7)",
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: "2rem", md: "4rem" },
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
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Explore yourself. Explore the future, if you dare
        </Typography>
        <ArcanaButton
          children={"Get Started"}
          onClick={() => navigate("/login")}
        />
      </CardContent>
      {/*image colon */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <Lottie animationData={zodiac} loop={false} />
      </Box>
    </Box>
  );
}

export default Index;
