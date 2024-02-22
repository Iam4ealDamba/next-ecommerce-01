"use client";

// ------ Dependances ------

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import HeroBanner from "@/components/hero-banner/HeroBanner";
import Accordion from "@/components/accordion/Accordion";
import Layout from "@/layout";

// ------ Index Component ------

const CGVPage = () => {
  // Hooks
  const [accordionList, setAccordionList] = useState([
    {
      title: "1 - Objet et champ d&apos;application",
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
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve de
          l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title: "2 - Prix",
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
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve de
          l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title: "3 - Rabais et ristournes",
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
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve de
          l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title: "4 - Escompte",
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
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve de
          l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title: "5 - Modalités de paiement",
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
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve de
          l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title: "6 - Retard de paiement",
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
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve de
          l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title: "7 - Clause résolutoire",
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
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve de
          l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title: "8 - Clause de réserve de propriété",
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
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve de
          l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title: "9 - Livraison",
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
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve de
          l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title: "10 - Force majeure",
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
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve de
          l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
    {
      title: "11 - Tribunal compétent",
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
          générales de vente ci-annexées » implique l&apos;adhésion sans réserve de
          l&apos;acheteur aux présentes conditions générales de vente.
        </p>,
      ],
    },
  ]);

  // Return
  return (
    <Layout>
      <motion.main
        aria-label="cgv-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroBanner
          title="Conditions générales de vente"
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

export default CGVPage;
