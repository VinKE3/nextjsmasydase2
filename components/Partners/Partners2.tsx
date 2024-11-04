"use client";
import "swiper/css";

import { dataPartners, dataPartnersLeft } from "./Partners.data";

import { InfiniteMovingCards } from "../InfiniteMoving/infinite-moving-cards";

export function Partners2() {
  return (
    <section id="home-one-client">
      <div className="2xl:px-[152px] md:px-10 xl:xl:pb-[130px] md:pb-[80px] pb-20 px-5  overflow-x-hidden">
        <p className="text-base text-paragraph font-medium mb-[50px] text-center">
          Trabajamos con mas de 1500 empresas a nivel nacional
        </p>
        <div className="rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={dataPartners}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={dataPartnersLeft}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
