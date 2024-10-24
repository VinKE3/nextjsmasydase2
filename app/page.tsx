import AboutOne from "@/components/About/About";
import ShuffleHero from "@/components/Hero/ShuffleHero";
import { SmoothScrollHero } from "@/components/Hero/SmoothScrollHero";
import FunFactOne from "@/components/FunFact/FunFact";
import Services from "@/components/Services/Services";
import Pricing from "@/components/Princing/Pricing";
import LiquidacionesCompra from "@/components/LiquidacionesCompra/LiquidacionesCompra";
export default function Home() {
  return (
    <>
      <SmoothScrollHero />
      <ShuffleHero />
      <AboutOne />
      <FunFactOne />
      <Services />
      <Pricing />
      <LiquidacionesCompra />
    </>
  );
}
