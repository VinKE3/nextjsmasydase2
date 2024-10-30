"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const FunFactOne: React.FC = () => {
  const [startCount, setStartCount] = useState(false);
  const { ref } = useInView({
    triggerOnce: true, // Solo disparar la animación una vez
    threshold: 0.3, // Se activa cuando el 30% de la sección es visible
    onChange: (inView) => {
      if (inView) {
        setStartCount(true);
      }
    },
  });
  return (
    <section id="fun-fact" ref={ref}>
      <div className="fun-fact-wrapper w-full xl:pb-[130px] pb-[60px]">
        <div className="mx-auto theme-container">
          <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-[155px]">
            <div data-aos="fade-up" className="w-full">
              <span className="mb-5 section-title-top-tag text-masyp">
                Datos Empresa
              </span>
              <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px]">
                Trabajamos con diversos clientes y sectores.
              </h2>
              <p className="text-paragraph mb-[40px] pl-5 border-l-[3px] border-masyp">
                Nuestra empresa esta definida por el dinamismo digital y la
                innovación tecnológica.
              </p>
              <a href="#servicios">
                <div className="w-[182px] h-[56px] rounded-full border border-[#e7e3fa] flex justify-center items-center">
                  <div className="flex space-x-2.5 items-center text-masyp">
                    <span className="text-pone"> Ver Servicios </span>
                    <span>
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div
              data-aos="fade-up"
              className="relative flex flex-wrap w-full gap-5 mt-10 xl:mt-0 xl:flex-none"
            >
              <div className="xl:absolute left-20 top-0 rounded-[20px] w-[400px]  md:w-[300px] h-[178px] border border-[#e7e3fa] bg-main-gray overflow-hidden group">
                <div className="relative flex items-center justify-center p-8">
                  <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                    <p className="font-semibold text-center md:text-48 text-34 text-main-black">
                      {startCount && <CountUp start={0} end={30} />}+
                    </p>
                    <hr className="border-[3px] border-masyp w-[80px]" />
                    <p className="font-semibold text-center text-paragraph text-18">
                      Sistemas personalizados
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 xl:opacity-0 group-hover:opacity-100 bg-gradient-to-br from-masyp/10 to-masyp/20 p-4 duration-[250ms] "></div>
                </div>
              </div>
              <div className="xl:absolute left-0 bottom-5 rounded-[20px] w-[400px]  md:w-[300px] h-[178px] border border-[#e7e3fa] bg-main-gray overflow-hidden group">
                <div className="relative flex items-center justify-center p-8">
                  <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                    <p className="font-semibold text-center md:text-48 text-34 text-main-black">
                      {startCount && <CountUp start={0} end={15} />}
                      K+
                    </p>
                    <hr className="border-[3px] border-masyp w-[80px]" />
                    <p className="font-semibold text-center text-paragraph text-18">
                      Empresas nacionales
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 xl:opacity-0 group-hover:opacity-100 bg-gradient-to-br from-masyp/10 to-masyp/20 p-4 duration-[250ms] "></div>
                </div>
              </div>
              <div className="xl:absolute -right-12 bottom-20 rounded-[20px] w-[400px] md:w-[280px] h-[178px] border border-[#e7e3fa] bg-main-gray overflow-hidden group">
                <div className="relative flex items-center justify-center p-8">
                  <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                    <p className="font-semibold text-center md:text-48 text-34 text-main-black">
                      {startCount && <CountUp start={0} end={25} />}+
                    </p>
                    <hr className="border-[3px] border-masyp w-[80px]" />
                    <p className="font-semibold text-center text-paragraph text-18">
                      Años de experiencia
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-100 bg-gradient-to-br from-masyp/10 to-masyp/20 p-4 duration-[250ms] "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactOne;
