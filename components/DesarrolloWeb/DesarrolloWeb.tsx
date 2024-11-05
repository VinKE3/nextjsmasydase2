import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import ServicesDesarrolloWeb from "./components/ServicesDesarrolloWeb";

export const products = [
  {
    title: "PersonalizaloLima",
    link: "#",
    thumbnail: "/assets/images/desarrolloWeb/qtr01.png",
  },
  {
    title: "QueTalRegalo",
    link: "#",
    thumbnail: "/assets/images/desarrolloWeb/qtr02.png",
  },
  {
    title: "IzaMotors",
    link: "#",
    thumbnail: "/assets/images/desarrolloWeb/IZA.png",
  },

  {
    title: "InnerDev",
    link: "#",
    thumbnail: "/assets/images/desarrolloWeb/inner.png",
  },
  {
    title: "CaseCobraDev",
    link: "#",
    thumbnail: "/assets/images/desarrolloWeb/case.png",
  },
  {
    title: "InnerDev",
    link: "#",
    thumbnail: "/assets/images/desarrolloWeb/inner.png",
  },

  {
    title: "Masy",
    link: "#",
    thumbnail: "/assets/images/desarrolloWeb/masy.png",
  },
  {
    title: "Aceternity UI",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "CaseCobra",
    link: "#",
    thumbnail: "/assets/images/desarrolloWeb/case.png",
  },
  {
    title: "Inner",
    link: "#",
    thumbnail: "/assets/images/desarrolloWeb/inner.png",
  },
];

const DesarrolloWeb = () => {
  return (
    <section id="desarrollo-web">
      <HeroParallax products={products} />
      <ServicesDesarrolloWeb />
    </section>
  );
};

export default DesarrolloWeb;
