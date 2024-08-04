import { useState } from "react";
import { useDispatch } from "react-redux";
import {withdraw, deposit} from '../features/accountSlice'

const AccountAccess = () => {
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const dispatch=useDispatch()

  const withdrawAmountHandler=()=>{
    dispatch(withdraw(parseInt(withdrawAmount)))
  }

  const depositAmountHandler=()=>{
    dispatch(deposit(parseInt(depositAmount)))
  }

  return (
    <div>
      <div>
        <label htmlFor="deposit"></label>
        <input
          type="number"
          id="deposit"
          name="deposit"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button onClick={depositAmountHandler}>Deposit</button>
      </div>
      <div>
        <label htmlFor="withdraw"></label>
        <input
          type="number"
          id="withdraw"
          name="withdraw"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button onClick={withdrawAmountHandler}>Withdraw</button>
      </div>
    </div>
  );
};

export default AccountAccess;
