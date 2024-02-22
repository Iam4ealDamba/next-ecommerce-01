"use client";

// ------ Dependances ------

import { motion } from "framer-motion";
import {
  FaCartArrowDown,
  FaArrowLeft,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import Link from "next/link";

import HeroBanner from "@/components/hero-banner/HeroBanner";
import Layout from "@/layout";
import { useEffect, useState } from "react";
import { IProductItem } from "@/utils/interfaces";
import { notFound, useParams } from "next/navigation";
import { getProduct } from "@/services/database/database";
import Loading from "@/app/loading";

// ------ Index Component ------

const ProductDetail = () => {
  // State
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IProductItem | null>();
  const router = useParams<{ id: string }>();

  // useEffect
  useEffect(() => {
    setProduct(getProduct(Number(router.id)));
    setLoading(false);
  }, [router.id]);

  // Return
  if (loading) return <Loading />;
  if (!product) return notFound();
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
          img="/images/bg-2.jpg"
        />
        <section className="article max-w-[1500px] mx-auto pt-24 px-10 space-y-10">
          <div className="go-back">
            <Link
              href={"/shop"}
              className="flex items-center gap-x-4 underline underline-offset-4"
            >
              <FaArrowLeft />
              Go Back To Shop
            </Link>
          </div>
          <div className="article-content flex gap-x-10 justify-between max_md:flex-col max_md:gap-y-10 max_md:items-center max_xl_2:flex-col max_xl_2:items-center max_xl_2:gap-y-10">
            <div className="left">
              <div className="img max-w-[600px] max_md:max-w-[400px]">
                <img src={product?.img} alt="glasses" className="w-full" />
              </div>
            </div>
            <div className="right w-full max-w-[650px] flex flex-col gap-y-4 max_xl:max-w-[450px] max_xl_2:max-w-[650px]">
              <div className="item-title space-y-4  max_xl_2:text-center">
                <div className="tag">
                  <Link
                    href="/"
                    className="underline underline-offset-4 text-sm"
                  >
                    - Summer Collection
                  </Link>
                </div>
                <div className="title">
                  <h2 className="text-2xl font-bold">{product?.title}</h2>
                  <p>{product?.price}</p>
                </div>
              </div>
              <div className="item-description flex flex-col gap-y-4">
                <div className="text max_xl_2:text-center">
                  <p>{product?.description}</p>
                </div>
                <div className="inputs flex flex-col gap-y-6">
                  <div className="input flex flex-col gap-y-4">
                    <label htmlFor="colors" className="font-bold">
                      Colors
                    </label>
                    <select
                      name="colors"
                      id="colors"
                      className="py-2 px-4 bg-neutral-900"
                    >
                      <option value="all">Select Color</option>
                      <option value="black">Black</option>
                      <option value="red">Red</option>
                      <option value="blue">Blue</option>
                    </select>
                  </div>
                  <div className="input flex flex-col gap-y-4">
                    <label htmlFor="quantity" className="font-bold">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      value={1}
                      className="py-2 px-4 bg-neutral-900"
                    />
                  </div>
                  <div className="button mt-6 max_xl_2:mx-auto">
                    <button className="flex items-center py-3 px-6 gap-x-3 text-tw_second bg-neutral-900 rounded-lg hover:animate-pulse">
                      <FaCartArrowDown />
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="reviews max-w-[1500px] mx-auto pt-24 pb-24 px-10 space-y-10">
          <h2 className="text-4xl font-bold">All Reviews (4)</h2>
          <div className="list space-y-8">
            <div className="item border-[1px] border-tw_text bg-neutral-900 px-8 py-4 gap-y-4 flex flex-col">
              <div className="top max_sm:text-center">
                <h3>Billy Vasquez</h3>
              </div>
              <div className="middle flex justify-between items- max_sm:flex-col max_sm:items-center max_sm:text-center max_sm:gap-y-6">
                <h4 className="text-xl font-bold">A must-have product</h4>
                <div className="stars flex text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
              <div className="bottom mt-4 max_sm:text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem eligendi iusto fugiat rem laudantium. Eveniet,
                  accusantium aliquam dolores accusamus porro fuga nemo quis
                  totam ullam voluptates quisquam et vero? Quam?
                </p>
              </div>
              <p></p>
            </div>
            <div className="item border-[1px] border-tw_text bg-neutral-900 px-8 py-4 gap-y-4 flex flex-col">
              <div className="top max_sm:text-center">
                <h3>Billy Vasquez</h3>
              </div>
              <div className="middle flex justify-between items- max_sm:flex-col max_sm:items-center max_sm:text-center max_sm:gap-y-6">
                <h4 className="text-xl font-bold">A must-have product</h4>
                <div className="stars flex text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
              <div className="bottom mt-4 max_sm:text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem eligendi iusto fugiat rem laudantium. Eveniet,
                  accusantium aliquam dolores accusamus porro fuga nemo quis
                  totam ullam voluptates quisquam et vero? Quam?
                </p>
              </div>
              <p></p>
            </div>
            <div className="item border-[1px] border-tw_text bg-neutral-900 px-8 py-4 gap-y-4 flex flex-col">
              <div className="top max_sm:text-center">
                <h3>Billy Vasquez</h3>
              </div>
              <div className="middle flex justify-between items- max_sm:flex-col max_sm:items-center max_sm:text-center max_sm:gap-y-6">
                <h4 className="text-xl font-bold">A must-have product</h4>
                <div className="stars flex text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
              <div className="bottom mt-4 max_sm:text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem eligendi iusto fugiat rem laudantium. Eveniet,
                  accusantium aliquam dolores accusamus porro fuga nemo quis
                  totam ullam voluptates quisquam et vero? Quam?
                </p>
              </div>
              <p></p>
            </div>
            <div className="item border-[1px] border-tw_text bg-neutral-900 px-8 py-4 gap-y-4 flex flex-col">
              <div className="top max_sm:text-center">
                <h3>Billy Vasquez</h3>
              </div>
              <div className="middle flex justify-between items- max_sm:flex-col max_sm:items-center max_sm:text-center max_sm:gap-y-6">
                <h4 className="text-xl font-bold">A must-have product</h4>
                <div className="stars flex text-xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
              <div className="bottom mt-4 max_sm:text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem eligendi iusto fugiat rem laudantium. Eveniet,
                  accusantium aliquam dolores accusamus porro fuga nemo quis
                  totam ullam voluptates quisquam et vero? Quam?
                </p>
              </div>
              <p></p>
            </div>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default ProductDetail;
