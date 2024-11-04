import React from "react";

import TiltCard from "@/components/TiltCard/TiltCard";
import {
  Command,
  Gem,
  MonitorCog,
  PenTool,
  ShieldCheck,
  TabletSmartphone,
} from "lucide-react";
import { Cover } from "@/components/ui/cover";

const ServicesDesarrolloWeb = () => {
  return (
    <section
      id="services"
      className="bg-white w-full pb-14 md:pb-[120px] overflow-x-hidden"
    >
      <div className="w-full mx-auto theme-container">
        <div className="max-w-[661px] w-full flex flex-col items-center mx-auto">
          <h1 className="border text-masyp border-masyp/10 py-0.5 px-5 rounded-[30px] w-fit bg-main-gray">
            Servicios Desarrollo Web
          </h1>
          <h2 className="pt-5 font-semibold text-center text-black text-24 sm:text-48">
            Crea tu sitio web perfecto <Cover>super optimizado</Cover>
          </h2>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-[30px] mt-10 md:mt-[70px]">
          {/* <!-- card start  --> */}
          <div data-aos="fade-left" className="col-span-4">
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="col-span-4 "
            >
              <TiltCard
                icon={<Gem className="mb-6 w-[46px] h-[37px] text-masyp" />}
                title="Diseño Web Moderno"
                description="Utilizamos las últimas herramientas y frameworks para garantizar un sitio moderno y optimizado capaz de atraer a tus clientes."
              />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="100" className="col-span-4">
            <TiltCard
              icon={
                <MonitorCog className="mb-6 w-[46px] h-[37px] text-masyp" />
              }
              title="Desarrollo Personalizado"
              description="Soluciones hechas a medida según las necesidades y objetivos específicos de cada cliente, nos adaptamos a tus ideas y necesidades."
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="200" className="col-span-4">
            <TiltCard
              icon={
                <ShieldCheck className="mb-6 w-[46px] h-[37px] text-masyp" />
              }
              title="Seguridad Web"
              description="Certificados SSL, protección contra ataques, y seguridad en el código para garantizar la integridad del sitio y la privacidad de los datos."
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="300" className="col-span-4">
            <TiltCard
              icon={<Command className="mb-6 w-[46px] h-[37px] text-masyp" />}
              title="Gestión de Contenidos"
              description="Implementación de un sistema de gestión de contenidos (CMS) como WordPress que permita al cliente actualizar fácilmente el contenido del sitio."
            />
          </div>
          {/* <!-- card end  --> */}
          {/* <!-- card start  --> */}
          <div data-aos="fade-left" data-aos-delay="400" className="col-span-4">
            <TiltCard
              icon={
                <TabletSmartphone className="mb-6 w-[46px] h-[37px] text-masyp" />
              }
              title="Diseño Web Responsivo"
              description="Adaptamos tu sitio web para que se vea perfecto en cualquier dispositivo, desde computadoras de escritorio hasta teléfonos móviles."
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="600"
            className="col-span-4 "
          >
            <TiltCard
              icon={<PenTool className="mb-6 w-[46px] h-[37px] text-masyp" />}
              title="Diseño Creativo"
              description=" Utilizamos las últimas herramientas y frameworks para garantizar
              un sitio moderno y optimizado capaz de atraer a tus clientes."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDesarrolloWeb;
