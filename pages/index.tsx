import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Team from "../components/team";
import Footer from "../components/footer"
import Questions from "../components/questions";
import Event from "../components/event"
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>CodeZen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" sizes="32x32" href="/favicon.png" />
      </Head>

     <HomePage />
     <About />
     <Event />
     <Questions />
     <Team />
     <Footer />
    </div>
  );
};

export default Home;
