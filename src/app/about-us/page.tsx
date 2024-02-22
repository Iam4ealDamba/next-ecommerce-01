"use client";

// ------ Dependances ------

import { useState } from "react";
import { useRouter } from "next/navigation";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

import HeroBanner from "@/components/hero-banner/HeroBanner";
import SectionTitle from "@/components/section-title/SectionTitle";
import HistoryCarousel from "@/components/carousel/HistoryCarousel";
import Layout from "@/layout";

// ------ Index Component ------

const AboutUsPage = () => {
  const [history_list] = useState([
    {
      id: 1,
      title: "Notre entreprise depuis 2010",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nunc, netus faucibus adipiscing. Posuere nisl massa interdum magna. Sollicitudin ac enim libero id ac. Aenean pellentesque in eu dolor, tristique viverra amet bibendum.",
      img: "/images/about-us.jpg",
      year: "2010",
    },
    {
      id: 2,
      title: "Une implantation nationale",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nunc, netus faucibus adipiscing. Posuere nisl massa interdum magna. Sollicitudin ac enim libero id ac. Aenean pellentesque in eu dolor, tristique viverra amet bibendum.",
      img: "/images/about-us.jpg",
      year: "2015",
    },
    {
      id: 3,
      title: "Vers de plus grands projets",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nunc, netus faucibus adipiscing. Posuere nisl massa interdum magna. Sollicitudin ac enim libero id ac. Aenean pellentesque in eu dolor, tristique viverra amet bibendum.",
      img: "/images/about-us.jpg",
      year: "2023",
    },
  ]);

  const route = useRouter();

  // Return
  return (
    <Layout>
      <motion.main
        aria-label="about-us-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroBanner
          title="A Propos"
          sub_title="Some optionnal sub title informations"
          img={"/images/bg-3.jpg"}
        />
        <HistoryCarousel list={history_list} />
        <section className="our-philosophy max-w-[1500px] mx-auto pt-10 text-center space-y-4 px-10">
          <SectionTitle
            title="Notre philosophie chez Honey Glass"
            sub_title=""
            title_description={[
              "Sed cursus tellus risus, quis vestibulum diam volutpat eget. Sed ornare lacus vitae urna porttitor fermentum. Aliquam tincidunt augue sed ipsum imperdiet iaculis. Praesent malesuada nisl eu felis blandit scelerisque.",
              "Aliquam tincidunt quam sit amet augue pulvinar ullamcorper. Cras in tincidunt mi, vel euismod est. Etiam fringilla purus commodo est dignissim, at facilisis elit lobortis. Vestibulum lobortis justo eu facilisis scelerisque. Integer nulla lacus, elementum quis lectus ac, consequat volutpat dui. Duis eu tortor sed metus aliquet tempus.",
            ]}
          />
        </section>
        <section className="our-philosophy max-w-[100vw] mx-auto pt-28 pb-20 space-y-20 text-center">
          <div className="title">
            <h2 className="text-4xl font-bold">Liste de nos partenaires</h2>
          </div>
          <div className="slider flex items-center">
            <Splide
              aria-label="My Favorite Images"
              options={{
                type: "loop",
                focus: "center",
                pagination: false,
                arrows: false,
                perPage: 5,
                autoScroll: {
                  speed: 1,
                  pauseOnHover: false,
                },
                breakpoints: {
                  1380: {
                    perPage: 4,
                  },
                  1110: {
                    perPage: 3,
                  },
                  830: {
                    perPage: 2,
                  },
                  540: {
                    perPage: 1,
                  },
                },
              }}
              extensions={{ AutoScroll }}
            >
              <SplideSlide>
                <a
                  href="https://iamdamba-dev.fr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/partner.png"
                    alt=""
                    width={260}
                    height={260}
                  />
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://iamdamba-dev.fr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/partner.png"
                    alt=""
                    width={260}
                    height={260}
                  />
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://iamdamba-dev.fr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/partner.png"
                    alt=""
                    width={260}
                    height={260}
                  />
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://iamdamba-dev.fr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/partner.png"
                    alt=""
                    width={260}
                    height={260}
                  />
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://iamdamba-dev.fr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/partner.png"
                    alt=""
                    width={260}
                    height={260}
                  />
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://iamdamba-dev.fr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/partner.png"
                    alt=""
                    width={260}
                    height={260}
                  />
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://iamdamba-dev.fr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/partner.png"
                    alt=""
                    width={260}
                    height={260}
                  />
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://iamdamba-dev.fr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/partner.png"
                    alt=""
                    width={260}
                    height={260}
                  />
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://iamdamba-dev.fr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/partner.png"
                    alt=""
                    width={260}
                    height={260}
                  />
                </a>
              </SplideSlide>
              <SplideSlide>
                <a
                  href="https://iamdamba-dev.fr"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Image
                    src="/images/partner.png"
                    alt=""
                    width={260}
                    height={260}
                  />
                </a>
              </SplideSlide>
            </Splide>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default AboutUsPage;
