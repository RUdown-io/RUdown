import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>RUdown - Unleash the full power of blockchain with RUdown.</title>
        <meta
          name="description"
          content="RUdown is a blockchain-based funding system dedicated to raising awareness and supporting projects related to Down Syndrome. It leverages the Solana network to provide a transparent, secure, and efficient method for funding initiatives."
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
