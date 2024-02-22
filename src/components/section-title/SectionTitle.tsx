// ------ Dependances ------

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// ------ SectionTitle Interface ------

interface ISectionTitle {
  title: string;
  sub_title: string;
  title_description: string[];
}

// ------ SectionTitle Component ------

const SectionTitle: NextPage<ISectionTitle> = ({
  title,
  sub_title,
  title_description,
}) => {
  // Return
  return (
    <div className="title-content space-y-4">
      <div className="title flex justify-center items-center space-x-4">
        <span className="bg-tw_text w-[50px] h-[1px]"></span>
        <h2 className="text-lg font-bold uppercase">{title}</h2>
        <span className="bg-tw_text w-[50px] h-[1px]"></span>
      </div>
      <div className="sub-title max-w-[900px] mx-auto space-y-4">
        <h3 className="text-3xl font-bold">{sub_title}</h3>
        <div className="paragraph space-y-4">
          {title_description.map((des, key) => (
            <p key={key}>{des}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SectionTitle;
