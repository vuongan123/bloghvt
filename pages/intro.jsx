import Head from "next/head";
import React from "react";
import PeopleGrid from "../components/PeopleGrid";

const Intro = () => {
  return (
    <>
      <Head>
        <title>Giới thiệu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PeopleGrid />
      <section className="wot neu-01 noSpacingTop">
        <div className="wot__wrapper">

        </div>
      </section>
    </>
  );
};

export default Intro;
