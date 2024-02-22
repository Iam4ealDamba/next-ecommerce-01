"use client";

// ------ Dependances ------

import { motion } from "framer-motion";

import HeroBanner from "@/components/hero-banner/HeroBanner";
import SectionTitle from "@/components/section-title/SectionTitle";
import Layout from "@/layout";

// ------ Index Component ------

const GuaranteePage = () => {
  // Return
  return (
    <Layout>
      <motion.main
        aria-label="guarantee-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroBanner
          title="Services Garantie"
          sub_title="Some optionnal sub title informations"
          img="/images/bg-5.jpg"
        />
        <section className="best-seller max-w-[1500px] mx-auto pt-24 text-center space-y-4 px-10">
          <SectionTitle
            title="Des services de livraisons de qualité"
            sub_title=""
            title_description={[
              "Sed cursus tellus risus, quis vestibulum diam volutpat eget. Sed ornare lacus vitae urna porttitor fermentum. Aliquam tincidunt augue sed ipsum imperdiet iaculis. Praesent malesuada nisl eu felis blandit scelerisque.",
              "Ut feugiat, nibh a fermentum vestibulum, magna est condimentum nunc, nec finibus massa metus in turpis. Mauris mauris justo, imperdiet quis consequat in, euismod vitae orci.",
            ]}
          />
        </section>
        <section className="best-seller max-w-[1500px] pt-20 pb-32 mx-auto space-y-4 px-10">
          <div className="top space-y-8">
            <div className="text space-y-8">
              <h2 className="text-4xl font-bold">Comment cela fonctionne ?</h2>
              <div className="paragraph space-y-4">
                <p>
                  We stand behind all our products and are confident that they
                  will perform as designed. If you are not 100% satisfied with
                  one of our products, you may return it within one year of
                  purchase for a refund.
                </p>
                <ul className="pl-16">
                  <li className="list-disc">
                    <p>
                      Products damaged by misuse, abuse, improper care or
                      negligence, or accidents (including pet damage)
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      Products damaged by misuse, abuse, improper care or
                      negligence, or accidents (including pet damage)
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      Products damaged by misuse, abuse, improper care or
                      negligence, or accidents (including pet damage)
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      Products damaged by misuse, abuse, improper care or
                      negligence, or accidents (including pet damage)
                    </p>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto quaerat hic necessitatibus itaque placeat. In tenetur
                  soluta impedit doloremque, sunt similique corporis quos, velit
                  quis magni temporibus minima aut saepe. Accusamus vitae
                  aperiam ratione dolor obcaecati veniam amet vel nisi
                  praesentium accusantium ipsa enim et quae, nesciunt impedit
                  tenetur corrupti unde eos nihil minus repellendus labore
                  ducimus placeat dolores. Itaque? Rerum, sapiente? Unde dolores
                  non tempore autem harum facilis dolore, ipsum doloribus fuga
                  quis veritatis excepturi inventore hic maxime amet cupiditate
                  corporis sunt architecto dicta. Corporis, sint eius.
                  Blanditiis, eaque?
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default GuaranteePage;
