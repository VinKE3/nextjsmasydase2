"use client";
import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import Link from "next/link";
import "aos/dist/aos.css";
import AOS from "aos";
import { ArrowRight, Check } from "lucide-react";
const AboutOne: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Ajusta la duración según tu preferencia
      once: true, // La animación solo se ejecutará una vez al hacer scroll
    });
    AOS.refresh(); // Refresca AOS en caso de que el contenido cambie
  }, []);

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current);

      // Cleanup the parallax instance on component unmount
      return () => {
        parallaxInstance.disable();
      };
    }
  }, []);

  return (
    <section id="nosotros">
      <div className="home-one-about-wrapper w-full xl:pb-[153px] pb-[60px]">
        <div className="mx-auto theme-container">
          <div className="w-full grid xl:grid-cols-2 grid-cols-1 md:gap-[130px] gap-10 md:items-center relative">
            <div className="w-full about-thumbnil-area">
              <div
                data-aos="fade-right"
                className="xl:absolute relative lg:-left-16 left-0 top-0 lg:w-[682px] w-full"
              >
                <div ref={sceneRef} id="about-shape-mouse-anim">
                  <div data-depth="0.20" className="layer">
                    <div
                      data-aos="fade-right"
                      className="hidden thumbnil-wrapper md:block"
                    >
                      <img
                        src="/assets/images/home-one-about-thumb-shape.webp"
                        alt="About Thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  className="left-0 w-full thumbnil-main md:absolute -bottom-16"
                >
                  <div className="flex justify-center w-full">
                    <img
                      src="/assets/images/home-one-about-thumb-main.webp"
                      alt="About Main Thumbnail"
                      className="rounded-[20px] overflow-hidden"
                    />
                  </div>
                </div>
                <div className="w-full md:block hidden absolute left-0 top-0 h-[550px]">
                  <div
                    ref={sceneRef}
                    id="home-one-about-mouse-anim"
                    className="h-full"
                  >
                    <div
                      className="absolute layer left-2/3 top-36"
                      data-depth="0.30"
                    >
                      <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                        className="inline-block h-fit px-[30px] py-2.5 bg-masyp text-pone shadow-small shadow-masyp text-white rounded-full rounded-bl-none"
                      >
                        Soluciones Ágiles
                      </div>
                    </div>
                    <div
                      data-depth="0.50"
                      className="absolute bottom-0 layer left-1/2"
                    >
                      <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className="w-[296px] h-fit text-center p-[3px] pl-5 bg-white shadow-style-one rounded-full items-center"
                      >
                        <span className="text-sm font-semibold text-main-black text-nowrap">
                          Soluciones Ágiles
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-article-area">
              <span className="mb-5 section-title-top-tag">Sobre Nosotros</span>
              <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px] md:w-[80%] w-full xl:w-full">
                Transformamos ideas en soluciones ágiles de confianza
              </h2>
              <p className="text-paragraph mb-[50px]">
                En MASYDASE, somos un equipo joven especializado en el
                desarrollo de soluciones tecnológicas que impulsan la
                transformación digital de tu empresa.
              </p>
              <ul className="flex flex-wrap md:gap-[30px] gap-5 mb-[50px]">
                <li className="flex space-x-2.5 items-center text-masyp font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                  <Check />
                  <span>Desarrollo de aplicaciones</span>
                </li>
                <li className="flex space-x-2.5 items-center text-masyp font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                  <Check />
                  <span>Soporte Técnico</span>
                </li>
                <li className="flex space-x-2.5 items-center text-masyp font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                  <Check />
                  <span>Calidad y Servicio</span>
                </li>
                <li className="flex space-x-2.5 items-center text-masyp font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                  <Check />
                  <span>Soporte Técnico</span>
                </li>
              </ul>
              <div className="flex justify-start items-center">
                <Link
                  href="/about"
                  className="text-button inline-flex text-white justify-center items-center px-8 py-4 bg-black leading-none text-center hover:bg-masyp rounded-full transition-all"
                >
                  Ver Servicios
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
