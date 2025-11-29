import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import companyImg from '../assets/company-image.jpg';

const slides = [
  `The company was built by a team of highly experienced professionals in the field of electrical engineering and project management with vast experience in execution of projects in domestic and international markets.
Major drive and motivation of ours is creation of energy efficient solutions for satisfaction of our customers, while taking care of business partners and wealth of our own.`,
  // if you want different slides, replace/add strings here
];

export default function CompanyAbout() {
  const [slideIndex, setSlideIndex] = useState(0);
  const containerRef = useRef(null);
  const slideTextRef = useRef(null);


  useEffect(() => {
    // guard for SSR
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Use GSAP context so animations are cleaned up when component unmounts.
    const ctx = gsap.context(() => {
      // simple reveal for elements with class .reveal
      const reveals = gsap.utils.toArray(".reveal");
      gsap.from(reveals, {
        y: 24,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      });

      // sidebar nav items slide in from left
      const navItems = gsap.utils.toArray(".nav-item");
      gsap.from(navItems, {
        x: -18,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // animate carousel text on slide change (simple fade + slight move)
  useEffect(() => {
    if (!slideTextRef.current) return;
    gsap.fromTo(
      slideTextRef.current,
      { y: 8, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.55, ease: "power2.out" }
    );
  }, [slideIndex]);

  return (
    <main ref={containerRef} className="text-gray-900">
      {/* Decorative hero heading */}
      <section className="relative overflow-hidden bg-gray-100">
        <div className="max-w-8xl h-56 mx-auto  flex justify-end items-end">
          <div className="bg-white m-1 w-1/2 h-1/3 flex items-center justify-start pl-28 [clip-path:polygon(13%_0,100%_0,100%_100%,0%_100%)]">
            <h2 className="font-bold text-2xl reveal"> About us</h2>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 pb-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main column - order 2 on large screens to mimic original ordering */}
          <div className="lg:col-span-8 lg:order-2">
            <section id="who-we-are" className="mb-8">
              <img
                src={companyImg}
                alt="Engineer Man"
                className="w-full h-auto rounded-md mb-6 object-cover reveal"
              />

              <p className="font-medium text-gray-500 text-lg leading-relaxed mb-4 reveal">
                ARDELEC creates maximum value for partners through engineering,
                design, manufacturing and project management. We collaborate
                with innovative suppliers who bring technology and creativity to
                our projects, integrating this network from the concept phase to
                secure a competitive advantage across the value chain. Our
                supply chain management is organised for value. We focus on
                innovation, productivity, quality and availability, while
                maintaining competitive and transparent sourcing with our
                suppliers.
              </p>

              <p className="font-light text-base leading-relaxed mb-8 reveal">
                ARDELEC Industrial is headquartered in the UK, with operations
                and manufacturing in Türkiye. In cooperation with General
                Electric, ABB and other leading international partners, we bring
                proven technologies and global best practices to every project.
                Our Turkish hub delivers engineering, manufacturing and project
                management, ensuring competitive lead times into Europe, the
                Middle East and neighbouring regions. We maintain regional
                offices across key international markets to provide project
                management, contract administration and after-sales support,
                serving as the local interface throughout execution. Corporate
                governance and compliance operate under an integrated QHSE and
                QA/QC framework, enabling disciplined project execution.
                Engineering leadership and a dedicated Project Management Office
                ensure engineering excellence, schedule adherence, cost control
                and reliable performance.
              </p>
            </section>

            <section id="history" className="mb-12 reveal">
              <h2 className="text-3xl font-bold mb-6">History</h2>

              <div className="bg-gray-100 p-6 rounded-md">
                {/* Simple manual carousel */}
                <div className="relative">
                  <div className="min-h-[120px] flex items-center justify-center">
                    <p ref={slideTextRef} className="text-base leading-relaxed text-gray-800 text-center px-6">
                      {slides[slideIndex]}
                    </p>
                  </div>

                  {/* Simple controls (kept minimal) */}
            
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - order 1 on large screens */}
          <aside className="lg:col-span-4 lg:order-1">
            <div className="sticky top-28">
              <nav aria-label="Company sections" className="mb-8">
                <ul className="space-y-1 text-base font-medium">
                  <li className="border-t border-b border-gray-200 py-2">
                    <a
                      href="#who-we-are"
                      className="flex items-center gap-3 text-gray-800 hover:text-primary nav-item"
                    >
                      {/* chevron svg */}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      About Us
                    </a>
                  </li>

                  <li className="border-b border-gray-200 py-2">
                    <a
                      href="#history"
                      className="flex items-center gap-3 text-gray-800 hover:text-primary nav-item"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      History
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
