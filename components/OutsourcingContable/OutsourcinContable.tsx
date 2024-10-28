import React from "react";
import Link from "next/link";
const OutsourcinContable = () => {
  return (
    <section className="pt-[70px] md:pt-[175px] pb-[70px] md:pb-[175px]">
      <div className="w-full mx-auto theme-container">
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6 gap-y-10">
          <div className="relative col-span-3 flex justify-center items-end xl:px-[62px]">
            <img
              src="/assets/images/home-nine/features-bg.svg"
              alt=""
              className="absolute z-0 cta_bg_anim"
            />
            <img
              src="/assets/images/home-nine/features-img.png"
              alt=""
              className="relative z-10 moving-h2-hero-main-img"
            />
          </div>
          <div className="col-span-3 xl:px-[62px]">
            <div className="max-w-[476px]">
              <h1 className="pt-5 font-semibold text-24 sm:text-48 text-main-black">
                Outsorcing Contable
              </h1>
              <p className="pt-5 text-paragraph sm:pt-10">
                Implica delegar funciones relacionadas con la contabilidad, como
                la gestión de libros contables, la elaboración de informes
                financieros, la prepración de impuestos, y el control de
                cuentas, a una entidad externa especilizada. Esto puede incluir
                desde firmas contables hasta freelancers con experiencia en
                contabilidad.
              </p>
              <ul className="flex flex-col gap-0.5 mt-6 mb-11">
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Reducción de Costos
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Asesoría personalizada
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Acceso a experiencia personalizada
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Flexibilidad operativa y dinámica.
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Garantía del cumplmiento normativo
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Mitigación y reducción de riesgos empresariales
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Optimización de recursos
                </li>
                <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-masyp tick-before before:flex before:justify-center before:items-center text-main-black">
                  Seguridad de la información
                </li>
              </ul>
              <Link href="/services">
                <div className="home-two-btn-bg group bg-masyp border-masyp hover:border-main-black py-[15px] w-fit">
                  <span className="relative z-10 text-base font-semibold transition-all duration-300 group-hover:text-main-black text-white font-inter">
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
                      className="transition-all duration-300 group-hover:stroke-main-black stroke-white"
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
      </div>
    </section>
  );
};

export default OutsourcinContable;
