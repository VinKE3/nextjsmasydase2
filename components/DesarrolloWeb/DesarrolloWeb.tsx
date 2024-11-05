import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import ServicesDesarrolloWeb from "./components/ServicesDesarrolloWeb";

export const products = [
  {
    title: "Moonbeam",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
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
    title: "PersonalizaloLima",
    link: "#",
    thumbnail: "/assets/images/desarrolloWeb/qtr01.png",
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
    title: "Tailwind Master Kit",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
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
