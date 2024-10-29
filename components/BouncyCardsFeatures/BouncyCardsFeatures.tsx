"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Beneficios
          <span className="text-slate-400"> para todo tipo de empresas</span>
        </h2>
        <Link href="#contacto">
          {" "}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap rounded-lg bg-masyp px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
          >
            Contratar Servicio
          </motion.button>
        </Link>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Reducción de Costos</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-masyp/50 to-masyp p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              Ayudamos a disminuir tus costos operativos mediante una estructura
              eficiente, optimizando el uso de recursos sin comprometer la
              calidad.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Asesoría Personalizada</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-masyp/50 to-masyp p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              Ofrecemos un acompañamiento cercano, adaptándonos a las
              necesidades de tu negocio para brindarte soluciones específicas y
              efectivas.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Acceso a Experiencia Especializada</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-masyp/50 to-masyp p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              Ponemos a tu disposición profesionales con amplio conocimiento y
              experiencia en contabilidad para una gestión óptima de tus
              finanzas.
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Flexibilidad Operativa y Dinámica</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-masyp/50 to-masyp p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              Nos adaptamos al ritmo y cambios de tu negocio, asegurando que
              puedas responder rápidamente a los desafíos del mercado.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Garantía del Cumplimiento Normativo</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-masyp/50 to-masyp p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              Nos aseguramos de que todas las operaciones contables cumplan con
              las normativas vigentes, evitando sanciones y problemas legales.
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Mitigación y Reducción de Riesgos Empresariales</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-24 translate-y-8 rounded-t-2xl bg-gradient-to-br from-masyp/50 to-masyp p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              Ayudamos a identificar y gestionar riesgos financieros,
              protegiendo a tu empresa de posibles amenazas y pérdidas.
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-2xl font-semibold">{children}</h3>
  );
};
