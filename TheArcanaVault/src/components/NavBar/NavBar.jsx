import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

function NavBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "transparent",
        position: "fixed",
        top: 0,
        left: 0,
        textColor: "purple",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
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
        <Tab label="Origin" />
        <Tab label="Login" />
        <Tab label="The Spread" />
        <Tab label="Contact" />
      </Tabs>
    </Box>
  );
}

export default NavBar;
