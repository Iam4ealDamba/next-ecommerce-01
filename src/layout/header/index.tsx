// ------ Dependances ------

import { useState, useEffect } from "react";
import Link from "next/link";

import { FaShoppingBag, FaChevronLeft, FaBars } from "react-icons/fa";
import Image from "next/image";
import Cart from "@/components/cart/Cart";

// ------ Header Component ------

const Header = () => {
  const [canModalNav, setCanModalNav] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Functions
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1075) {
      setCanModalNav(false);
    }
  };

  // Effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (window) {
      if (canModalNav) {
        document.documentElement.style.overflowY = "hidden";
      } else {
        document.documentElement.style.overflowY = "auto";
      }
    }
  }, [canModalNav]);
  useEffect(() => {
    if (window) {
      if (isCart) {
        document.documentElement.style.overflowY = "hidden";
      } else {
        document.documentElement.style.overflowY = "auto";
      }
    }
  }, [isCart]);

  // Return
  return (
    <header className="fixed w-full z-10">
      <div className="content relative w-full">
        <nav
          className={`${
            scrollY < 150 ? "bg-neutral-900/10" : "bg-neutral-900"
          } transition-all duration-300`}
        >
          <div className="first w-full py-2 uppercase text-sm font-bold text-center bg-tw_second text-tw_primary">
            Livraison gratuite à partir de 15 €
          </div>
          <div className="second flex justify-between items-center w-full max-w-[1500px] mx-auto py-4 px-6 space-x-10">
            <div className="left flex space-x-10 items-center">
              <div className="logo">
                <Link href={"/"}>
                  <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width={323}
                    height={323}
                    className="max_md_sm:w-[220px] "
                  />
                </Link>
              </div>
              <ul
                className={`navbar flex space-x-6 text-sm font-bold max_xl_2:hidden`}
              >
                <li>
                  <Link href="/shop">Boutique</Link>
                </li>
                <li>
                  <Link href="/about-us">A Propos</Link>
                </li>
                <li>
                  <Link href="/guarantee">Services Garantie</Link>
                </li>

                <li>
                  <Link href="/contact-us">Contacter</Link>
                </li>
              </ul>
            </div>
            <div className="right flex space-x-10">
              <div className={`hidden btn max_xl_2:flex`}>
                <button
                  className="flex items-center gap-x-2"
                  onClick={() => setCanModalNav(!canModalNav)}
                >
                  <FaBars className="text-lg" /> Menu
                </button>
              </div>
              <div
                className="btn cursor-pointer relative"
                onClick={() => setIsCart(!isCart)}
              >
                <FaShoppingBag className="text-lg" />
                <div className="absolute -top-3 left-3 text bg-tw_link px-2 rounded-full">
                  <p className="text-sm">0</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav
          aria-label="navbar-mobile"
          className={`hidden fixed top-0 left-0 w-full h-[100vh] transition-all duration-300 ${
            canModalNav ? "visible opacity-100" : "invisible opacity-0"
          } max_xl_2:block`}
        >
          <div className="relative flex w-full h-full flex-col space-y-36 px-20 justify-center bg-neutral-800">
            <div className="logo">
              <Link href={"/"}>
                <img src="/images/logo.svg" alt="logo" />
              </Link>
            </div>
            <ul className="navbar flex-col space-y-4 text-lg flex">
              <li>
                <Link href="/shop">Boutique</Link>
              </li>
              <li>
                <Link href="/guarantee">Livraisons & Retours</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Nous Contacter</Link>
              </li>
            </ul>
            <div className="close-btn">
              <button
                className="flex items-center gap-x-5"
                onClick={() => setCanModalNav(!canModalNav)}
              >
                <FaChevronLeft />
                Fermer le menu
              </button>
            </div>
          </div>
        </nav>
        <Cart isActive={isCart} setIsActive={setIsCart} />
      </div>
    </header>
  );
};

export default Header;
