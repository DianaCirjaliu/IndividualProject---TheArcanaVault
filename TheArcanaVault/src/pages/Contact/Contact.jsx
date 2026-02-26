//hook
import { useSelector } from "react-redux";

//custom components
import ContactFormUser from "../../components/ContactForm/ContactFormUser";
import ContactFormAdmin from "../../components/ContactForm/ContactFormAdmin";

//material ui component
import Box from "@mui/material/Box";

function Contact() {
  const { isAdmin, user } = useSelector((state) => state.auth);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        m: { xs: 5, sm: 10 },
      }}
    >
      {isAdmin ? <ContactFormAdmin /> : <ContactFormUser userId={user?.id} />}
    </Box>
  );
}

export default Contact;
