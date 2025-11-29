import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import powerImg from '../../assets/power-generation.webp';

export default function ActivitiesPowerGeneration() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray('.reveal');

      gsap.from(reveals, {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-white text-gray-900">
      {/* Hero heading */}
      <section className="relative overflow-hidden bg-gray-100">
        <div className="max-w-8xl h-56 mx-auto flex justify-end items-end">
          <div className="bg-white m-1 w-1/2 h-1/3 flex items-center justify-start pl-28 [clip-path:polygon(13%_0,100%_0,100%_100%,0%_100%)]">
            <h2 className="reveal text-2xl font-bold">Activities</h2>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 pt-8 reveal">
          <div className="text-center sm:text-left sm:flex-1 sm:pr-8 lg:pr-14">
            <span className="block text-gray-500 tracking-wider font-medium text-sm">ARDELEC</span>
            <h2 className="font-bold text-4xl md:text-5xl leading-tight text-gray-900">Power Generation</h2>
          </div>

          <div className="flex items-center gap-4">
            <a href="/activities/energy-storage" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition" aria-label="Previous">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>

            <a href="/activities/energy-storage" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition" aria-label="Next">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700">

              <div className="reveal">
                <p className="font-semibold text-lg text-gray-900">Scope</p>
                <p className="mt-2 text-base leading-relaxed">End-to-end support for thermal, gas-turbine, steam, hydro, renewables, and industrial captive plants.</p>
              </div>

              <div className="reveal">
                <p className="font-semibold text-lg text-gray-900">Engineering</p>
                <ul className="list-disc ml-6 mt-3 space-y-3 text-base leading-relaxed">
                  <li><strong>Studies:</strong> load flow, short-circuit, protection coordination, arc flash; harmonics/EMC; transient stability.</li>
                  <li><strong>Grid interface & compliance:</strong> interconnection, power quality, VAR/voltage control, LVRT/FRT, islanding/black start.</li>
                  <li><strong>Primary/secondary & digital substation:</strong> layouts, sizing, grounding; SCADA/DCS, metering, telecoms, cybersecurity.</li>
                  <li><strong>Docs & Owner’s Engineer:</strong> FAT/SAT, commissioning, QA/QC, RAM/LCC, HAZOP, compliance with IEC/IEEE/GOST.</li>
                </ul>
              </div>

              <div className="reveal">
                <p className="font-semibold text-lg text-gray-900 mt-2">Supply</p>
                <p className="mt-2 text-base leading-relaxed">Power evacuation system equipment from generator terminals through grid interconnection.</p>
              </div>

              <div className="reveal">
                <p className="font-semibold text-lg text-gray-900 mt-2">Service</p>
                <p className="mt-2 text-base leading-relaxed">Diagnostics, inspection, testing, repairs, commissioning, upgrades, retrofits, operator training.</p>
              </div>

              <div className="reveal">
                <p className="font-semibold text-lg text-gray-900 mt-2">Quality & compliance</p>
                <p className="mt-2 text-base leading-relaxed">Conformance to IEC/IEEE, enforced safety controls, documentation, warranty.</p>
              </div>

              <div className="mt-4 reveal">
                <img src={powerImg} alt="Power Generation" className="w-full rounded-md shadow-sm object-cover h-64 md:h-96 lg:h-[520px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden xl:block relative mt-8 reveal">
          <div className="w-20 h-20 bg-primary-600 rounded-sm" />
        </div>
      </div>
    </main>
  );
}
