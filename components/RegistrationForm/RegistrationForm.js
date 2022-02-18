import { useState } from "react";

import Link from "next/link";

const defaultUserData = {
  username: "",
  email: "",
  password: "",
  photoURL: "",
};

const formInputClasses =
  "border-2 rounded border-cyan-500 focus:border-2 focus:border-cyan-700  outline-none invalid:focus:bg-red-200  w-full p-0.5 mb-3 ";

function RegistrationForm({ onRegister }) {
  const [userData, setUserData] = useState(defaultUserData);

  const usernameChangedHandler = (event) =>
    setUserData({ ...userData, username: event.target.value });

  const photoURLChangedHandler = (event) =>
    setUserData({ ...userData, photoURL: event.target.value });

  const emailChangedHandler = (event) =>
    setUserData({ ...userData, email: event.target.value });

  const passwordChangedHandler = (event) =>
    setUserData({ ...userData, password: event.target.value });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onRegister(userData);
  };

  return (
    <form>
      <div>
        <label className="block" htmlFor="username">
          Username:
        </label>
        <input
          className={formInputClasses}
          id="username"
          value={userData.username}
          onChange={usernameChangedHandler}
          placeholder="Please choose a username..."
          type="email"
          required
        />
      </div>
      <div>
        <label className="block" htmlFor="email">
          Email:
        </label>
        <input
          className={formInputClasses}
          id="email"
          value={userData.email}
          onChange={emailChangedHandler}
          placeholder="Please enter your email..."
          type="email"
          required
        />
      </div>
      <div>
        <label className="block" htmlFor="password">
          Password:
        </label>
        <input
          className={formInputClasses}
          id="password"
          value={userData.email}
          onChange={passwordChangedHandler}
          placeholder="Please enter your password..."
          type="password"
          required
        />
      </div>

      <div className="mb-5">
        <label className="block" htmlFor="avatarURL">
          Avatar URL:
        </label>
        <input
          className={formInputClasses}
          id="avatarURL"
          value={userData.photoURL}
          onChange={photoURLChangedHandler}
          placeholder="Please enter an avatar URL..."
          type="url"
        />
      </div>

      <div>
        <input
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-1 px-6 mr-4 rounded font-sourceSans"
          type="submit"
          value="Register"
        />
        <span>Already registered?</span>
        <Link href="/login">
          <a className=" ml-1 text-cyan-700">Login</a>
        </Link>
      </div>
    </form>
  );
}

export default RegistrationForm;
