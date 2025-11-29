import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import softwareIMG from '../../assets/software-img.jpg';
import softwareIMG2 from '../../assets/software-img2.jpg';

export default function ActivitiesSoftwareDevelopment() {
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

      <div className="max-w-6xl mt-10 mx-auto px-4 pb-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 reveal">
          <div className="text-center sm:text-left sm:flex-1">
            <span className="block text-gray-500 tracking-wider font-medium text-sm">ARDELEC</span>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 mt-2">Software Development</h2>
          </div>

             <div className="flex items-center gap-4">
            <a href="/activities/special-power-supply" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="/activities/engineering-consulting" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-8 reveal">
          <div className="lg:col-span-5 reveal">
            <div className="w-full rounded-md overflow-hidden bg-gray-50">
              <img src={softwareIMG} alt="Software Development — main" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <p className="font-semibold text-lg mb-3">
              The digital control systems, entirely developed by ARDELEC, grant the highest level of reliability, safety and performance.
            </p>
            <p className="font-light text-base mb-4">
              ARDELEC combines deep domain expertise with connectivity and software innovation to empower real-time, data-driven decisions for safer, smarter operations that maximize resource efficiency.
            </p>
            <div className="mt-4 reveal">
              <img src={softwareIMG2} alt="Software Development — secondary" className="w-full h-auto rounded-md shadow-sm object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block relative reveal">
        <div className="w-20 h-20 bg-primary-600 rounded-sm" />
      </div>
    </main>
  );
}