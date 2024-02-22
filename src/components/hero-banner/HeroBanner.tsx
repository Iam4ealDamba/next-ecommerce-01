// ------ Dependances ------

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

// ------ HeroBanner Interface ------

interface IHeroBanner {
  title: string;
  sub_title: string;
  img?: string;
}

// ------ HeroBanner Component ------

const HeroBanner: NextPage<IHeroBanner> = ({ title, sub_title, img }) => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <section className="hero-banner h-[55vh] flex items-end relative">
      <div
        className="img absolute w-full h-full z-[-1] brightness-[.6]"
        style={{
          background: `url(${
            img ? img : "/images/bg-1.jpg"
          }) no-repeat center center`,
        }}
      ></div>
      <div className="hero-banner-content w-full max-w-[1500px] mx-auto px-6 mb-20 max_lg:flex-col max_lg:items-center max_lg:text-center space-y-8">
        <div className="text max-w-[600px] space-y-6 max_lg:space-x-0 max_lg:mx-auto">
          <div className="top">
            <h1 className="text-6xl font-bold uppercase max_sm:text-2xl">
              - {title}
            </h1>
          </div>
          <div className="bottom text-justify text-lg max_lg:text-center">
            {sub_title}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroBanner;
