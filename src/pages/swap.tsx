import type { NextPage } from "next";
import Head from "next/head";
import { SwapView } from "../views";

const Swap: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>RUdown - Swap page</title>
        <meta
          name="description"
          content="Swap Functionality"
        />
      </Head>
      <SwapView />
    </div>
  );
};

export default Swap;
