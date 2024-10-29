import React from "react";

const Vps = () => {
  return (
    <section id="vps" className="py-[70px] md:py-[130px]">
      <div className="mx-auto theme-container">
        <h1 className="px-5 bg-masyp/10 border border-masyp/20 text-masyp font-medium rounded-[30px] w-fit mx-auto">
          Servicios
        </h1>
        <h2 className="sm:text-48 text-24 font-semibold text-main-black mb-[32px] mt-[18px] w-full max-w-[795px] text-center mx-auto">
          Servidores VPS
        </h2>
        <p className="text-center mx-auto text-paragraph mb-[32px]">
          Permite a las empresas y usuarios alojar aplicaiones, servicios con
          flexibilidad y un menor costo, aprovechando recursos compartidos de
          manera eficiente.
        </p>
        <div className="grid w-full max-w-[1070px] mx-auto grid-cols-6 lg:grid-cols-10">
          <div className="col-span-6 lg:col-span-4 lg:pr-[72px] flex flex-col justify-center gap-4">
            <div className="bg-masyp/5 py-[13px] px-8 border-l-[3px] border-masyp h-[50px] hover:h-[165px] transition-all duration-300 overflow-hidden">
              <h1 className="font-semibold text-18 text-main-black">
                Firewall Integrado
              </h1>
              <p className="text-paragraph mt-0.5 ">
                Un firewall robusto permite filtrar y controlar el tráfico
                entrante y saliente, bloqueando accesos no autorizados y ataques
                maliciosos.
              </p>
            </div>
            <div className="bg-masyp/5 py-[13px] px-8 border-l-[3px] border-masyp h-[50px] hover:h-[165px] transition-all duration-300 overflow-hidden">
              <h1 className="font-semibold text-18 text-main-black">
                Protección contra DDoS
              </h1>
              <p className="text-paragraph mt-0.5 ">
                Detección y mitigación de ataques DDoS (Distribuidos de
                Denegación de Servicio) en tiempo real.
              </p>
            </div>
            <div className="bg-masyp/5 py-[13px] px-8 border-l-[3px] border-masyp h-[50px] hover:h-[165px] transition-all duration-300 overflow-hidden">
              <h1 className="font-semibold text-18 text-main-black">
                Copias de Seguridad
              </h1>
              <p className="text-paragraph mt-0.5 ">
                Realizar copias de seguridad periódicas y automáticas de los
                datos del cliente para poder restaurarlos en caso de fallos o
                incidentes.
              </p>
            </div>
            <div className="bg-masyp/5 py-[13px] px-8 border-l-[3px] border-masyp h-[50px] hover:h-[165px] transition-all duration-300 overflow-hidden">
              <h1 className="font-semibold text-18 text-main-black">
                Monitoreo en Tiempo Real
              </h1>
              <p className="text-paragraph mt-0.5 ">
                Sistema de monitoreo de recursos (CPU, RAM, almacenamiento,
                etc.) y alertas en caso de anomalías.
              </p>
            </div>
            <div className="bg-masyp/5 py-[13px] px-8 border-l-[3px] border-masyp h-[50px] hover:h-[165px] transition-all duration-300 overflow-hidden">
              <h1 className="font-semibold text-18 text-main-black">Soporte</h1>
              <p className="text-paragraph mt-0.5 ">
                Soporte técnico continuo para resolver problemas de seguridad o
                configuración.
              </p>
            </div>
          </div>
          <div className="col-span-6 mt-5 lg:mt-0">
            <img src="/assets/images/vps.jpg" alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vps;
