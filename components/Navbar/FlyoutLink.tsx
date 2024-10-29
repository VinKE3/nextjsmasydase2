"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Example = () => {
  return (
    <div className="">
      <FlyoutLink href="#servicios" FlyoutContent={PricingContent}>
        Servicios
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-paragraph font-semibold">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-masyp transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <Link
          href="#facturacion-electronica"
          className="font-semibold hover:underline text-masyp"
        >
          Facturación Electrónica
        </Link>
        <Link
          href="#facturacion-electronica"
          className="block text-md hover:underline"
        >
          Sistema Estándar
        </Link>
        <Link
          href="#facturacion-electronica"
          className="block text-md hover:underline"
        >
          Sistema a Medida
        </Link>
      </div>
      <div className="mb-3 space-y-3">
        <Link
          href="#liquidaciones-compra"
          className="font-semibold hover:underline text-masyp"
        >
          Liquidaciones de compra
        </Link>
      </div>
      <div className="mb-6 space-y-3">
        <Link
          href="#sistema-guias-remision"
          className="font-semibold hover:underline text-masyp"
        >
          Guías de Remisión
        </Link>
        <Link
          href="#sistema-guias-remision"
          className="block text-md hover:underline"
        >
          Sistema web guías de transportista
        </Link>
        <Link
          href="#sistema-guias-remision"
          className="block text-md hover:underline"
        >
          Sistema web guías de remisión
        </Link>
      </div>
      <div className="mb-3 space-y-3">
        <Link href="#vps" className="font-semibold hover:underline text-masyp">
          VPS
        </Link>
      </div>
      <div className="mb-3 space-y-3">
        <Link
          href="#utilcon"
          className="font-semibold hover:underline text-masyp"
        >
          Utilcon
        </Link>
      </div>
    </div>
  );
};

export default Example;
