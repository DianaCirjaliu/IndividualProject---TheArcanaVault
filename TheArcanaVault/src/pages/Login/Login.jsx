import NavBar from "../../components/NavBar/NavBar";
import ConnectionForm from "../../components/ConectionForm/ConnectionForm";
import styles from "./Login.module.scss";

function Login() {
  return (
    <div className={styles.container}>
      <NavBar />
      <ConnectionForm />
    </div>
  );
}

export default Login;
