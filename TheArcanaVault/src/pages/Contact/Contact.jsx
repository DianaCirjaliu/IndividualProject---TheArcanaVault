import { useSelector } from "react-redux";
import ContactFormUser from "../../components/ContactForm/ContactFormUser";
import ContactFormAdmin from "../../components/ContactForm/ContactFormAdmin";

function Contact() {
  const { isAdmin, user } = useSelector((state) => state.auth);

  return (
    <div className="container">
      {isAdmin ? <ContactFormAdmin /> : <ContactFormUser userId={user?.id} />}
    </div>
  );
}

export default Contact;
