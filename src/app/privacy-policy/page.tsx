"use client";

// ------ Dependances ------

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import HeroBanner from "@/components/hero-banner/HeroBanner";
import Accordion from "@/components/accordion/Accordion";
import Layout from "@/layout";

// ------ Index Component ------

const PrivacyPolicyPage = () => {
  // Hooks
  const [accordionList, setAccordionList] = useState([
    {
      title: "1 - PRÉAMBULE",
      paragraph: [
        <p key={1}>
          Les présentes conditions générales de vente (CGV) constituent le socle
          de la négociation commerciale et sont systématiquement adressées ou
          remises à chaque acheteur pour lui permettre de passer commande.
        </p>,
        <p key={2}>
          Les conditions générales de vente décrites ci-après détaillent les
          droits et obligations de la société ... (dénomination sociale) et de
          son client dans le cadre de la vente des marchandises suivantes : ...
          (le vendeur doit recenser les marchandises soumises aux CGV).
        </p>,
        <p key={3}>
          Toute acceptation du devis/bon de commande en ce compris la clause «
          Je reconnais avoir pris connaissance et japos;accepte les conditions
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve
          de l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title:
        "2 - PRINCIPES RELATIFS À LA COLLECTE ET AU TRAITEMENT DES DONNÉES PERSONNELLES",
      paragraph: [
        <p key={1}>
          Les présentes conditions générales de vente (CGV) constituent le socle
          de la négociation commerciale et sont systématiquement adressées ou
          remises à chaque acheteur pour lui permettre de passer commande.
        </p>,
        <p key={2}>
          Les conditions générales de vente décrites ci-après détaillent les
          droits et obligations de la société ... (dénomination sociale) et de
          son client dans le cadre de la vente des marchandises suivantes : ...
          (le vendeur doit recenser les marchandises soumises aux CGV).
        </p>,
        <p key={3}>
          Toute acceptation du devis/bon de commande en ce compris la clause «
          Je reconnais avoir pris connaissance et j&apos;accepte les conditions
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve
          de l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title:
        "3 - DONNÉES À CARACTÈRE PERSONNEL COLLECTÉES ET TRAITÉES DANS LE CADRE DE LA NAVIGATION SUR LE SITE",
      paragraph: [
        <p key={1}>
          Les présentes conditions générales de vente (CGV) constituent le socle
          de la négociation commerciale et sont systématiquement adressées ou
          remises à chaque acheteur pour lui permettre de passer commande.
        </p>,
        <p key={2}>
          Les conditions générales de vente décrites ci-après détaillent les
          droits et obligations de la société ... (dénomination sociale) et de
          son client dans le cadre de la vente des marchandises suivantes : ...
          (le vendeur doit recenser les marchandises soumises aux CGV).
        </p>,
        <p key={3}>
          Toute acceptation du devis/bon de commande en ce compris la clause «
          Je reconnais avoir pris connaissance et j&apos;accepte les conditions
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve
          de l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title:
        "4 - RESPONSABLE DU TRAITEMENT DES DONNÉES ET DÉLÉGUÉ À LA PROTECTION DES DONNÉES",
      paragraph: [
        <p key={1}>
          Les présentes conditions générales de vente (CGV) constituent le socle
          de la négociation commerciale et sont systématiquement adressées ou
          remises à chaque acheteur pour lui permettre de passer commande.
        </p>,
        <p key={2}>
          Les conditions générales de vente décrites ci-après détaillent les
          droits et obligations de la société ... (dénomination sociale) et de
          son client dans le cadre de la vente des marchandises suivantes : ...
          (le vendeur doit recenser les marchandises soumises aux CGV).
        </p>,
        <p key={3}>
          Toute acceptation du devis/bon de commande en ce compris la clause «
          Je reconnais avoir pris connaissance et j&apos;accepte les conditions
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve
          de l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title:
        "5 - LES DROITS DE L’UTILISATEUR EN MATIÈRE DE COLLECTE ET DE TRAITEMENT DES DONNÉES",
      paragraph: [
        <p key={1}>
          Les présentes conditions générales de vente (CGV) constituent le socle
          de la négociation commerciale et sont systématiquement adressées ou
          remises à chaque acheteur pour lui permettre de passer commande.
        </p>,
        <p key={2}>
          Les conditions générales de vente décrites ci-après détaillent les
          droits et obligations de la société ... (dénomination sociale) et de
          son client dans le cadre de la vente des marchandises suivantes : ...
          (le vendeur doit recenser les marchandises soumises aux CGV).
        </p>,
        <p key={3}>
          Toute acceptation du devis/bon de commande en ce compris la clause «
          Je reconnais avoir pris connaissance et j&apos;accepte les conditions
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve
          de l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title:
        "6 - CONDITIONS DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ",
      paragraph: [
        <p key={1}>
          Les présentes conditions générales de vente (CGV) constituent le socle
          de la négociation commerciale et sont systématiquement adressées ou
          remises à chaque acheteur pour lui permettre de passer commande.
        </p>,
        <p key={2}>
          Les conditions générales de vente décrites ci-après détaillent les
          droits et obligations de la société ... (dénomination sociale) et de
          son client dans le cadre de la vente des marchandises suivantes : ...
          (le vendeur doit recenser les marchandises soumises aux CGV).
        </p>,
        <p key={3}>
          Toute acceptation du devis/bon de commande en ce compris la clause «
          Je reconnais avoir pris connaissance et j&apos;accepte les conditions
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve
          de l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
  ]);

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <Layout>
      <motion.main
        aria-label="policy-privacy-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroBanner
          title="Police de confidentialité"
          sub_title="Some optionnal sub title informations"
        />
        <section className="list max-w-[1500px] mx-auto pt-20 pb-32 space-y-16 px-10 transition-all duration-300">
          {accordionList.map((accordion, key) => (
            <Accordion
              title={accordion.title}
              items={accordion.paragraph}
              key={key}
            />
          ))}
        </section>
      </motion.main>
    </Layout>
  );
};

export default PrivacyPolicyPage;
