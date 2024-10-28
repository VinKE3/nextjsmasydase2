"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import {
  Facebook,
  Instagram,
  MailCheckIcon,
  PhoneCallIcon,
  Youtube,
} from "lucide-react";

export default function DemoHeaderOne() {
  const headerRef = useRef(null);

  useEffect(() => {
    // Verificar que el código solo se ejecute en el cliente
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (headerRef.current) {
          if (window.scrollY >= 76) {
            headerRef.current.classList.remove("h1-header-sticky-qs");
          } else {
            headerRef.current.classList.add("h1-header-sticky-qs");
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <>
      <header>
        <div
          ref={headerRef}
          className="fixed top-0 left-0 z-40 hidden w-full header-wrapper xl:block h1-header-sticky h1-header-sticky-qs"
        >
          <div className="2xl:px-[110px] px-5 mx-auto relative">
            <div className="w-full h-[45px] justify-between items-center pl-[50px] bg-white border border-[#e7e8e9] hidden h1-top-bar">
              <span className="hidden 2xl:block">
                Bienvenidos a
                <span className="font-semibold text-masyp px-1">MasyDase</span>
                donde transformamos ideas en soluciones.
              </span>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #034281 50%,rgba(121, 74, 255, 0) 90.03%)",
                }}
                className="2xl:w-[1021px] w-full h-full flex items-center justify-end"
              >
                <div className="flex space-x-2.5 items-center mr-7">
                  <span>
                    <MailCheckIcon className="text-white" />
                  </span>
                  <span className="font-bold text-white">
                    Email : <u>ventas@masydase.com</u>
                  </span>
                </div>
                <div className="flex space-x-2.5 items-center mr-7">
                  <span className="text-white">
                    <PhoneCallIcon />
                  </span>
                  <span className="font-bold text-white">
                    Cel : (+51)987351513
                  </span>
                </div>

                <ul className="flex space-x-[15px] items-center mr-[55px]">
                  <li>
                    <a
                      href="#"
                      aria-label="facebook"
                      className="text-white opacity-50 hover:opacity-100"
                    >
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-label="youtube"
                      className="text-white opacity-50 hover:opacity-100"
                    >
                      <Youtube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-label="instagram"
                      className="text-white opacity-50 hover:opacity-100"
                    >
                      <Instagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-[95px] flex justify-between items-center px-[50px] border border-[#e7e8e9] bg-white border-t-0 relative">
              <div className="flex 2xl:space-x-[100px] xl:space-x-10 justify-between items-center w-full xl:w-auto">
                <div>
                  <Link href="/" aria-label="logo">
                    <img
                      src="/assets/images/logo/logo2.png"
                      width={170}
                      height={100}
                      alt=""
                    />
                  </Link>
                </div>
              </div>

              <Navbar />
              <div className="xl:flex hidden space-x-[30px] items-center">
                <Link href="#contacto">
                  <div className="py-3 home-two-btn-bg group bg-masyp border-masyp">
                    <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-masyp font-inter">
                      Contacto
                    </span>
                    <svg
                      className="relative z-10"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-masyp"
                        d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
