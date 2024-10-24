import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-50 pb-16 md:pb-[130px] pt-20">
      <div className="w-full mx-auto theme-container">
        <div className="flex flex-col items-center w-full">
          <h1 className="px-5 bg-masyp/10 border border-masyp/20 text-masyp font-medium rounded-[30px] w-fit mx-auto">
            Tabla Compartiva
          </h1>
          <h2 className="text-paragraph font-semibold text-24 sm:text-48 pt-5 max-w-[819px] text-center">
            Sistemas de facturación web electrónica
          </h2>
          <p className="text-paragraph text-18 sm:text-18 pt-5 max-w-[819px] text-center">
            Es una herramienta digital que automatiza la emisión y gestión de
            comprobantes electrónicos, ayudando a reducir errores, costos y
            optimizando sus procesos administrativos.
          </p>
        </div>
        <div className="grid gap-5 lg:gap-[70px] grid-cols-4 md:grid-cols-8 xl:grid-cols-12 mt-[70px] lg:px-8">
          <div className="col-span-6 p-5 sm:p-10 lg:p-12 bg-white border border-transparent hover:border-white/20 rounded-[40px] transition-all duration-200 text-white h-fit">
            {/* <h1 className="font-semibold text-gray-500 text-18">
              Sistema Estándar
            </h1> */}
            <img
              src="/assets/images/factura/standar.jpg"
              alt="Pricing Title"
              width={300}
              height={100}
            />
            <p className="pt-5  text-gray-500">No aplica a modificaciones</p>

            <ul className="flex flex-col gap-5 pt-5">
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">
                  Funciones predeterminadas.
                </span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">Bajo costo</span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">
                  Incluye Soporte estandarizado
                </span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">
                  Implementación inmediata.
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">Escalabilidad limitada</span>
              </li>
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">
                  Diseño y compatibilidad con cualquier rubro
                </span>
              </li>
            </ul>
            {/* <Link href="#contacto">
              <div className="mt-10 flex justify-center gap-2 px-5 sm:px-10 py-[11px] rounded-[40px] bg-masyp items-center overflow-hidden relative before:block before:w-[300px] before:h-[300px] before:absolute before:bg-white/5 before:-top-[100px] before:rotate-45 hover:before:-top-[400px] transition-all duration-300 before:transition-all before:duration-1000 before:z-0 z-10 text-masyp hover:text-masyp after:block after:w-[300px] after:h-[300px] after:absolute after:bg-white/50 after:-bottom-[100px] after:rotate-45 hover:after:-bottom-[400px] after:transition-all after:duration-1000 after:z-0 group">
                <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover:text-white font-inter">
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
                    className="transition-all duration-300 group-hover:stroke-white stroke-masyp"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link> */}
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
          </div>

          <div
            data-aos="zoom-out"
            className="col-span-6 p-5 sm:p-10 lg:p-12 bg-white border border-transparent hover:border-white/20 rounded-[40px] transition-all duration-200 text-white h-fit"
          >
            <img
              src="/assets/images/factura/standar.jpg"
              alt="Pricing Title"
              width={300}
              height={100}
            />
            <p className="pt-5 text-paragraph">
              Si Aplica a modificaciones bajo los requerimientos del cliente
            </p>

            <ul className="flex flex-col gap-5 pt-5">
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">
                  Personalización según necesidades de la empresa.
                </span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">
                  Mayor inversión con enfoque único.
                </span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">
                  Incluye Soporte especializado
                </span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">
                  Requiere tiempo de desarrollo e implementación.
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">
                  Apto para modificaciones según cambios de la empresa.
                </span>
              </li>
              <li className="flex items-center gap-3 font-medium text-18">
                <Check className="text-masyp" />
                <span className="text-paragraph">Exclusividad de uso.</span>
              </li>
            </ul>
            {/* <Link href="/pricing">
              <div className="mt-10 flex justify-center gap-2 px-5 sm:px-10 py-[11px] rounded-[40px] bg-masyp items-center overflow-hidden relative before:block before:w-[300px] before:h-[300px] before:absolute before:bg-white/5 before:-top-[100px] before:rotate-45 hover:before:-top-[400px] transition-all duration-300 before:transition-all before:duration-1000 before:z-0 z-10 text-masyp hover:text-masyp after:block after:w-[300px] after:h-[300px] after:absolute after:bg-white/50 after:-bottom-[100px] after:rotate-45 hover:after:-bottom-[400px] after:transition-all after:duration-1000 after:z-0 group">
                <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover:text-white font-inter">
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
                    className="transition-all duration-300 group-hover:stroke-white stroke-masyp"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link> */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
