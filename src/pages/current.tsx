import type { NextPage } from "next";
import Head from "next/head";
import { CurrentView } from "../views";

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://rudown.com/api/get-current-projects/')
  const posts = await res.json()
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

const Current: NextPage = (props) => {
  
  return (
    <div>
      <Head>
        <title>RUdown - Projects</title>
        <meta
          name="description"
          content="Current projects"
        />
      </Head>
      <CurrentView />
    </div>
  );
};

export default Current;
