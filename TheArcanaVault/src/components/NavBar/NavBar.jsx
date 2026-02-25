import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const location = useLocation();
  const { isAdmin } = useSelector((state) => state.auth);

  const allTabs = [
    { label: "Origin", to: "/", visible: true },
    { label: "Login", to: "/login", visible: true },
    { label: "The Spread", to: "/readingPage", visible: !isAdmin },
    { label: "The Weaver’s Hall", to: "/predictionPage", visible: true },
    { label: "Tarot Deck", to: "/tarotDeck", visible: true },
    { label: "Contact", to: "/contact", visible: true },
  ];

  const visibleTabs = allTabs.filter((tab) => tab.visible);
  const currentIndex = visibleTabs.findIndex(
    (tab) => tab.to === location.pathname,
  );
  const value = currentIndex !== -1 ? currentIndex : 0;

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "transparent",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <Tabs
        value={value}
        centered
        sx={{
          "& .MuiTab-root": {
            color: "rgba(255, 255, 255, 0.7)",
            fontFamily: "'Playfair Display', serif",
          },

          "& .Mui-selected": {
            color: "#ffffff !important",
            fontWeight: "bold",
          },

          "& .MuiTabs-indicator": {
            bgcolor: "#A855F7",
            height: "3px",
          },
        }}
      >
        {visibleTabs.map((tab) => (
          <Tab key={tab.to} label={tab.label} component={Link} to={tab.to} />
        ))}
      </Tabs>
    </Box>
  );
}

export default NavBar;
