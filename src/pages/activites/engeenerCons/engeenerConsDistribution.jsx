import React, { useState } from "react";
import { Link } from "react-router-dom";
import disrubutionIMG1 from '../../../assets/distribution-network.jpg'


const LIST_ITEMS = [
  "Target network planning",
  "Structured analysis of given network topologies; concepts for change",
  "Comprehensive assessment of connection concepts (e.g. looping in and T-branches)",
  "Voltage profile optimization",
  "Reactive power exchange with other networks (distribution, transmission level)",
  "Analyses of load profiles",
  "Technical and economic assessments",
  "Determination of the power loss on all network levels based on real or specific reference network",
  "Network restructuring and optimization",
  "Power Quality analyses (e.g. measurements and simulation)",
  "Harmonic analysis including multiple voltage levels, background distortion",
  "Design of compensation systems",
  "Reliability assessment of distribution networks",
  "Optimized integration of peripheral generating plants (objective: minimum network expansion)",
  "Connection request assessments and determination of potentially necessary network enhancements",
  "Identification of regional characteristics in distribution networks",
  "Specified and regional requirements regarding the electrical properties of generating plants",
  "Islanding and network restoration",
  "Assessment of neutral point treatment concepts",
  "Optimal future neutral point treatment",
  "Interaction of neutral point treatment and requirements regarding earthing systems",
  "Objective assessment of damage; analyses of the cause of damage",
  "Quality of supply as part of the security of supply",
  "Electromagnetic fields",
];

// thumbnails array - put your real image URLs here
const THUMBNAILS = [
  disrubutionIMG1, 
];

export default function EngineeringDistribution() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="bg-white text-gray-900">
      {/* Decorative right-aligned hero heading */}
    <section className="relative overflow-hidden bg-gray-100">
  <div className="max-w-8xl h-56 mx-auto  flex justify-end items-end">
        <div className="bg-white m-1 w-1/2 h-1/3 flex items-center justify-start pl-28 [clip-path:polygon(13%_0,100%_0,100%_100%,0%_100%)]">
          <h2 className="font-bold text-2xl"> About us</h2>
        </div>

  </div>
</section>

      {/* Title + nav */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center sm:text-left sm:flex-1">
            <span className="block text-gray-500 tracking-wider font-medium text-sm">ARDELEC</span>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 mt-2">
              Engineering &amp; Consulting
              <br />
              for Power Distribution Networks
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/activities/engineering-consulting/industrial"
              aria-label="Previous: Software Development"
              title="Software Development"
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="/activities/engineering-consulting/industrial"
              aria-label="Next: Special Power Supply"
              title="Special Power Supply"
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Gallery + content row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* gallery */}
          <div className="lg:col-span-5">
            <div className="rounded-md overflow-hidden bg-gray-50">
              {/* main image */}
              {THUMBNAILS[activeIndex] ? (
                <img
                  src={THUMBNAILS[activeIndex]}
                  alt={`Distribution network ${activeIndex + 1}`}
                  className="w-full h-80 "
                />
              ) : (
                <div className="w-full h-[420px] flex items-center justify-center bg-gray-100 text-gray-400">
                  <span>Фото отсутствует — вставь src</span>
                </div>
              ) }
            </div>

            {/* thumbnails */}
            <div className="mt-4 flex gap-3">
              {THUMBNAILS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-20 h-14 rounded overflow-hidden border ${
                    i === activeIndex ? "ring-2 ring-red-500" : "border-gray-200"
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

          {/* long bullet list */}
          <div className="lg:col-span-7">
            <ul className="space-y-3 list-none m-0 p-0">
              {LIST_ITEMS.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-red-600 shrink-0 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-base text-gray-800">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* decorative square for large screens */}
      <div className="hidden xl:block relative">
        <div className="w-20 h-20 bg-primary-600 rounded-sm ml-8" />
      </div>
    </main>
  );
}
