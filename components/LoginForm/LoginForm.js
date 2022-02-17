import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <form className="h-full mt-52 flex flex-col justify-center items-left px-4">
      <h3 className="text-2xl text-zinc-800">Login to your account</h3>
      <p>
        By Logging in, you can rate movies and make lists with your favourite
        movies
      </p>
      <p className="mb-10">Don&apos;t have an account yet? Register here!</p>
      <div>
        <label className="block" htmlFor="username">
          Username:
        </label>
        <input
          className="border-2 rounded border-cyan-500 focus:border-2 focus:border-cyan-700  outline-none invalid:bg-red-200  w-full p-0.5 mb-3 "
          id="username"
          placeholder="Please enter a username..."
          required
        />
      </div>
      <div>
        <label className="block" htmlFor="email">
          Email:
        </label>
        <input
          className="border-2 rounded border-cyan-500 focus:border-2 focus:border-cyan-700  outline-none invalid:bg-red-200  w-full p-0.5 mb-3 "
          id="email"
          placeholder="Please enter your email..."
          required
        />
      </div>
      <div>
        <label className="block" htmlFor="password">
          Password:
        </label>
        <input
          className="border-2 rounded border-cyan-500 focus:border-2 focus:border-cyan-700 outline-none invalid:bg-red-200   w-full p-0.5 mb-5"
          id="password"
          placeholder="Please enter a password"
          type="password"
          required
        />
        <input
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-1 px-6 rounded"
          type="submit"
          value="Login"
        />
        <Link href="/reset-password"><a className="ml-4 text-cyan-700">Reset Pasword</a></Link>
      </div>
    </form>
  );
};

export default LoginForm;
