import Button from "@mui/material/Button";

function ArcanaButton({ children }) {
  return (
    <Button
      variant="outlined"
      sx={{
        mt: 6,
        p: "12px 40px",
        color: "white",
        border: "1px solid #A855F7",
        borderRadius: "20px",
        boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
        "&:hover": {
          border: "1px solid #EC4899",
          backgroundColor: "rgba(168, 85, 247, 0.1)",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default ArcanaButton;
