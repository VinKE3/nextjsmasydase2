import { Check, Video, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const Pricing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  // Función para abrir el modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleOpenModal2 = () => {
    setIsOpen2(true);
  };
  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleCloseModal2 = () => {
    setIsOpen2(false);
  };
  const words = [
    {
      text: "Sistema",
    },
    {
      text: "Estándar",
    },
  ];
  const words2 = [
    {
      text: "Sistema a",
    },
    {
      text: "Medida",
    },
  ];
  return (
    <section
      id="facturacion-electronica"
      className="bg-gray-50 pb-16 md:pb-[130px] pt-20"
    >
      <div className="w-full mx-auto theme-container">
        <div className="flex flex-col items-center w-full">
          <h1 className="px-5 bg-masyp/10 border border-masyp/20 text-masyp font-medium rounded-[30px] w-fit mx-auto">
            Tabla Compartiva
          </h1>
          <h2 className="text-main-black font-semibold text-24 sm:text-48 pt-5 max-w-[819px] text-center">
            Sistemas de facturación web electrónica
          </h2>
          <p className="text-paragraph text-18 sm:text-18 pt-5 max-w-[819px] text-center">
            Es una herramienta digital que automatiza la emisión y gestión de
            comprobantes electrónicos, ayudando a reducir errores, costos y
            optimizando sus procesos administrativos.
          </p>
        </div>
        <div className="grid gap-5 lg:gap-[70px] grid-cols-4 md:grid-cols-8 xl:grid-cols-12 mt-[70px] lg:px-8">
          <div
            data-aos="fade-up"
            className="col-span-6 p-5 sm:p-10 lg:p-12 bg-white border border-transparent hover:border-white/20 rounded-[40px] transition-all duration-200 text-white h-fit"
          >
            <TypewriterEffectSmooth words={words} />
            <p className="pt-5  text-gray-500">No aplica a modificaciones</p>

            <ul className="flex flex-col gap-5 pt-5">
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">
                  Funciones predeterminadas.
                </span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">Bajo costo</span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">
                  Incluye Soporte estandarizado
                </span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">
                  Implementación inmediata.
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">Escalabilidad limitada</span>
              </li>
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">
                  Diseño y compatibilidad con cualquier rubro
                </span>
              </li>
            </ul>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <Link href="#contacto">
                <div className="home-two-btn-bg mt-10 group bg-masyp border-masyp py-3 sm:py-[15px]">
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
              <button onClick={handleOpenModal} aria-label="play-video">
                <div className="home-two-btn-bg mt-10 group bg-masyp border-masyp py-3 sm:py-[15px]">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-masyp font-inter">
                    Video Demo
                  </span>
                  <Video className="relative z-10 transition-all duration-300 group-hover:stroke-masyp stroke-white" />
                </div>
              </button>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="col-span-6 p-5 sm:p-10 lg:p-12 bg-white border border-transparent hover:border-white/20 rounded-[40px] transition-all duration-200 text-white h-fit"
          >
            <TypewriterEffectSmooth words={words2} />
            <p className="pt-5 text-paragraph">
              Si Aplica a modificaciones bajo los requerimientos del cliente
            </p>

            <ul className="flex flex-col gap-5 pt-5">
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">
                  Personalización según necesidades de la empresa.
                </span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">
                  Mayor inversión con enfoque único.
                </span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">
                  Incluye Soporte especializado
                </span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">
                  Requiere tiempo de desarrollo e implementación.
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">
                  Apto para modificaciones según cambios de la empresa.
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp flex-shrink-0" />
                <span className="text-paragraph">Exclusividad de uso.</span>
              </li>
            </ul>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <Link href="#contacto">
                <div className="home-two-btn-bg mt-10 group bg-masyp border-masyp py-3 sm:py-[15px]">
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
              <button onClick={handleOpenModal2} aria-label="play-video">
                <div className="home-two-btn-bg mt-10 group bg-masyp border-masyp py-3 sm:py-[15px]">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-masyp font-inter">
                    Video Demo
                  </span>
                  <Video className="relative z-10 transition-all duration-300 group-hover:stroke-masyp stroke-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-4 rounded-lg max-w-7xl w-full h-[380px] md:h-[750px]">
            <button
              className="absolute top-2 right-2 bg-red-500 rounded-xl"
              onClick={handleCloseModal}
            >
              <X className="text-white" />
            </button>
            <div className="h-full w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1dHIVmfoAYo?si=DLQeF-G73MEWSlqx"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {isOpen2 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-4 rounded-lg max-w-7xl w-full h-[380px] md:h-[750px]">
            <button
              className="absolute top-2 right-2 bg-red-500 rounded-xl"
              onClick={handleCloseModal2}
            >
              <X className="text-white" />
            </button>
            <div className="h-full w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Kem-j1OLBwE?si=1PzdckpWPBzkBh13"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
