import VantaComponent from "../../components/VantaComponent/VantaComponent";
import MainCard from "../../components/MainCard/MainCard";
import styles from "./Index.module.scss";

function Index() {
  return (
    <div>
      <VantaComponent />
      <div className={styles.container}>
        <MainCard />
      </div>
    </div>
  );
}

export default Index;
