import Button from "@mui/material/Button";

function ArcanaButton({ children }) {
  return (
    <Button
      variant="outlined"
      sx={{
        mt: 6,
        margin: 0,
        p: "12px 40px",
        color: "white",
        bgcolor: "rgba(111, 5, 210, 0.61)",
        border: "1px solid #A855F7",
        borderRadius: "20px",
        boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      {children}
    </Button>
  );
}

export default ArcanaButton;
