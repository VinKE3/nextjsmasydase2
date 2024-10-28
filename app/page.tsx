import AboutOne from "@/components/About/About";
import ShuffleHero from "@/components/Hero/ShuffleHero";
import { SmoothScrollHero } from "@/components/Hero/SmoothScrollHero";
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
export default function Home() {
  return (
    <>
      <SmoothScrollHero />
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
