import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../assets/ard1.jpg';
import img2 from '../../assets/ard2.jpg';
import img3 from '../../assets/ard3.jpg';
import certificate1 from '../../assets/certificate1.png';
import certificate2 from '../../assets/certificate2.png';

export default function ActivitiesSpecialPowerSupply() {
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
    <main ref={containerRef} className="bg-white text-gray-500">
      {/* Hero heading */}
      <section className="relative overflow-hidden bg-gray-100">
        <div className="max-w-8xl h-56 mx-auto flex justify-end items-end">
          <div className="bg-white m-1 w-1/2 h-1/3 flex items-center justify-start pl-28 [clip-path:polygon(13%_0,100%_0,100%_100%,0%_100%)]">
            <h2 className="reveal text-2xl font-bold">Activities</h2>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16 mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 reveal">
          <div className="text-center sm:text-left sm:flex-1">
            <span className="block text-gray-500 tracking-wider font-medium text-sm">ARDELEC</span>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900">Special Power Supply</h2>
          </div>
          <div className="flex items-center gap-4">
            <a href="/activities/energy-storage" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="/activities/software-development" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Block 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-8 reveal">
          <div className="lg:col-span-5 reveal">
            <div className="w-full rounded-md overflow-hidden bg-gray-50">
              <img src={img1} alt="Special Power Supply — image 1" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="font-semibold text-lg mb-3">
              Rectifier systems used for production of hydrogen, metal extraction, refining and heat treatments are designed to operate in the most challenging operating conditions, maintaining highest efficiency. High-current busduct systems with high current switching devices.
            </p>
          </div>
        </section>

        {/* Block 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-8 reveal">
          <div className="lg:col-span-5 reveal">
            <div className="w-full rounded-md overflow-hidden bg-gray-50">
              <img src={img2} alt="Special Power Supply — image 2" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="font-semibold text-lg mb-3">
              Innovative power quality equipment offers the right load compensating performance for large and medium size industrial plants: excellent voltage stabilization and power factor correction provide the best preconditions for stable production, securing power quality parameters for electrical power supply.
            </p>
          </div>
        </section>

        {/* Block 3 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-8 reveal">
          <div className="lg:col-span-5 reveal">
            <div className="w-full rounded-md overflow-hidden bg-gray-50">
              <img src={img3} alt="Special Power Supply — image 3" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <p className="font-semibold text-lg mb-3">
              Flexible electronic fiber optical current transformers. The product line includes fiber optical instrument transformers for current measurement and electronic voltage transformers that enable solutions for digital smart grids and power demanding industries.
            </p>
          </div>
        </section>

        {/* Certificates */}
        <section className="text-center mb-12 reveal">
          <h3 className="text-2xl font-bold mb-4 reveal">Certificates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a href="" target="_blank" rel="noreferrer" className="block bg-white rounded-lg shadow-md overflow-hidden p-4 hover:shadow-lg transition reveal">
              <img src={certificate1} alt="Certificate 1" className="w-full h-auto object-contain max-h-96 mx-auto" />
            </a>
            <a href="" target="_blank" rel="noreferrer" className="block bg-white rounded-lg shadow-md overflow-hidden p-4 hover:shadow-lg transition reveal">
              <img src={certificate2} alt="Certificate 2" className="w-full h-auto object-contain max-h-96 mx-auto" />
            </a>
          </div>
        </section>

        {/* Decorative square */}
        <div className="hidden xl:block relative reveal">
          <div className="w-20 h-20 bg-primary-600 rounded-sm" />
        </div>
      </div>
    </main>
  );
}