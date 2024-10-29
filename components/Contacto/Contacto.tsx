"use client";
import { Facebook, Globe, Instagram, MailCheck, Youtube } from "lucide-react";
import React, { useEffect } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/validations/userSchema";

type inputs = {
  name: "";
  email: "";
  mensaje: "";
};
const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm<inputs>({
    resolver: zodResolver(userSchema),
  });
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      const titulo = "Mensaje enviado correctamente";
      toast.success(titulo, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "toastTipoCambio",
      });
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<inputs> = async (data) => {
    // le paso los datos a la funcion que envia el email
    try {
      await sendEmail(data);
      console.log("email enviado", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section id="contacto" className="py-16 md:py-[130px]">
      <div className="theme-container w-full mx-auto grid grid-cols-7 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
        <div className="col-span-7 lg:col-span-5">
          <h1 className="font-semibold text-main-black text-[35px]">
            Contactanos
          </h1>
          <p className="text-paragraph mt-[30px]">
            Estamos aquí para depejar tus dudas sobre todos nuestros servicios,
            no dudes en realizar tus consultas, responderemos a la brevedad.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[70px] mt-10">
            <div className="col-span-1">
              <h1 className="flex gap-2.5">
                <Globe className="text-masyp h-[30px] w-[25px]" />
                <span className="font-medium font-inter text-22 text-main-black">
                  Dirección
                </span>
              </h1>
              <p className="max-w-[209px] text-paragraph mt-5">
                Villa el Salvador, Sec. 3 Grupo 13 Mza. C Lote. 9
              </p>
            </div>
            <div className="col-span-1">
              <h1 className="flex gap-2.5">
                <MailCheck className="text-masyp h-[30px] w-[25px]" />
                <span className="font-medium font-inter text-22 text-main-black">
                  Información
                </span>
              </h1>
              <div className="flex flex-col">
                {" "}
                <a
                  href="mailto:ventas@masydase.com"
                  className=" text-paragraph hover:text-masyp hover:underline transition-all duration-300"
                >
                  ventas@masydase.com
                </a>
                <a
                  href="mailto:soporte@masydase.com"
                  className="  text-paragraph hover:text-masyp hover:underline transition-all duration-300"
                >
                  soporte@masydase.com
                </a>
                <a
                  href="mailto:info@masydase.com"
                  className="  text-paragraph hover:text-masyp hover:underline transition-all duration-300"
                >
                  info@masydase.com
                </a>
                <a
                  href="tel:987351513"
                  className=" text-paragraph hover:text-masyp hover:underline transition-all duration-300"
                >
                  987351513
                </a>
                <a
                  href="tel:984799203"
                  className="  text-paragraph hover:text-masyp hover:underline transition-all duration-300"
                >
                  984799203
                </a>
                <a
                  href="tel:936072443"
                  className="  text-paragraph hover:text-masyp hover:underline transition-all duration-300"
                >
                  936072443
                </a>
              </div>
            </div>
          </div>
          <hr className="border-masyp/10 mt-11 mb-[50px]" />
          <div className="flex items-center gap-[15px]">
            <h1 className="font-semibold text-18 text-main-black pr-2.5">
              Redes Sociales
            </h1>
            <a
              href="https://www.facebook.com/FacturacionElectronicaMasyDase/?locale=es_LA"
              target="blank"
              aria-label="facebook"
              className="w-10 h-10 text-[#034281] hover:text-white rounded-full flex justify-center items-center border border-masyp/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-masyp before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <Facebook />
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCu-Pqi2dKhzVKW7a2SpFJAA/videos"
              aria-label="youtube"
              target="blank"
              className="w-10 h-10 text-[#034281] hover:text-white rounded-full flex justify-center items-center border border-masyp/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-masyp before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <Youtube />
              </span>
            </a>
            <a
              href="https://www.instagram.com/masydase_/"
              aria-label="instagram"
              target="blank"
              className="w-10 h-10 text-[#034281] hover:text-white rounded-full flex justify-center items-center border border-masyp/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-masyp before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <Instagram />
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-7">
          <div className="border border-masyp/10 bg-main-gray rounded-[10px] p-4 md:p-[50px]">
            <ToastContainer />
            <h1 className="text-[30px] tracking-tight font-semibold text-main-black pb-6">
              Enviar Mensaje
            </h1>
            <p className="text-paragraph mb-[30px]">
              Hay campos que son obligarios *
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-6 md:grid-cols-12 gap-[30px]"
            >
              <input
                type="text"
                placeholder="Nombre Completo"
                className="col-span-12 h-[30px] focus:outline-none border-b border-masyp/10 focus:border-masyp bg-transparent"
                id="name"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500 col-span-12 h-[30px]">
                  {errors.name.message}
                </span>
              )}
              <input
                type="email"
                placeholder="Email"
                className="col-span-12 h-[30px] focus:outline-none border-b border-masyp/10 focus:border-masyp bg-transparent"
                id="email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500 col-span-12 h-[30px]">
                  {errors.email.message}
                </span>
              )}
              <textarea
                placeholder="Consulta"
                className="col-span-6 md:col-span-12 focus:outline-none border-b border-masyp/10 focus:border-masyp bg-transparent h-[83px]"
                id="mensaje"
                {...register("mensaje")}
              ></textarea>
              {errors.mensaje && (
                <span className="text-red-500 col-span-12 h-[30px]">
                  {errors.mensaje.message}
                </span>
              )}
              <div className="col-span-6 md:col-span-12">
                <button
                  type="submit"
                  className="home-two-btn-bg py-3 group bg-[#034281] border-[#034281] inline-flex"
                >
                  <span className="text-base text-white group-hover:text-[#034281] transition-all duration-300 font-inter relative z-10">
                    {!isSubmitSuccessful ? "Enviar Mensaje" : "Email enviado"}
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
                      className="group-hover:stroke-[#034281] transition-all duration-300"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- contact-form end  --> */}
      </div>
    </section>
  );
};

export default Contacto;
