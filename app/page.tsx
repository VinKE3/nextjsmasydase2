"use client";
import AboutOne from "@/components/About/About";
import ShuffleHero from "@/components/Hero/ShuffleHero";
import FunFactOne from "@/components/FunFact/FunFact";
import Services from "@/components/Services/Services";
import Pricing from "@/components/Princing/Pricing";
import LiquidacionesCompra from "@/components/LiquidacionesCompra/LiquidacionesCompra";
import GuiasRemision from "@/components/GuiasRemision/GuiasRemision";
import Utilcon from "@/components/Utilcon/Utilcon";
import DesarrolloWeb from "@/components/DesarrolloWeb/DesarrolloWeb";
import Vps from "@/components/Vps/Vps";
import Contacto from "@/components/Contacto/Contacto";
import Partners from "@/components/Partners/Partners";
import OutsourcinContable from "@/components/OutsourcingContable/OutsourcinContable";
import Hero from "@/components/Hero/Hero";
import { useEffect } from "react";
import Aos from "aos";
export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Verifica si está en el lado del cliente
      Aos.init({
        duration: 1200,
        offset: 100,
      });
      Aos.refresh();

      // Añade el event listener al scroll solo en el lado del cliente
      const handleScroll = () => {
        Aos.refresh();
      };

      window.addEventListener("scroll", handleScroll);

      // Limpia el event listener al desmontar el componente
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <>
      <div className="pt-16">
        <Hero />
      </div>
      <ShuffleHero />
      <AboutOne />
      <FunFactOne />
      <Partners />
      <Services />
      <Pricing />
      <LiquidacionesCompra />
      <GuiasRemision />
      <Vps />
      <Utilcon />
      <OutsourcinContable />
      <DesarrolloWeb />
      <Contacto />
    </>
  );
}
