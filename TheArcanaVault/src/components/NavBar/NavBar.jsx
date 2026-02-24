import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const pathnameToIndex = {
    "/": 0,
    "/login": 1,
    "/readingPage": 2,
    "/contact": 3,
  };

  const value = pathnameToIndex[location.pathname] ?? 0;
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "transparent",
        position: "fixed",
        top: 0,
        left: 0,
        textColor: "purple",
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
            bgcolor: "purple",
            height: "3px",
          },
        }}
      >
        <Tab label="Origin" component={Link} to="/" />
        <Tab label="Login" component={Link} to="/login" />
        <Tab label="The Spread" component={Link} to="/readingPage" />
        <Tab label="Contact" component={Link} to="/contact" />
      </Tabs>
    </Box>
  );
}

export default NavBar;
