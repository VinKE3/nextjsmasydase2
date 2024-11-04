import React from "react";
import lineAnimation from "../../lottie/left_lines.json";
import Lottie from "lottie-react";
import { Check } from "lucide-react";

const OutsourcingServices = () => {
  return (
    <section id="service-outsourcing">
      <div className="w-full service-section-wrapper xl:pb-[130px] pb-[60px] relative">
        <div className="relative z-10 mx-auto theme-container">
          <div className="w-full xl:py-[130px] py-[60px] xl:px-[80px] md:px-10 px-5 bg-main-gray rounded-[10px] border border-gray-bg-gray-200">
            <div className="flex flex-col items-center">
              <span className="text-masyp font-medium px-5 py-3 border border-gray-bg-gray-200 leading-none rounded-full inline-block mb-5 bg-white">
                Servicios Outsourcing Contable
              </span>
              <h2 className="md:text-34 text-20 font-semibold text-main-black mb-[50px] text-center lg:w-[985px] w-full">
                Servicios diseñados para simplificar y optimizar la gestión
                financiera de tu empresa.
              </h2>
            </div>
            <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[70px] gap-8">
              <div
                data-aos="zoom-in-left"
                className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 shadow-common group border border-transparent hover:border-masyp common-transition"
              >
                <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-200 group-hover:bg-masyp common-transition text-masyp group-hover:text-white">
                  <Check />
                </div>
                <div>
                  <p className="mb-4 font-semibold text-center text-20 text-main-black">
                    Reducción de Costos
                  </p>
                  <p className="text-center text-paragraph">
                    Ayudamos a disminuir tus costos operativos mediante una
                    estructura eficiente, optimizando el uso de recursos sin
                    comprometer la calidad.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-delay="100"
                className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-masyp common-transition"
              >
                <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-200 group-hover:bg-masyp common-transition text-masyp group-hover:text-white">
                  <Check />
                </div>
                <div>
                  <p className="mb-4 font-semibold text-center text-20 text-main-black">
                    Asesoría Personalizada
                  </p>
                  <p className="text-center text-paragraph">
                    Ofrecemos un acompañamiento cercano, adaptándonos a las
                    necesidades de tu negocio para brindarte soluciones
                    específicas y efectivas.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-delay="200"
                className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-masyp common-transition"
              >
                <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-200 group-hover:bg-masyp common-transition text-masyp group-hover:text-white">
                  <Check />
                </div>
                <div>
                  <p className="mb-4 font-semibold text-center text-20 text-main-black">
                    Acceso a Experiencia Especializada
                  </p>
                  <p className="text-center text-paragraph">
                    Ponemos a tu disposición profesionales con amplio
                    conocimiento y experiencia en contabilidad para una gestión
                    óptima de tus finanzas.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-delay="300"
                className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-masyp common-transition"
              >
                <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-200 group-hover:bg-masyp common-transition text-masyp group-hover:text-white">
                  <Check />
                </div>
                <div>
                  <p className="mb-4 font-semibold text-center text-20 text-main-black">
                    Mitigación y Reducción de Riesgos Empresariales
                  </p>
                  <p className="text-center text-paragraph">
                    Ayudamos a identificar y gestionar riesgos financieros,
                    protegiendo a tu empresa de posibles amenazas y pérdidas.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-delay="400"
                className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-masyp common-transition"
              >
                <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-200 group-hover:bg-masyp common-transition text-masyp group-hover:text-white">
                  <Check />
                </div>
                <div>
                  <p className="mb-4 font-semibold text-center text-20 text-main-black">
                    Flexibilidad Operativa y Dinámica.
                  </p>
                  <p className="text-center text-paragraph">
                    Nos adaptamos al ritmo y cambios de tu negocio, asegurando
                    que puedas responder rápidamente a los desafíos del mercado.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-delay="500"
                className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-masyp common-transition"
              >
                <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-gray-200 group-hover:bg-masyp common-transition text-masyp group-hover:text-white">
                  <Check />
                </div>
                <div>
                  <p className="mb-4 font-semibold text-center text-20 text-main-black">
                    Garantía del Cumplimiento Normativo
                  </p>
                  <p className="text-center text-paragraph">
                    Nos aseguramos de que todas las operaciones contables
                    cumplan con las normativas vigentes, evitando sanciones y
                    problemas legales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between top-1/3">
          <Lottie animationData={lineAnimation} loop={true} />
          <Lottie
            animationData={lineAnimation}
            className="transform rotate-180"
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default OutsourcingServices;
