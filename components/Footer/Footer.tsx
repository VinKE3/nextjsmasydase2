import { ArrowUp, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative pt-20 overflow-hidden bg-black-seo">
      <div className="grid grid-cols-4 gap-4 mx-auto mb-20 theme-container md:grid-cols-8 xl:grid-cols-12">
        <div className="col-span-4">
          <img
            src="/assets/images/logo/MS.2.png"
            alt="logo"
            width={150}
            height={100}
          />
          <p className="max-w-[300px] text-white/50 mt-[30px] mb-6">
            Transformamos ideas en soluciones ágiles de confianza garantizando
            la satisfacción de nuestros clientes.
          </p>
          <div className="flex gap-[15px]">
            <a
              href="#"
              target="blank"
              aria-label="Facebook"
              className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-masyp before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <Facebook className="text-white" />
              </span>
            </a>
            <a
              href="#"
              target="blank"
              aria-label="Twitter"
              className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-masyp  before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <Youtube className="text-white" />
              </span>
            </a>
            <a
              href="#"
              target="blank"
              aria-label="Instagram"
              className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-masyp  before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <Instagram className="text-white" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="font-semibold text-white text-18">Servicios</h1>
          <ul className="mt-3.5">
            <li className="">
              <Link href="/project-details">
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Facturación Electrónica
                  </span>
                </div>
              </Link>
            </li>
            <li className="">
              <Link href="/project-details">
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Liquidaciones de compra
                  </span>
                </div>
              </Link>
            </li>
            <li className="">
              <Link href="/project-details">
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Guias de remisión
                  </span>
                </div>
              </Link>
            </li>
            <li className="">
              <a href="#">
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    VPS
                  </span>
                </div>
              </a>
            </li>
            <li className="">
              <Link href="/project-details">
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Utilcon
                  </span>
                </div>
              </Link>
            </li>
            <li className="">
              <Link href="/contact">
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Outsourcing Contable
                  </span>
                </div>
              </Link>
            </li>
            <li className="">
              <Link href="/blog-details">
                <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                  <svg
                    className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Desarrollo Web
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5">
          <h1 className="font-semibold text-white text-18">Dirección</h1>
          <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
            <span className="transition-all duration-300">
              Villa el Salvador, Sec. 3 Grupo 13 Mza. C Lote. 9
            </span>
          </div>
          <h1 className="font-semibold text-white text-18 mt-3.5">Contacto</h1>
          <div className="flex flex-row relative  font-medium gap-10 mt-3.5">
            <div className="flex flex-col">
              {" "}
              <a
                href="mailto:ventas@masydase.com"
                className=" text-white/50 hover:text-white hover:underline transition-all duration-300"
              >
                ventas@masydase.com
              </a>
              <a
                href="mailto:soporte@masydase.com"
                className="  text-white/50 hover:text-white hover:underline transition-all duration-300"
              >
                soporte@masydase.com
              </a>
              <a
                href="mailto:info@masydase.com"
                className="  text-white/50 hover:text-white hover:underline transition-all duration-300"
              >
                info@masydase.com
              </a>
            </div>
            <div className="flex flex-col">
              {" "}
              <a
                href="tel:987351513"
                className=" text-white/50 hover:text-white hover:underline transition-all duration-300"
              >
                987351513
              </a>
              <a
                href="tel:984799203"
                className="  text-white/50 hover:text-white hover:underline transition-all duration-300"
              >
                984799203
              </a>
              <a
                href="tel:936072443"
                className="  text-white/50 hover:text-white hover:underline transition-all duration-300"
              >
                936072443
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] md:h-[65px] bg-[#323239] relative z-10">
        <div className="h-full mx-auto theme-container">
          <div className="flex flex-col items-center justify-between w-full h-full sm:flex-row">
            <span className="pt-3 text-white/50 md:pt-0">
              2024 © Todos los derechos reservados
              <b className="text-white px-2">MasyDase</b>
            </span>
            <div className="relative">
              <a
                href="#"
                aria-label="go top"
                className="w-[45px] h-[45px] rounded-full border-[3px] border-[#323239] flex justify-center items-center bg-masyp hover:bg-white transition-all absolute -top-[70px] md:-top-[55px]"
              >
                <span>
                  <ArrowUp className="text-white hover:text-masyp transition-all" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
