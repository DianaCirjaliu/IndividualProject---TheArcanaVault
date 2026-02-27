import Button from "@mui/material/Button";

function ArcanaButton({ children, onClick, type = "button", disabled }) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant="outlined"
      sx={{
        mt: 6,
        margin: 0,
        p: "12px 40px",
        bgcolor: "rgba(111, 5, 210, 0.61)",
        border: "1px solid #A855F7",
        borderRadius: "20px",
        boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": { transform: "translateY(-4px)" },
        color: "rgba(255, 255, 255, 0.7)",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      {children}
    </Button>
  );
}

export default ArcanaButton;
