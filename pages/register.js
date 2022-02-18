import React from "react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import SiteLayout from "../components/SiteLayout/SiteLayout";

function Register() {
  return (
    <SiteLayout>
      <div className="h-full flex flex-col justify-center items-left relative">
        <section>
          <h3 className="text-2xl text-zinc-800 mb-2">
            Register for an account
          </h3>
          <p>
            Please register to take full advantage of the features on this site.
          </p>
          <p>Registered users can:</p>
          <ul className="list-disc pl-8 text-sm">
            <li>Rate movies and shows</li>
            <li>Create custom lists and save movies and shows</li>
            <li>Write your own reviews</li>
          </ul>
          <p className="mb-4">
            Creating an account is free and easy. Just fill out the form below
          </p>
        </section>
        <RegistrationForm />
      </div>
    </SiteLayout>
  );
}

export default Register;
