import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import zodiac from "../../assets/zodiac.png";
import NavBar from "../NavBar/NavBar";

function MainCard() {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 1100,
        minHeight: "80vh",
        borderRadius: "40px",
        backgroundColor: "rgba(67, 65, 72, 0.4)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "none",
        position: "relative",
        overflow: "hidden",
        color: "white",
        display: "flex",

        //mobile
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
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

        <Button
          variant="outlined"
          sx={{
            mt: 6,
            p: "12px 40px",
            color: "white",
            border: "1px solid #A855F7",
            borderRadius: "20px",
            boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
            "&:hover": {
              border: "1px solid #EC4899",
              backgroundColor: "rgba(168, 85, 247, 0.1)",
            },
          }}
        >
          Get Started
        </Button>
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
    </Card>
  );
}

export default MainCard;
