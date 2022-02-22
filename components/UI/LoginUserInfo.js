import Link from "next/link";

function LoginUserInfo() {
  return (
    <section>
      <h3 className="text-2xl text-zinc-800 mb-2">Login to your account</h3>
      <p>
        By Logging in, you can rate movies and make lists with your favourite
        movies
      </p>
      <p>
        Don&apos;t have an account yet?{" "}
        <Link href={"/register"}>
          <a className="text-cyan-700">Register here!</a>
        </Link>
      </p>
      <p className="mb-10">
        You can also use the website in &quot;Guest Mode&quot;. Just click the
        link on the top-right.
      </p>
    </section>
  );
}

export default LoginUserInfo;
