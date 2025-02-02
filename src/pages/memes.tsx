import type { NextPage } from "next";
import Head from "next/head";
import { MemesView } from "../views";

const Memes: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>RUdown - News</title>
        <meta
          name="description"
          content="RUdown is a blockchain-based funding system dedicated to raising awareness and supporting projects related to Down Syndrome. It leverages the Solana network to provide a transparent, secure, and efficient method for funding initiatives."
        />
      </Head>
      <MemesView />
    </div>
  );
};

export default Memes;
