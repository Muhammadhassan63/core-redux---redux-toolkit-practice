import { useEffect } from "react";
import { useSelector } from "react-redux";
import AccountAccess from "./AccountAccess";

const AccountDetails = ({name}) => {
  const account = useSelector((state) => state.account);
  useEffect(()=>{
    console.log("Account page renders")
  })

  return (
    <div>
      <p>Welcome: {name}</p>
      <h1>Your Balance: {account.balance}</h1>

      <AccountAccess/>
      
    </div>
  );
};

export default AccountDetails;
