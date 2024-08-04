import { useDispatch } from "react-redux";
import { useState } from "react";
import { createUser } from "../features/user";
const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(createUser(name, email, password));
    setEmail('')
    setPassword('')
    setName('')
  };
  return (
    <div>
      <form onSubmit={handleSumit}>
        <div>
          <label htmlFor="username">Name </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="username"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            required
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
