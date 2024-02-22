// ------ Dependances ------
import type { NextPage } from "next";

import { useState, useEffect } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

// ------ HistoryCarousel Interface ------

interface IHistoryCarousel {
  list: {
    id: number;
    title: string;
    text: string;
    img: string;
    year: string;
  }[];
}

// ------ HistoryCarousel Component ------

const d_variants = {
  initial: {
    top: 200,
    opacity: 0,
  },
  animate: {
    top: 0,
    opacity: 1,
  },
  exit: {
    top: 200,
    opacity: 0,
  },
};
const m_variants = {
  initial: {
    left: -200,
    opacity: 0,
  },
  animate: {
    left: 0,
    opacity: 1,
  },
  exit: {
    left: 200,
    opacity: 0,
  },
};

const HistoryCarousel: NextPage<IHistoryCarousel> = ({ list }) => {
  // Hooks
  const [val, setVal] = useState(0);
  const [screenW, setScreenW] = useState(0);

  const handleNext = () => {
    console.log(val);
    if (val >= list.length - 1) {
      setVal(0);
    } else {
      setVal(val + 1);
    }
  };
  const handlePrev = () => {
    console.log(val);
    if (val <= 0) {
      setVal(list.length - 1);
    } else {
      setVal(val - 1);
    }
  };
  const handleBodyResize = () => {
    const size = innerWidth;
    console.log(innerWidth);

    setScreenW(size);
  };

  useEffect(() => {
    handleBodyResize();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", (e) => handleBodyResize(), false);

    return () => {
      window.removeEventListener("resize", () => handleBodyResize(), false);
    };
  }, []);

  // Return
  return (
    <section className="our-history max-w-[1500px] pt-20 pb-24 px-10 mx-auto flex items-center max_lg:flex-col max_lg:space-y-4">
      <div className="top space-x-10 items-end px-10 flex max_md:flex-col max_md:space-x-0 max_md:space-y-8 max_md:items-center max_sm:px-0">
        <div className="left">
          <div className="img relative">
            <AnimatePresence mode={"wait"}>
              <motion.div
                variants={screenW <= 970 ? m_variants : d_variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative"
                key={list[val].id}
              >
                <Image
                  src={list[val].img}
                  width={460}
                  height={460}
                  alt="history-img"
                  className="brightness-[.6]"
                />
              </motion.div>
            </AnimatePresence>
            <p className="absolute -rotate-90 top-1/2 -translate-y-1/2 -translate-x-1/2 text-9xl font-bold text-tw_second max_md:rotate-0 max_md:top-0 max_md:left-1/2 max_md:text-7xl max_sm:text-5xl">
              {list[val].year}
            </p>
          </div>
        </div>
        <div className="right flex-1 relative max_md:text-center">
          <h2 className="absolute top-0 left-36 -translate-x-1/2 -translate-y-full pb-6 text-5xl font-bold text-tw_text break-before-all max_xl:text-4xl max_xl:left-0 max_md:relative max_md:translate-x-0 max_md:translate-y-0">
            {list[val].title}
          </h2>
          <p className="font-medium">{list[val].text}</p>
        </div>
      </div>
      <div className="arrow max_lg:-rotate-90">
        <MdArrowDropUp
          className="text-7xl cursor-pointer text-tw_text transition-all duration-300 hover:text-tw_second"
          onClick={handlePrev}
        />
        <MdArrowDropDown
          className="text-7xl cursor-pointer text-tw_text transition-all duration-300 hover:text-tw_second"
          onClick={handleNext}
        />
      </div>
    </section>
  );
};
export default HistoryCarousel;
