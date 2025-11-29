import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import commercialImg from '../../assets/commercial-industrial.webp';

export default function ActivitiesEnergyStorage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
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
        },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">

        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 py-10 reveal">
          <div className="text-center sm:text-left sm:flex-1 sm:pr-6">
            <span className="block text-gray-500 tracking-wider font-medium text-sm">ARDELEC</span>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900">
              Commercial &amp; Industrial Energy Storage
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a href="/activities/power-generation" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition" aria-label="Previous">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="/activities/special-power-supply" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition" aria-label="Next">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10">
          <article className="prose prose-neutral max-w-none mx-auto col-span-7 reveal" style={{ maxWidth: '640px' }}>

            <h3 className="font-semibold text-lg mt-0 reveal">Scope</h3>
            <p className="text-base leading-normal mt-3 reveal">
              Behind-the-meter and microgrid storage for facilities with high peak tariffs, transformer/feeder constraints, off-grid operation, or unstable grids. Supports PV integration and improves energy-use efficiency.
            </p>

            <h3 className="font-semibold text-lg mt-3 reveal">Solutions</h3>
            <p className="text-base leading-normal mt-3.5 reveal">
              Containerized or cabinet BESS (LFP) with PCS/inverters, MV transformer and switchgear, protection/metering, EMS, HVAC and fire-safety subsystems; AC- or DC-coupled PV configurations.
            </p>

            <h3 className="font-semibold text-lg mt-3 reveal">Use cases</h3>
            <p className="text-base leading-normal mt-5 reveal">
              Peak–valley arbitrage; demand-response participation; capacity relief for transformers/lines; PV self-consumption and export limiting; backup/islanding for continuity of supply; power-quality support.
            </p>

            <h3 className="font-semibold text-lg mt-3 reveal">Engineering &amp; Services</h3>
            <p className="text-base leading-normal mt-5 reveal">
              Load profiling and right-sizing, EMS strategy (SOC windows, set-points), protection and coordination, interconnection studies, SLD/layout, commissioning (FAT/SAT), remote monitoring, preventive maintenance, warranty and capacity-retention programs.
            </p>

            <h3 className="font-semibold text-lg mt-3 reveal">Quality &amp; compliance</h3>
            <p className="text-base leading-normal mt-5 reveal">
              Delivered to applicable IEC/IEEE/UL codes and site HSE requirements. (Standards tailored per project.)
            </p>

            <div className="mt-3 reveal">
              <img src={commercialImg} alt="Commercial & Industrial Energy Storage" className="w-full h-auto rounded-md shadow-sm object-cover max-h-96" />
            </div>
          </article>
        </div>

        <div className="hidden xl:block relative mt-6 reveal">
          <div className="w-20 h-20 bg-primary-600 rounded-sm" />
        </div>
      </div>
    </main>
  );
}
