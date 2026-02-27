import Button from "@mui/material/Button";

function SecondaryButton({ children, onSwitch }) {
  return (
    <Button
      onClick={onSwitch}
      sx={{
        bgcolor: "rgba(79, 11, 142, 0.47)",
        border: "1px solid rgba(168, 85, 247, 0.5)",
        borderRadius: "8px",
        padding: "6px 12px",
        fontSize: "0.8rem",
        textTransform: "none",
        zIndex: 1,
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

export default SecondaryButton;
