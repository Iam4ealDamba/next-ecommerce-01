// ------ Dependances ------

import { useState, useEffect, ReactElement } from "react";
import type { NextPage } from "next";

import Link from "next/link";
import HeroBannerHome from "@/components/hero-banner/HeroBannerHome";
import Image from "next/image";
import SectionTitle from "@/components/section-title/SectionTitle";
import ProductItem from "@/components/product/ProductItem";
import { useRouter } from "next/router";

// ------ index Component ------

const Index = () => {
  // Hooks
  const [val, setVal] = useState();
  const route = useRouter();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <main className="home-page" key={1}>
      <HeroBannerHome />
      <section className="best-seller max-w-[1500px] mx-auto py-24 text-center space-y-4 px-10">
        <SectionTitle
          title="Nos Meilleurs Ventes"
          sub_title="Une qualités percevable sous le soleil"
          title_description={[
            "Nam imperdiet arcu velit, ut maximus mauris finibus ac. Proin non fringilla sapien. Pellentesque euismod a ligula vitae bibendum. Nulla facilisi. Praesent sed tortor Donec mollis ultrices dui, eu blandit dolor dapibus nec.",
          ]}
        />
        <div className="list grid grid-cols-3 justify-items-center gap-y-20 gap-x-4 max_md:grid-cols-2 max_sm:grid-cols-1 pt-20">
          <ProductItem
            title="John D. Falcon - Spring Edition"
            link="/shop/1"
            img="/images/glasses.jpg"
            price={"99.00"}
            promo={true}
          />
          <ProductItem
            title="John D. Falcon - Spring Edition"
            link="/shop/1"
            img="/images/glasses.jpg"
            price={"99.00"}
            promo={true}
          />
          <ProductItem
            title="John D. Falcon - Spring Edition"
            link="/shop/1"
            img="/images/glasses.jpg"
            price={"99.00"}
            promo={true}
          />
          <ProductItem
            title="John D. Falcon - Spring Edition"
            link="/shop/1"
            img="/images/glasses.jpg"
            price={"99.00"}
            promo={true}
          />
          <ProductItem
            title="John D. Falcon - Spring Edition"
            link="/shop/1"
            img="/images/glasses.jpg"
            price={"99.00"}
            promo={true}
          />
          <ProductItem
            title="John D. Falcon - Spring Edition"
            link="/shop/1"
            img="/images/glasses.jpg"
            price={"99.00"}
            promo={true}
          />
        </div>
      </section>
      <section className="promotion w-full py-24">
        <div className="content relative max-w-[1500px] mx-auto flex items-center px-10 space-x-4 max_lg:flex max_lg:flex-col max_lg:space-x-0 max_lg:gap-y-10">
          <div className="text space-y-6 lg:min-w-[500px] max_lg:order-2 max_lg:text-center">
            <div className="title">
              <h2 className="font-bold text-sm uppercase">Nouvelle Offre</h2>
            </div>
            <div className="text space-y-4">
              <h3 className="text-4xl font-bold">
                10% sur le premier achat effectué
              </h3>
              <p className="font-medium pb-10">
                Subscribe to our newsletter and get 10% discount
              </p>
              <form
                action=""
                className="flex max_lg:justify-center max_lg:flex-col max_lg:space-y-6"
              >
                <div className="input">
                  <input
                    type="text"
                    placeholder="Enter Your Email..."
                    className="px-4 h-[38px] text-neutral-900"
                  />
                </div>
                <div className="button">
                  <button
                    type="submit"
                    className="h-[38px] px-6 uppercase bg-neutral-900"
                  >
                    recevez 10%
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="img max-w-[800px] max_lg:order-1">
            <img
              src="/images/glasses-2.jpg"
              alt="lunette-2"
              className="brightness-50 w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
 

export default Index;
