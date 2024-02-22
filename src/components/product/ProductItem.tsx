// ------ Dependances ------

import type { NextPage } from "next";

import { useState, useEffect, useRef, MutableRefObject } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { IProductItem } from "@/utils/interfaces";

// ------ ProductItem Styled Component ------

const StyledItem = styled.a`
  &:hover {
    img {
      transform: scale(1.2);
      filter: brightness(0.7);
    }
  }
`;

// ------ Product Item Component ------

const ProductItem: NextPage<IProductItem> = ({
  title,
  img,
  price,
  promo,
  link,
  collection,
}) => {
  // Return
  return (
    <Link href={`${link}`} passHref legacyBehavior>
      <StyledItem className={`item text-start space-y-4`}>
        <div className="img relative max-w-[360px] overflow-hidden">
          <img
            src={img}
            alt="lunette-01"
            className="w-full transition-all duration-300"
          />
          {promo && (
            <div className="on-sale absolute top-5 left-[70%] text-sm py-2 px-2 bg-neutral-800">
              On Sale
            </div>
          )}
        </div>
        <div className="text space-y-2">
          <h2>{title}</h2>
          <div className="price flex gap-x-4 items-center">
            <p>€ {price} EUR</p>
            {promo && (
              <p className="text-sm text-tw_link font-medium line-through">
                € 115 EUR
              </p>
            )}
          </div>
        </div>
      </StyledItem>
    </Link>
  );
};
export default ProductItem;
