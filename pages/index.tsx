import type { NextPage } from "next";
import Head from "next/head";
import styles from "../src/styles/Home.module.css";
import HomeContainer from "../src/Containers/Home";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A simple Todo App" />
      </Head>

      <HomeContainer />
    </div>
  );
};

export default Home;
