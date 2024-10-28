"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { X } from "lucide-react";
const GuiasRemision = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir el modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".h2-case-study-next",
      prevEl: ".h2-case-study-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  };
  return (
    <section
      id="sistema-guias-remision"
      className="w-full py-16 md:py-[130px] -top-2/4 bg-black-seo relative overflow-hidden"
    >
      <div className="relative z-10 w-full mx-auto theme-container">
        <div className="" id="caseStudies">
          <p className="px-5 py-1 text-white rounded-[30px] bg-masyp font-medium w-fit">
            Servicios
          </p>
          <div className="flex flex-col items-end justify-between w-full mt-5 sm:flex-row">
            <div>
              <h1 className="max-w-[660px] text-24 sm:text-48 text-white font-semibold">
                Sistema de Guias de Remisión
              </h1>
              <p className="text-white mt-5">
                Es un documento legal que acompaña a las mercancías durante el
                transporte. Su propósito es certificar la entrega y recepción de
                bienes entre un remitente y un destinatario.
              </p>
            </div>

            <div className="flex gap-2.5">
              <button className="h2-case-study-next w-8 h-8 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-white/10 flex items-center justify-center overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-masyp before:bg-masyp relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                <svg
                  className="relative z-10 pointer-events-none"
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 12L1 6.75M1 6.75L6.25 1.5M1 6.75L15 6.75"
                    stroke="white"
                    strokeOpacity="0.55"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="h2-case-study-prev rotate-180 w-8 h-8 sm:w-11 sm:h-11 rounded-full border-[1.5px] border-white/10 flex items-center justify-center overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-masyp before:bg-masyp relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                <svg
                  className="relative z-10 pointer-events-none"
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 12L1 6.75M1 6.75L6.25 1.5M1 6.75L15 6.75"
                    stroke="white"
                    strokeOpacity="0.55"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <Swiper
            {...swiperOptions}
            className="mt-10 overflow-hidden swiper case_study_slider md:mt-16"
          >
            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-masyp before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-masyp group-hover:text-white">
                    SEO Optimization
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve Company users retention
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/1.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <button
                    onClick={handleOpenModal}
                    aria-label="play-video"
                    className="flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
                  >
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-masyp leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                        Ver video
                      </span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#034281"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="relative"></div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-masyp before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-masyp group-hover:text-white">
                    Keywords Research
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve keywords research users
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/2.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <button
                    onClick={handleOpenModal}
                    aria-label="play-video"
                    className="flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
                  >
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-masyp leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                        Ver video
                      </span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#034281"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-masyp before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-masyp group-hover:text-white">
                    Content Marketing
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve Company users retention
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/1.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <button
                    onClick={handleOpenModal}
                    aria-label="play-video"
                    className="flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
                  >
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-masyp leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                        Ver video
                      </span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#034281"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-masyp before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-masyp group-hover:text-white">
                    SEO Optimization
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve Company users retention
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/1.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <button
                    onClick={handleOpenModal}
                    aria-label="play-video"
                    className="flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
                  >
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-masyp leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                        Ver video
                      </span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#034281"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-masyp before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-masyp group-hover:text-white">
                    Keywords Research
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve keywords research users
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/2.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <button
                    onClick={handleOpenModal}
                    aria-label="play-video"
                    className="flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
                  >
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-masyp leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                        Ver video
                      </span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#034281"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-[20px] pt-7 pb-5 px-2.5 relative group overflow-hidden transition-all duration-300 before:inline-block before:w-[800px] before:h-[800px] before:rounded-full before:bg-masyp before:absolute before:z-0 z-10 before:-bottom-[800px] before:-right-[800px] before:transition-all before:duration-1000 hover:before:-bottom-[150px] hover:before:-right-[150px]">
                <div className="relative z-10 px-2 md:px-10">
                  <p className="font-semibold leading-6 transition-all duration-300 ease-in-out delay-300 text-masyp group-hover:text-white">
                    Content Marketing
                  </p>
                  <a href="">
                    <h1 className="pt-1 font-semibold transition-all duration-300 text-24 text-main-black group-hover:text-white underlines">
                      How we helped improve Company users retention
                    </h1>
                  </a>
                </div>
                <img
                  src="./assets/images/home-two/case_study/1.svg"
                  alt=""
                  className="max-w-[390px] w-full rounded-2xl mt-10 relative z-10"
                />
                <div className="relative z-10 flex justify-between px-10 mt-4">
                  <button
                    onClick={handleOpenModal}
                    aria-label="play-video"
                    className="flex items-center space-x-8 video-play-btn ml-7 sm:ml-0"
                  >
                    <div className="flex items-center gap-2 group">
                      <span className="transition-all duration-300 font-medium group-hover:text-white text-masyp leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:content-['Read More'] before:text-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                        Ver video
                      </span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="transition-all duration-300 group-hover:stroke-white"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#6D6D6D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                  <button aria-label="share">
                    <svg
                      className=""
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="transition-all duration-300 group-hover:stroke-white"
                        d="M7.63118 9.43441C7.05656 8.2874 5.87023 7.5 4.5 7.5C2.567 7.5 1 9.067 1 11C1 12.933 2.567 14.5 4.5 14.5C5.87023 14.5 7.05656 13.7126 7.63118 12.5656M7.63118 9.43441C7.86718 9.90549 8 10.4372 8 11C8 11.5628 7.86718 12.0945 7.63118 12.5656M7.63118 9.43441L14.3688 6.06559M7.63118 12.5656L14.3688 15.9344M14.3688 6.06559C14.9434 7.2126 16.1298 8 17.5 8C19.433 8 21 6.433 21 4.5C21 2.567 19.433 1 17.5 1C15.567 1 14 2.567 14 4.5C14 5.06276 14.1328 5.59451 14.3688 6.06559ZM14.3688 15.9344C14.1328 16.4055 14 16.9372 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C16.1298 14 14.9434 14.7874 14.3688 15.9344Z"
                        stroke="#034281"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {/* <!-- animation circle  --> */}
                <div className="absolute z-0 items-center justify-center hidden w-2 h-2 bottom-10 -right-1 group-hover:flex">
                  <div className="animated_circle_sm bg-white/10"></div>
                  <div className="animated_circle_sm2 bg-white/10"></div>
                  <div className="animated_circle_sm3 bg-white/10"></div>
                  <div className="animated_circle_sm4 bg-white/10"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
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
    </section>
  );
};

export default GuiasRemision;
