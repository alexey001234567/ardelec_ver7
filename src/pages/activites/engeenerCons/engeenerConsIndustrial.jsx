import React, { useState } from "react";
import { Link } from "react-router-dom";
import consImg from '../../../assets/industrial-network2.jpg'
const LIST_ITEMS = [
  "Visualization and design of optimal network topologies",
  "Diesel/gas/converter-fed generation modelling in island mode and grid connected modes of network operation",
  "Selection and specification of key plant parameters",
  "Power quality assessment in systems with high densities of power electronic drives",
  "Standby power and auxiliary supply systems",
  "Load shedding strategy development for process assurance",
  "Cable analysis and selection",
  "Stability in island mode operation",
  "Evaluation of motor starting transients and strategies for the starting of motors and drives",
  "Experience applicable to any industrial segment including oil and gas, manufacturing, mining, metals, chemical, marine and data centers",
  "Determination of consumer lists and load structures",
  "Preparation and review of plant designs and network expansions",
  "Dimensioning of switchgear, distribution systems, cables and transformers based on load flow and short-circuit calculations in accordance with relevant standards",
  "Development and dimensioning of connections of third-party grids and in house power plants including the required standby power supply concepts",
  "Definition of the basic parameters of generators and control systems",
  "Design of highly reliable network areas",
  "Integration of large drives and strongly fluctuating consumption",
  "Assurance of the required grid quality and reliability of supply",
  "Arc flash hazard calculation based on the applicable standards",
  "Evaluation of motor starting and re-starting concepts as well as the application of automatic transfer switches in order to avoid long interruptions in a process, taking into account the dynamical behavior of generators",
];

const THUMBNAILS = [
 consImg
];

export default function EngineeringIndustrial() {
  const [active, setActive] = useState(0);

  return (
    <main className="bg-white text-gray-900">
      {/* Decorative right-aligned heading */}
<section className="relative overflow-hidden bg-gray-100">
  <div className="max-w-8xl h-56 mx-auto  flex justify-end items-end">
        <div className="bg-white m-1 w-1/2 h-1/3 flex items-center justify-start pl-28 [clip-path:polygon(13%_0,100%_0,100%_100%,0%_100%)]">
          <h2 className="font-bold text-2xl"> About us</h2>
        </div>

  </div>
</section>

      {/* Page header / nav */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center sm:text-left sm:flex-1">
            <span className="block text-gray-500 tracking-wider font-medium text-sm">ARDELEC</span>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 mt-2">
              Engineering &amp; Consulting
              <br />
              for Power Industrial Networks
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href=""
              title="Previous: Software Development"
              aria-label="Previous"
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="/activities/engineering-consulting/disribution"
              title="Next: Special Power Supply"
              aria-label="Next"
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Gallery + list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* gallery */}
          <div className="lg:col-span-5">
            <div className="rounded-md overflow-hidden bg-gray-50">
              {THUMBNAILS[active] ? (
                <img src={THUMBNAILS[active]} alt={`Industrial ${active + 1}`} className="w-full h-[440px] object-cover" />
              ) : (
                <div className="w-full h-[440px] flex items-center justify-center bg-gray-100 text-gray-400">
                  <span>Изображение отсутствует — вставь src</span>
                </div>
              )}
            </div>

            {/* thumbs */}
            <div className="mt-4 flex gap-3">
              {THUMBNAILS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-20 h-14 rounded overflow-hidden border ${
                    i === active ? "ring-2 ring-red-500" : "border-gray-200"
                  }`}
                  aria-label={`Выбрать миниатюру ${i + 1}`}
                >
                  {t ? (
                    <img src={t} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                      no image
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* long list */}
          <div className="lg:col-span-7">
            <ul className="space-y-3 list-none m-0 p-0">
              {LIST_ITEMS.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-red-600 shrink-0 mt-1" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-base text-gray-800">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* decorative square (large screens) */}
      <div className="hidden xl:block relative">
        <div className="w-20 h-20 bg-primary-600 rounded-sm ml-8" />
      </div>
    </main>
  );
}
