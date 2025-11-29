import React from "react";
import alt1 from "../assets/icons/alt1.png";
import alt2 from "../assets/icons/alt2.png";
import alt3 from "../assets/icons/alt3.png";
import alt4 from "../assets/icons/alt4.png";
import alt5 from "../assets/icons/alt5.png";

const services = [
  {
    id: 1,
    icon: alt5,
    title: "Power Generation",
    subtitle: "Engineering • Equipment & Spares • Service",
    block: [
      {
        name: "Scope",
        bullets: [
          "End-to-end support for thermal, gas-turbine, steam, hydro, renewables, and industrial captive plants.",
        ],
      },
      {
        name: "Quality & compliance",
        bullets: [
          "Conformance to customer requirements and IEC/IEEE; HSE and electrical-safety controls enforced. Test protocols, as-built documentation, and warranty provided..",
        ],
      },
    ],
    link: "power-generation-service.html",
  },

  {
    id: 2,
    icon: alt4,
    title: "Commercial & Industrial Energy Storage",
    subtitle: "Engineering • Systems",
    block: [
      {
        name: "Scope",
        bullets: [
          "Behind-the-meter and microgrid storage for facilities with high peak tariffs, transformer/feeder constraints, off-grid operation, or unstable grids. Supports PV integration and improves energy-use efficiency.",
        ],
      },
      {
        name: "Solutions",
        bullets: [
          "Containerized or cabinet BESS (LFP) with PCS/inverters, MV transformer and switchgear, protection/metering, EMS, HVAC and fire-safety subsystems; AC- or DC-coupled PV configurations",
        ],
      },
    ],

    link: "commercial-industrial-energy-service.html",
  },
  {
    id: 3,
    icon: alt1,
    title: "Special Power Supply",
    subtitle:
      "Rectifier systems used for production of hydrogen, metal extraction, refining and heat treatments are designed to operate in the most challenging operating conditions, maintaining highest efficiency.",
    block: [],
    link: "special-power-supply-services.html",
  },
  {
    id: 4,
    icon: alt2,
    title: "Software Development & Digital Control Systems",
    subtitle:
      "The digital control systems, entirely developed by ARDELEC, grants the highest level of reliability, safety and performance.",
    block: [],
    link: "software-development-services.html",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <article
              key={s.id}
              className="flex service-card-block gap-4 p-4 rounded-md hover:shadow-sm transition-shadow bg-white border border-gray-100"
            >
              <img
                src={s.icon}
                alt={`${s.title} icon`}
                width={50}
                height={50}
                loading="lazy"
                className="flex-none w-12 h-12 object-contain"
              />
              <div className="flex-1">
                {/* Контейнер с вертикальными отступами — создает иерархию по высоте */}
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {s.title}
                  </h3>

                  {s.subtitle && (
                    <h4 className="text-sm text-gray-700">
                      {s.subtitle}
                    </h4>
                  )}

                  {/* Блоки (Scope, Solutions...) — визуально отделены и имеют левую отступную "градацию" */}
                  {s.block && s.block.length > 0 && (
                    <div className="space-y-3 mt-1">
                      {s.block.map((b, i) => (
                        <div
                          key={i}
                          className="pl-3 border-gray-100 dark:border-gray-800"
                        >
                          {/* Название подблока — чуть крупнее и полужирное */}
                          <div className="text-sm font-semibold text-gray-800 mb-1">
                            {b.name}
                          </div>

                          {/* Список буллетов — дополнительный отступ слева, компактный межстрочный интервал */}
                          {b.bullets && b.bullets.length > 0 && (
                            <ul className="list-disc ml-6 space-y-1 text-sm text-gray-600 leading-relaxed">
                              {b.bullets.map((bullet, j) => (
                                <li key={j} className="">
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-2">
                    <a
                      href={s.link}
                      className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                      rel="noopener noreferrer"
                    >
                      View More
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <polygon points="1,26 44.586,26 38.293,32.293 39.707,33.707 48.414,25 39.707,16.293 38.293,17.707 44.586,24 1,24" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Большой блок Engineering & Consulting, занимает всю ширину */}
          <div className="md:col-span-2">
            <div className="flex gap-4 p-4 rounded-md bg-white border border-gray-100">
              <img
                src={alt3}
                alt="Engineering & Consulting icon"
                width={50}
                height={50}
                loading="lazy"
                className="flex-none w-12 h-12 object-contain"
              />
              <div className="flex-1 space-y-2">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Engineering & Consulting
                </h3>

                <h4 className="text-md text-gray-800">for Power Distribution Networks</h4>

                <ul className="list-disc ml-5 text-gray-600 space-y-1">
                  <li>Target network planning</li>
                  <li>Structured analysis of given network topologies; concepts for change</li>
                  <li>Comprehensive assessment of connection concepts (e.g. looping in and T-branches)</li>
                  <li>Voltage profile optimization</li>
                  <li>Reactive power exchange with other networks (distribution, transmission level)</li>
                </ul>

                <h4 className="text-md text-gray-800">for Industrial Networks</h4>
                <ul className="list-disc ml-5 text-gray-600 space-y-1">
                  <li>Visualization and design of optimal network topologies</li>
                  <li>Diesel/gas/converter-fed generation modelling in island and grid-connected modes</li>
                  <li>Selection and specification of key plant parameters</li>
                  <li>Power quality assessment with high density power-electronic drives</li>
                  <li>Standby power and auxiliary supply systems</li>
                  <li>Load shedding strategy development for process assurance</li>
                </ul>

                <a
                  href="engineering-consulting-services.html"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                  rel="noopener noreferrer"
                >
                  View More
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <polygon points="1,26 44.586,26 38.293,32.293 39.707,33.707 48.414,25 39.707,16.293 38.293,17.707 44.586,24 1,24" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
