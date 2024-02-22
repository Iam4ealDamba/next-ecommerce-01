"use client";

// ------ Dependances ------

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

import HeroBanner from "@/components/hero-banner/HeroBanner";
import SectionTitle from "@/components/section-title/SectionTitle";
import ProductItem from "@/components/product/ProductItem";
import Layout from "@/layout";
import { IProductItem } from "@/utils/interfaces";
import { getProducts } from "@/services/database/database";
import Loading from "../loading";
import { notFound } from "next/navigation";

// ------ Index Component ------

const ShopPage = () => {
  // Hooks
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProductItem[]>([]);

  // Functions
  useEffect(() => {
    // Enter some content here.
    setProducts(getProducts());
    setLoading(false);
  }, []);

  // Return
  if (loading) return <Loading />;
  if (!products.length) return notFound();
  return (
    <Layout>
      <motion.main
        aria-label="shop-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroBanner
          title="Shopping"
          sub_title="Some optionnal sub title informations"
          img={"/images/bg-2.jpg"}
        />
        <section className="media max-w-[1500px] mx-auto pt-24 text-center px-10">
          <SectionTitle
            title="Tout nos produits"
            sub_title="Tout nos meilleurs produits pour votre meilleur style"
            title_description={[
              "Choisissez parmis nos meilleurs articles la monture la plus pratique pour votre tenue. Laissez nous votre message et nous vous recontacterons dans les plus bref delais.",
            ]}
          />
          <div className="social-media flex items-center justify-center space-y-4 mt-10 py-10 border-2 px-12">
            <div className="list grid grid-flow-col gap-x-4 gap-y-4 text-2xl max_md_sm:grid-flow-row max_md_sm:grid-cols-2 max_sm:grid-cols-1">
              <div className="item flex flex-col">
                <select
                  name=""
                  id=""
                  className="text-base bg-tw_second text-neutral-900 px-6 py-3 font-bold outline-none rounded-lg"
                >
                  <option value="all" selected disabled>
                    All
                  </option>
                  <option value="all">Été</option>
                  <option value="all">Automne</option>
                  <option value="all">Hiver</option>
                  <option value="all">Printemps</option>
                </select>
              </div>
              <div className="item flex flex-col">
                <select
                  name=""
                  id=""
                  className="text-base bg-tw_second text-neutral-900 px-6 py-3 font-bold outline-none rounded-lg"
                >
                  <option value="all" selected disabled>
                    Filter
                  </option>
                  <option value="all">By Date</option>
                  <option value="all">By Price</option>
                </select>
              </div>
              <div className="item flex flex-col">
                <select
                  name=""
                  id=""
                  className="text-base bg-tw_second text-neutral-900 px-6 py-3 font-bold outline-none rounded-lg"
                >
                  <option value="all" selected disabled>
                    Asc
                  </option>
                  <option value="all">Desc</option>
                </select>
              </div>
              <div className="item flex flex-col">
                <select
                  name=""
                  id=""
                  className="text-base bg-tw_second text-neutral-900 px-6 py-3 font-bold outline-none rounded-lg"
                >
                  <option value="all">All Color</option>
                  <option value="all">Black</option>
                  <option value="all">White</option>
                  <option value="all">Red</option>
                  <option value="all">Orange</option>
                  <option value="all">Green</option>
                  <option value="all">Blue</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <section className="articles max-w-[1500px] mx-auto mt-20 mb-36 px-10">
          <div className="list grid grid-cols-3 justify-items-center gap-y-20 gap-x-4 max_md:grid-cols-2 max_sm:grid-cols-1">
            {products.map((product, key) => (
              <ProductItem
                key={key}
                title={product.title}
                link={`/shop/${product.id}`}
                img={product.img}
                price={product.price}
                promo={product.promo}
              />
            ))}
          </div>
        </section>
        <section className="promotion w-full py-24">
          <div className="content relative max-w-[1500px] mx-auto flex items-center px-10 space-x-4 max_lg:flex max_lg:flex-col max_lg:space-x-0 max_lg:gap-y-10">
            <div className="text space-y-6 lg:min-w-[500px] max_lg:order-2 max_lg:text-center">
              <div className="title">
                <h2 className="font-bold text-sm uppercase">New Offer</h2>
              </div>
              <div className="text space-y-4">
                <h3 className="text-4xl font-bold">
                  Get 10% Off Your First Purchase
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
                      Get 10% off
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
      </motion.main>
    </Layout>
  );
};

export default ShopPage;
