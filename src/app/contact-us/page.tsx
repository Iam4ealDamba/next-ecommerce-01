"use client";

// ------ Dependances ------

import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import HeroBanner from "@/components/hero-banner/HeroBanner";
import SectionTitle from "@/components/section-title/SectionTitle";
import Layout from "@/layout";

// ------ Index Component ------

const ContactPage = () => {
  // Return
  return (
    <Layout>
      <motion.main
        aria-label="contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroBanner
          title="Contact Us"
          sub_title="Some optionnal sub title informations"
          img="/images/bg-4.jpg"
        />
        <section className="media max-w-[1500px] mx-auto pt-24 text-center px-10">
          <SectionTitle
            title="Prennez contact avec nous"
            sub_title="Notre equipe de support est à votre service"
            title_description={[
              "Remplissez le formulaire de contacte en dessous avec vos informations ainsi que vos questions et notre equipe vous recontactera.",
              "Un de nos agents prendra contact avec vous géneralement dans les 24 heures.",
            ]}
          />
          <div className="social-media flex flex-col items-center justify-center space-y-4 mt-10 py-10 border-2 px-4">
            <h2 className="text-xl font-bold underline underline-offset-4">
              Suivez nous sur nos reseaux sociaux
            </h2>
            <div className="list flex space-x-4 text-2xl">
              <a href="https://iamdamba-dev.fr">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://iamdamba-dev.fr">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://iamdamba-dev.fr">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://iamdamba-dev.fr">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </section>
        <section className="address max-w-[1500px] pt-20 mx-auto space-y-4 px-10 text-center">
          <div className="top space-y-8">
            <div className="text space-y-8">
              <h2 className="text-4xl font-bold">Siege Social</h2>
              <div className="paragraph space-y-4 font-bold">
                <p>
                  Startup Honey Glass
                  <br />
                  11, avenue des tulipes,
                  <br />
                  75000, PARIS
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-form max-w-[1500px] pt-20 pb-32 mx-auto space-y-4 px-10 flex justify-center">
          <form className="max-w-[900px] w-full flex flex-col gap-y-8">
            <div className="inputs flex space-x-8">
              <div className="input w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name *"
                  className="w-full bg-tw_bg border-[1px] shadow-sm active:shadow-xl shadow-tw_text border-neutral-400 px-4 py-3 rounded-lg focus:border-tw_text outline-none transition-all duration-300"
                />
              </div>
              <div className="input w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Last Name (optional)"
                  className="w-full bg-tw_bg border-[1px] shadow-sm active:shadow-xl shadow-tw_text border-neutral-400 px-4 py-3 rounded-lg focus:border-tw_text outline-none transition-all duration-300"
                />
              </div>
            </div>
            <div className="inputs flex space-x-8">
              <div className="input w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email Address *"
                  className="w-full bg-tw_bg border-[1px] shadow-sm active:shadow-xl shadow-tw_text border-neutral-400 px-4 py-3 rounded-lg focus:border-tw_text outline-none transition-all duration-300"
                />
              </div>
              <div className="input w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name  (optional)*"
                  className="w-full bg-tw_bg border-[1px] shadow-sm active:shadow-xl shadow-tw_text border-neutral-400 px-4 py-3 rounded-lg focus:border-tw_text outline-none transition-all duration-300"
                />
              </div>
            </div>
            <div className="inputs">
              <div className="input w-full">
                <input
                  type="text"
                  placeholder="Subject *"
                  className="w-full bg-tw_bg border-[1px] shadow-sm active:shadow-xl shadow-tw_text border-neutral-400 px-4 py-3 rounded-lg focus:border-tw_text outline-none transition-all duration-300"
                />
              </div>
            </div>
            <div className="textarea w-full">
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Enter your message here"
                className="w-full bg-tw_bg border-[1px] shadow-sm active:shadow-xl shadow-tw_text border-neutral-400 px-4 py-3 rounded-lg focus:border-tw_text outline-none transition-all duration-300"
              ></textarea>
            </div>
            <div className="button flex justify-center">
              <button
                type="submit"
                className="bg-tw_bg border-[1px] shadow-sm active:shadow-xl shadow-tw_text border-neutral-400 px-4 py-3 rounded-lg focus:border-tw_text outline-none transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </motion.main>
    </Layout>
  );
};

export default ContactPage;
