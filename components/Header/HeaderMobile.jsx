"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import NavbarMobile from "../Navbar/NavbarMobile";
import { MailCheck, PhoneCall } from "lucide-react";

const MobileHeader = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const navRef = useRef(null);
  const overlayRef = useRef(null);

  const toggleNav = () => {
    setIsNavActive((prev) => !prev);
  };

  useEffect(() => {
    const handleOverlayClick = () => {
      setIsNavActive(false);
    };

    if (overlayRef.current) {
      overlayRef.current.addEventListener("click", handleOverlayClick);
    }

    return () => {
      if (overlayRef.current) {
        overlayRef.current.removeEventListener("click", handleOverlayClick);
      }
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setIsNavActive(false);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="relative flex flex-col xl:hidden">
      <div className="h-16 bg-white flex items-center justify-between fixed top-0 left-0 z-50 w-full px-2.5">
        <Link href="/" aria-label="logo">
          <img
            src="/assets/images/logo/logo2.png"
            width={170}
            height={100}
            alt=""
          />
        </Link>
        <button
          aria-label="mobile-Menu"
          className="w-6 h-6 text-main-black text-48 toggle_nav_menu"
          id="mobile_nav_toggle_menu"
          onClick={toggleNav}
        >
          <svg
            className={`transition-all duration-300 pointer-events-none ${
              isNavActive ? "hidden" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32-14.3 32 32z" />
          </svg>
          <svg
            className={`transition-all duration-300 pointer-events-none ${
              isNavActive ? "" : "hidden"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
      <div className="transition-all duration-300">
        <div
          className={`fixed z-40 w-full h-screen transition-all duration-300 delay-150 bg-black/80 ${
            isNavActive ? "left-0" : "-left-full"
          }`}
          id="mobile-nav-div-overlay"
          ref={overlayRef}
        ></div>
        <div
          className={`fixed z-50 w-full h-screen overflow-y-scroll transition-all duration-300 bg-white top-16 ${
            isNavActive ? "left-0" : "-left-full"
          }`}
          id="mobile-nav-div"
          ref={navRef}
        >
          <div className="flex flex-col pt-5 pl-5 gap-28">
            <NavbarMobile />
          </div>
          <div className="flex flex-col gap-5 pl-5 mt-5">
            <a href="tel:987351513" className="flex gap-2.5 group">
              <PhoneCall className="text-masyp" />
              <span className="text-base font-bold leading-5 tracking-tight text-paragraph hover:text-masyp">
                Cel : (+51)987351513
              </span>
            </a>
            <a href="tel:984799203" className="flex gap-2.5 group">
              <PhoneCall className="text-masyp" />
              <span className="text-base font-bold leading-5 tracking-tight text-paragraph hover:text-masyp">
                Cel : (+51)984799203
              </span>
            </a>
            <a href="tel:936072443" className="flex gap-2.5 group">
              <PhoneCall className="text-masyp" />
              <span className="text-base font-bold leading-5 tracking-tight text-paragraph hover:text-masyp">
                Cel : (+51)936072443
              </span>
            </a>
            <a href="mailto:ventas@masydase.com" className="flex gap-2.5 group">
              <MailCheck className="text-masyp" />
              <span className="text-base font-bold leading-5 tracking-tight text-paragraph hover:text-masyp">
                Email : ventas@masydase.com
              </span>
            </a>
            <a
              href="mailto:soporte@masydase.com"
              className="flex gap-2.5 group"
            >
              <MailCheck className="text-masyp" />
              <span className="text-base font-bold leading-5 tracking-tight text-paragraph hover:text-masyp">
                Email : soporte@masydase.com
              </span>
            </a>
            <a href="mailto:info@masydase.com" className="flex gap-2.5 group">
              <MailCheck className="text-masyp" />
              <span className="text-base font-bold leading-5 tracking-tight text-paragraph hover:text-masyp">
                Email : info@masydase.com
              </span>
            </a>
            <Link href="contacto">
              <div className="home-two-btn-bg py-2.5 group bg-masyp border-masyp w-fit">
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
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
