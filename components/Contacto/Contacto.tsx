"use client";
import { Globe, MailCheck } from "lucide-react";
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
              href="#"
              target="blank"
              aria-label="facebook"
              className="w-10 h-10 text-[#034281] hover:text-white rounded-full flex justify-center items-center border border-masyp/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-masyp before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6667 0H8.55556C5.79413 0 3.55556 2.23857 3.55556 5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111 4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#"
              aria-label="twitter"
              target="blank"
              className="w-10 h-10 text-[#034281] hover:text-white rounded-full flex justify-center items-center border border-masyp/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-masyp before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7642 0C10.5722 0 8.7953 1.86585 8.7953 4.1675C8.7953 4.5153 8.83587 4.85315 8.91232 5.17611C6.80469 5.17611 3.63013 4.74999 0.978868 2.09376C0.626315 1.74054 -0.0237835 1.9767 0.000670803 2.47516C0.393588 10.484 3.82353 12.8202 5.58986 12.9656C4.44926 14.0921 2.79242 14.9813 1.1252 15.3804C0.685191 15.4857 0.576494 15.9674 1.00675 16.1073C2.19973 16.4953 3.90729 16.6448 4.82642 16.67C11.3286 16.67 16.6134 11.1972 16.731 4.3991C17.5847 3.84394 18.1315 2.63855 18.4388 1.78464C18.5136 1.57667 18.1728 1.33436 17.9687 1.41931C17.331 1.68479 16.5214 1.74773 15.8318 1.52302C15.1039 0.593104 14 0 12.7642 0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#"
              aria-label="instagram"
              target="blank"
              className="w-10 h-10 text-[#034281] hover:text-white rounded-full flex justify-center items-center border border-masyp/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-masyp before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
            >
              <span className="relative z-10">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 0C2.23858 0 0 2.23858 0 5V11.33C0 14.0914 2.23858 16.33 5 16.33H11.33C14.0914 16.33 16.33 14.0914 16.33 11.33V5C16.33 2.23858 14.0914 0 11.33 0H5ZM13.0645 4.08222C13.5155 4.08222 13.881 3.71666 13.881 3.26572C13.881 2.81478 13.5155 2.44922 13.0645 2.44922C12.6136 2.44922 12.248 2.81478 12.248 3.26572C12.248 3.71666 12.6136 4.08222 13.0645 4.08222ZM12.247 8.16551C12.247 10.4202 10.4192 12.248 8.16453 12.248C5.90983 12.248 4.08203 10.4202 4.08203 8.16551C4.08203 5.91081 5.90983 4.08301 8.16453 4.08301C10.4192 4.08301 12.247 5.91081 12.247 8.16551ZM8.16532 10.6138C9.51814 10.6138 10.6148 9.51717 10.6148 8.16434C10.6148 6.81152 9.51814 5.71484 8.16532 5.71484C6.8125 5.71484 5.71582 6.81152 5.71582 8.16434C5.71582 9.51717 6.8125 10.6138 8.16532 10.6138Z"
                    fill="currentColor"
                  />
                </svg>
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
