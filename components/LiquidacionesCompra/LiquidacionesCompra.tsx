"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const LiquidacionesCompra = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir el modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <section className="mt-20 mb-20" id="liquidaciones-compra">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-6 xl:grid-cols-12 gap-y-10">
          <div className="col-span-6">
            <div className="max-w-[476px]">
              <h1 className="border text-main-black border-masyp/10 py-0.5 px-5 rounded-[30px] w-fit bg-masyp/5 font-medium">
                Servicios
              </h1>
              <h2 className="pt-5 font-semibold text-24 sm:text-48 text-main-black">
                Sistema de Liquidaciones de compra
              </h2>
              <p className="pt-5 text-paragraph sm:pt-10">
                Es el proceso mediante el cual se revisan, verifican y ajustan
                todas las transacciones relacionadas con la adquisición de
                bienes o servicios.
              </p>

              <ul className="flex flex-col gap-0.5 mt-6 mb-11">
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Multi empresa
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Carga mediante excel
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Listado de vendedores
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Descarga PDF y XML
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Permite consultar DNI
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Opción de revertir las liquidaciones
                </li>
              </ul>

              <Link href="#contacto">
                <div className="home-two-btn-bg group bg-masyp border-masyp py-[15px] w-fit">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-masyp font-inter">
                    Contratar Servicio
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
                      className="transition-all duration-300 group-hover:stroke-masyp stroke-white"
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
          <div className="relative col-span-6 flex flex-col sm:flex-row justify-center items-center gap-[30px]">
            <svg
              className="absolute z-0 max-w-full -top-16"
              width="465"
              height="465"
              viewBox="0 0 465 465"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="232.5"
                cy="232.5"
                r="231.9"
                stroke="#161519"
                strokeOpacity="0.07"
                strokeWidth="1.2"
              />
            </svg>
            {/* <img
              data-aos="fade-left"
              src="./assets/images/liquidacionCompras/liqui2.png"
              alt=""
              className="relative z-10 hidden sm:block"
            /> */}
            <img
              data-aos="fade-down"
              data-aos-delay="100"
              src="./assets/images/liquidacionCompras/liqui2.png"
              alt=""
              className="relative z-10"
            />
            <div className="bg-masyp p-[30px] rounded-2xl absolute z-20 bottom-8 w-[295px]">
              <button
                onClick={handleOpenModal}
                aria-label="play-video"
                className="flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
              >
                <span className="flex size-11 sm:size-[56px] rounded-full justify-center items-center bg-white relative">
                  <span>
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9611 8.29308L2.99228 12.8467C1.65896 13.6086 0 12.6459 0 11.1102V2.00295C0 0.467309 1.65896 -0.495425 2.99228 0.266469L10.9611 4.82011C12.3048 5.5879 12.3048 7.52529 10.9611 8.29308Z"
                        fill="#034281"
                      />
                    </svg>
                  </span>
                  <div className="absolute w-full h-full rounded-full h5-play-btn-line1"></div>
                  <div className="absolute w-[130%] h-[130%] rounded-full h5-play-btn-line2"></div>
                  <div className="absolute w-[160%] h-[160%] rounded-full h5-play-btn-line3"></div>
                </span>
                <span className="font-semibold text-white border-b border-white">
                  ¿Como Funciona?
                </span>
              </button>
            </div>
            <div className="relative">
              {/* Modal */}
              {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                  <div className="relative bg-white p-4 rounded-lg">
                    <button
                      className="absolute top-2 right-2 bg-red-500 rounded-xl"
                      onClick={handleCloseModal}
                    >
                      <X className="text-white" />
                    </button>
                    <div className="w-[750px] h-96">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube-nocookie.com/embed/JdqL89ZZwFw?si=jnriuBsR3pv2EoUa"
                        title="Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquidacionesCompra;
