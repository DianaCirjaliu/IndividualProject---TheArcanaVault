import { useSelector } from "react-redux";
import AdminConsole from "../../components/Console/AdminConsole";
import UserConsole from "../../components/Console/UserConsole";

function PredictionPage() {
  const { isAdmin, user } = useSelector((state) => state.auth);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      {isAdmin ? <AdminConsole /> : <UserConsole userId={user?.id} />}
    </div>
  );
}

export default PredictionPage;
