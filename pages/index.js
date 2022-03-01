import Head from "next/head";
import SiteLayout from "../components/SiteLayout";
import DefaultLists from "../components/DefaultLists";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Movie Base</title>
        <meta name="description" content="Personal movie library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteLayout>
        <DefaultLists />
      </SiteLayout>
    </>
  );
}
