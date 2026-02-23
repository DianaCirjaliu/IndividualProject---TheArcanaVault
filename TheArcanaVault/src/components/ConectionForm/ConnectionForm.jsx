import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const whiteInputStyle = {
  width: "100%",
  overflow: "visible",
  mb: 2,
  "& .MuiInputBase-input": { color: "white" },
  "& .MuiInputLabel-root": { color: "rgba(255, 255, 255, 0.7)" },
  "& .MuiInputLabel-root.Mui-focused": { color: "white" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
      borderRadius: "15px",
    },
    "&:hover fieldset": { borderColor: "white" },
    "&.Mui-focused fieldset": { borderColor: "#A855F7" },
  },
};

function ConnectionForm() {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 500,
          maxHeight: 600,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgba(67, 65, 72, 0.4)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "40px",
        }}
      >
        <CardContent
          sx={{
            padding: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            The stars incline, but they do not bind... unless you forget your
            password.
          </Typography>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={whiteInputStyle}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={whiteInputStyle}
          />
          <TextField
            id="outlined-basic"
            label="Zodiac sign"
            variant="outlined"
            sx={whiteInputStyle}
          />

          <CardActions>
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
              Get Started
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default ConnectionForm;
