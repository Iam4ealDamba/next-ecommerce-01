// ------ Dependances ------

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MdClose } from "react-icons/md";

// ------ Cart Interface ------

interface iCart {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

// ------ Cart Component ------

const Cart: NextPage<iCart> = ({ isActive, setIsActive }) => {
  // Return
  return (
    <div
      className={`cart absolute w-full h-[100vh] top-0 left-0 flex justify-end transition-all duration-300 ${
        isActive ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className="filter absolute bg-black/60 top-0 left-0 w-full h-full"
        onClick={() => setIsActive(!isActive)}
      ></div>
      <div className="cart-content relative z-[10] bg-neutral-800 w-full max-w-[500px] h-full px-8 py-8 flex flex-col">
        <div className="title flex justify-between border-b-2 border-tw_text pb-4">
          <h2 className="text-xl font-bold">Votre Panier</h2>
          <MdClose
            className="text-2xl cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        {/* <div className="list border-2 flex-1 items-center justify-center flex">
              <p>No items Found.</p>
            </div> */}
        <div className="list flex flex-col flex-1">
          <div className="top flex-1 border-b-2 overflow-y-auto max-h-[700px] py-6 space-y-4">
            <div className="item flex items-center justify-between space-x-4">
              <div className="left flex-1 flex space-x-4 items-center">
                <div className="img">
                  <Image
                    src="/images/glasses.jpg"
                    alt="lunette-01"
                    width={60}
                    height={60}
                    className="max_sm:hidden"
                  />
                </div>
                <div className="text text-sm space-y-2">
                  <div className="article-title w-[230px]">
                    <p className="truncate">John D. Falcon - Spring Edition</p>
                  </div>
                  <div className="article-price">
                    <p>€ 90.00 EUR</p>
                  </div>
                  <div className="article-remove-btn">
                    <button>Supprimer</button>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="input">
                  <input
                    type="number"
                    value={1}
                    name="article-num-order"
                    id="article-num-order"
                    className="bg-transparent border-2 border-neutral-400 outline-none px-2 max-w-[70px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom space-y-8 pt-8">
            <div className="price-info flex justify-between items-center">
              <h3 className="font-bold">Total</h3>
              <p className="font-bold">€ 90.00 EUR</p>
            </div>
            <div className="check-button">
              <button className="w-full py-4 border-2 font-bold">
                Continuer pour l&apos;achat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
