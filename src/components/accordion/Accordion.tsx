// ------ Dependances ------

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { FaChevronUp } from "react-icons/fa";

import styled from "styled-components";

// ------ Accordion Styled ------

const StyledAccordion = styled.section`
  .paragraph {
    p {
      padding-top: 1.5rem;
    }
    ul {
      padding-top: 1.5rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      list-style-type: disc;
    }
  }
`;

// ------ Accordion Interface ------

interface IAccordion {
  title: string;
  items: JSX.Element[];
}

// ------ Accordion Component ------

const Accordion: NextPage<IAccordion> = ({ title, items }) => {
  // Hooks
  const [isOpen, setIsOpen] = useState(false);

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <StyledAccordion className="item bg-neutral-900 flex flex-col overflow-hidden">
      <div
        className="title flex justify-between items-center cursor-pointer px-6 py-6 gap-x-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl flex-1 font-bold max_sm:text-base ">{title}</h2>
        <FaChevronUp
          className={`text-xl font-bold transition-all duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          } `}
        />
      </div>
      <div
        className={`paragraph px-6 overflow-hidden transition-all duration-[1000ms] ease-in-out border-t-[1px] ${
          isOpen
            ? "h-auto pb-10 border-t-neutral-500 text-tw_text"
            : "h-0 pb-0 border-t-neutral-900 text-neutral-900"
        } max_sm:text-sm`}
      >
        {items}
      </div>
    </StyledAccordion>
  );
};
export default Accordion;
