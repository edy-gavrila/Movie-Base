import { useState } from "react";

import Link from "next/link";

const emptyUserData = { password: "", email: "" };

const LoginForm = ({ onLogin }) => {
  const [userData, setUserData] = useState(emptyUserData);

  const emailChangedHandler = (event) =>
    setUserData({ ...userData, email: event.target.value });

  const passwordChangedHandler = (event) =>
    setUserData({ ...userData, password: event.target.value });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onLogin(userData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label className="block" htmlFor="email">
          Email:
        </label>
        <input
          className="border-2 rounded border-cyan-500 focus:border-2 focus:border-cyan-700  outline-none invalid:focus:bg-red-200  w-full p-0.5 mb-3 "
          id="email"
          value={userData.email}
          onChange={emailChangedHandler}
          placeholder="Please enter your email..."
          type="email"
          required
        />
      </div>

      <div className="mb-5">
        <label className="block" htmlFor="password">
          Password:
        </label>
        <input
          className="border-2 rounded border-cyan-500 focus:border-2 focus:border-cyan-700 outline-none invalid:focus:bg-red-200   w-full p-0.5"
          id="password"
          value={userData.password}
          onChange={passwordChangedHandler}
          placeholder="Please enter a password"
          type="password"
          required
        />
      </div>

      <div>
        <input
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-1 px-6 rounded"
          type="submit"
          value="Login"
        />
        <Link href="/reset-password">
          <a className="ml-4 text-cyan-700">Reset Password</a>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
