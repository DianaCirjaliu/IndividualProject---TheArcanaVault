//material ui components
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";

//hook
import { useState } from "react";

function SearchBar({ onSearch, onSort }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  const handleSortClick = (criteria) => {
    onSort(criteria);
    setAnchorEl(null);
  };

  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "80%",
        margin: "20px auto",
        mb: 5,
        backgroundColor: "#ffffff6a",
        borderRadius: "20px",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search cards..."
        onChange={handleChange}
      />

      <IconButton type="button" sx={{ p: "10px" }} onClick={handleClick}>
        <FilterListIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#c1bdbde1",
              borderRadius: "12px",
            },
          },
        }}
      >
        <MenuItem onClick={() => handleSortClick("")}>None</MenuItem>
        <MenuItem onClick={() => handleSortClick("asc")}>Sort: A - Z</MenuItem>
        <MenuItem onClick={() => handleSortClick("des")}>Sort: Z - A</MenuItem>
      </Menu>

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <IconButton sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
