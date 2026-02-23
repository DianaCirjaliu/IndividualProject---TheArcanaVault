import React from "react";
import Card from "@mui/material/Card";

function MainCard({ children }) {
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
        position: "absolute",
        overflow: "hidden",
        color: "white",
        display: "flex",

        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",

        //mobile
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      {children}
    </Card>
  );
}

export default MainCard;
