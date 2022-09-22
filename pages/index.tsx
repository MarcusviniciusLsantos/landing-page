import type { NextPage } from "next";
import Nav from "components/Nav";
import Intro from "components/Intro";
import What from "components/What";
import How from "components/How";
import Workflows from "components/Workflows";
import CreateBounty from "components/CreateBounty";
import CreateNetwork from "components/CreateNetwork";
import Participate from "components/Participate";
import Find from "components/Find";
import ForWhom from "components/ForWhom";
import Audited from "components/Audited";
import LaunchNetwork from "components/LaunchNetwork";
import Partners from "components/Partners";
// import Stories from "../components/Stories";
import {
  initializeApollo,
  APOLLO_STATE_PROP_NAME,
} from "../config/apolloClient";
import { useStories } from "../hooks/use-stories";
import { STORIES_QUERY } from "../graphql/stories-list-query";

const Home: NextPage = () => {
  const { loading, error, data } = useStories({ page: 0 });

  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Nav />
      <Intro />
      <What />
      <How />
      <Workflows />
      <CreateBounty />
      <CreateNetwork />
      <Participate />
      <Find />
      <ForWhom />
      <Audited />
      <LaunchNetwork />
      <Partners />
      {/* <Community /> */}
      {/* <Stories data={data} loading={loading} error={error} /> */}
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: STORIES_QUERY,
  });

  return {
    props: {
      [APOLLO_STATE_PROP_NAME]: apolloClient.cache.extract(),
    },
  };
}

export default Home;
