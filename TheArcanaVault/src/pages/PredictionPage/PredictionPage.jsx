import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import getData from "../../utils/getData";
import Grid from "@mui/material/Grid";
import magicBallAnim from "../../assets/Magic Crystal Ball.json";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import { useSelector } from "react-redux";
import AdminConsole from "../../components/Console/AdminConsole";
import UserConsole from "../../components/Console/UserConsole";

function PredictionPage() {
  const { isAdmin, user } = useSelector((state) => state.auth);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      {isAdmin ? <AdminConsole /> : <UserConsole userId={user?.id} />}
    </div>
  );
}

export default PredictionPage;
