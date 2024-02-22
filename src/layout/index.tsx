// ------ Dependances ------

import type { NextPage } from "next";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

// ------ Layout Component ------

interface iLayout {
  children: JSX.Element;
}

// ------ Layout Component ------

const Layout: NextPage<iLayout> = ({ children }) => {
  // Functions

  // Return
  return (
    <motion.div
      id="app-container"
      className="relative opacity-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
};
export default Layout;
