// ------ Dependances ------

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

// ------ HeroBannerHome Component ------

const variants = {
  initial: {
    filter: "brightness(0)",
  },
  animate: {
    filter: "brightness(0.6)",
  },
};

const HeroBannerHome: NextPage = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <section className="hero-banner h-[100vh] flex items-center relative">
      <motion.div
        variants={variants}
        initial={"initial"}
        animate="animate"
        className="img absolute w-full h-full z-[-1] brightness-[.6]"
        style={{
          background: "url('/images/bg-1.jpg') no-repeat center center",
        }}
      ></motion.div>
      <div className="hero-banner-content w-full max-w-[1500px] mx-auto px-10 max_lg:flex-col max_lg:items-center max_lg:text-center space-y-8">
        <div className="text max-w-[600px] space-y-6 max_lg:space-x-0 max_lg:mx-auto">
          <div className="top">
            <h1 className="text-6xl font-bold uppercase max_sm:text-2xl">
              - Bienvenue Chez Honey Glass
            </h1>
          </div>
          <div className="bottom text-justify text-lg max_lg:text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est totam
            ipsum magnam enim odio repellat recusandae soluta nisi beatae
            pariatur consectetur quia.
          </div>
        </div>
        <div className="btn">
          <Link
            href="/shop"
            className="font-bold text-base py-3 px-8 uppercase text-tw_second bg-neutral-800 "
          >
            Voir la Boutique
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HeroBannerHome;
