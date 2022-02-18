import Head from "next/head";
import Header from "../components/Header/Header";
import SiteLayout from "../components/SiteLayout/SiteLayout";
import { AuthContext } from "../Contexts/AuthContext";

export default function HomePage() {
  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <>
            <Head>
              <title>Movie Base</title>
              <meta name="description" content="Personal movie library" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <SiteLayout>
              <h1 className="text-4xl font-bold underline">Initial Project</h1>
            </SiteLayout>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}
