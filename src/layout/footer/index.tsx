// ------ Dependances ------

import type { NextPage } from "next";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaBox,
  FaFileInvoice,
} from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

// ------ Footer Component ------

const Footer: NextPage = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <footer className="">
      <div className="delivery-detail w-full bg-neutral-900 py-10">
        <div className="list max-w-[1700px] mx-auto px-10 grid grid-cols-3 space-x-4 max_md:grid-cols-2 max_md:space-x-0 max_md:gap-y-8 max_md:gap-x-8 max_sm:grid-cols-1 max_sm:justify-items-center">
          <div className="item bg-tw_second max-w-[500px] py-6 px-4 text-center flex flex-col items-center space-y-2 text-neutral-900">
            <MdLocalShipping className="text-7xl" />
            <h2 className="text-xl font-bold">Livraison Gratuite</h2>
            <p className="font-medium">
              Nous offrons une livraison gratuite pour tout commandes de plus de
              80€ ou contenant plus de 10 articles.
            </p>
          </div>
          <div className="item bg-tw_second max-w-[500px] py-6 px-4 text-center flex flex-col items-center space-y-2 text-neutral-900">
            <FaBox className="text-7xl" />
            <h2 className="text-xl font-bold">30 Jours de Retour</h2>
            <p className="font-medium">
              Chez Honey Glass, nous vous offrons un delai de retour gratuit
              pour une durée de 30 jours. Ainsi vous pourrez confirmer votre
              achat.
            </p>
          </div>
          <div className="item bg-tw_second max-w-[500px] py-6 px-4 text-center flex flex-col items-center space-y-2 text-neutral-900">
            <FaFileInvoice className="text-7xl" />
            <h2 className="text-xl font-bold">Garantie Européenne</h2>
            <p className="font-medium">
              Notre quête vers l&apos;excellence nous a permis d&apos;ajouter
              une garantie à 5 ans ou niveau de l&apos;europe entière, donc
              n&apos;hésitez plus.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-content py-10 px-10 space-y-8 flex flex-col max-w-[1700px] mx-auto">
        <div className="top flex justify-between items-center pb-10 space-x-4 max_sm:flex-col max_sm:space-x-0 max_sm:space-y-10">
          <div className="left max_sm:text-center">
            <h2 className="text-2xl font-bold">
              Soyez notifiés par nos actualités
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="right">
            <div className="input space-x-6 max_md:flex max_md:flex-col max_md:justify-center max_md:space-x-0 max_md:space-y-4">
              <input
                type="text"
                placeholder="Entrer votre email..."
                className="border-2 bg-transparent border-neutral-300 rounded-lg py-2 px-4 outline-none"
              />
              <button className="py-3 px-6 bg-neutral-900 text-tw_second font-bold uppercase text-sm rounded-lg">
                Souscrire
              </button>
            </div>
          </div>
        </div>
        <div className="botttom flex justify-between max_sm:flex-col max_sm:space-y-10">
          <div className="left space-y-4">
            <div className="logo">
              <Link href={"/"}>
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={120}
                  height={120}
                />
              </Link>
            </div>
            <div className="title">
              <p className="max-w-[400px] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                nam atque minima id.
              </p>
            </div>
          </div>
          <div className="right space-y-4 text-right max_sm:text-left">
            <h2 className="font-bold uppercase">Pages</h2>
            <div className="list flex space-x-20">
              <ul className="text-sm">
                <li>
                  <Link href="/">Accueil</Link>
                </li>
                <li>
                  <Link href="/shop">Boutique</Link>
                </li>
                <li>
                  <Link href="/about-us">A Propos</Link>
                </li>
                <li>
                  <Link href="/contact-us">Nous Contacter</Link>
                </li>
              </ul>
              <ul className="text-sm">
                <li>
                  <Link href="/cgv">CGV</Link>
                </li>
                <li>
                  <Link href="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">RGPD</Link>
                </li>
                <li>
                  <Link href="/guarantee">Services Garantie</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="line">
          <hr />
        </div>
        <div className="copyrignt flex justify-between items-center space-x-4 max_sm:flex-col max_sm:space-x-0 max_sm:space-y-10">
          <div className="left">
            <p className="text-sm max_sm:text-center">
              © 2023 Honey Glass. Tous droits réservés. Créer par
              <a
                href="https://iamdamba-dev.fr"
                target={"_blank"}
                rel="noreferrer"
                className="underline underline-offset-4 pl-2"
              >
                IamDamba Dev
              </a>
            </p>
          </div>
          <div className="right flex space-x-4 items-center">
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
      </div>
    </footer>
  );
};
export default Footer;
