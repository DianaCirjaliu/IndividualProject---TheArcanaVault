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

export default whiteInputStyle;
