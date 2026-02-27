//hook
import { useSelector } from "react-redux";

//custom components
import AdminConsole from "../../components/Console/AdminConsole";
import UserConsole from "../../components/Console/UserConsole";

//material ui component
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function PredictionPage() {
  const { isAdmin, user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <Box
        sx={{
          pt: { xs: 20, sm: 40 },
          pb: { xs: 20, sm: 40 },
          p: 4,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          The stars are hidden from those who have not entered the sanctuary.
          Please log in to see your destiny.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        maxWidth: { xs: "100%", md: "1200px" },
        margin: "0 auto",
        p: { xs: 8, md: 10 },
        minHeight: { xs: "auto", md: "80vh" },
        gap: { xs: 3, md: 5 },
      }}
    >
      {isAdmin ? <AdminConsole /> : <UserConsole userId={user.id} />}
    </Box>
  );
}

export default PredictionPage;
