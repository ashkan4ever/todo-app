import type { NextPage } from "next";
import Head from "next/head";
import HomeContainer from "../src/Containers/Home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A simple Todo App" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HomeContainer />
    </div>
  );
};

export default Home;
