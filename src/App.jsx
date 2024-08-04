import { useSelector } from "react-redux";
import UserForm from "./components/UserForm";
import AccountDetails from "./components/AccountDetails";

const App = () => {
  const userName = useSelector((state) => state.user.name);
  return <div>{userName === "" ? <UserForm /> : <AccountDetails name={userName}/>}</div>;
};

export default App;
