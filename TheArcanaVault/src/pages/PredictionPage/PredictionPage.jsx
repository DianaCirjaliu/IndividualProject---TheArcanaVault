import { useSelector } from "react-redux";
import AdminConsole from "../../components/Console/AdminConsole";
import UserConsole from "../../components/Console/UserConsole";
import Box from "@mui/material/Box";

function PredictionPage() {
  const { isAdmin, user } = useSelector((state) => state.auth);

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
      {isAdmin ? <AdminConsole /> : <UserConsole userId={user?.id} />}
    </Box>
  );
}

export default PredictionPage;
