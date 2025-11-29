import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, Draggable, SplitText);

import slide1 from '../assets/slide-1.jpg'
import slide2 from '../assets/slide-2.jpg'
import ServicesSection from "../components/serviceSection";

const slides = [
  { id: 1, bg: slide1, title1: "SPECIAL", title2: "POWER SUPPLY", caption: "Rectifler systems used for production" },
  { id: 2, bg: slide2, title1: "SOFTWARE", title2: "DEVELOPMENT", caption: "Software Development & Digital Control Systems" },
];

export default function HeroServices() {
  const [index, setIndex] = useState(1);
  const [isHover, setIsHover] = useState(false);
  const activeSlide = slides.find((s) => s.id === index) || slides[0];


  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const dotsRef = useRef([]);
  const buttonsRef = useRef(null);
  const textSectionRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialRef = useRef(null);
  const quoteRef = useRef(null);

  const prev = () => {
    const pos = slides.map((s) => s.id).indexOf(index);
    const nextIndex = pos === 0 ? slides[slides.length - 1].id : slides[pos - 1].id;
    setIndex(nextIndex);
  };
  const next = () => {
    const pos = slides.map((s) => s.id).indexOf(index);
    const nextIndex = pos === slides.length - 1 ? slides[0].id : slides[pos + 1].id;
    setIndex(nextIndex);
  };

  // ============ per-letter animation for quote on scroll (kept as you had it) ============
useEffect(() => {
  const el = quoteRef.current;
  if (!el) return;

  const text = el.textContent;
  el.innerHTML = "";

  // создаём буквы
  const letters = [...text].map((ch) => {
    const span = document.createElement("span");
    span.textContent = ch === " " ? "\u00A0" : ch; // нормальные пробелы
    span.style.opacity = 0;
    span.style.display = "inline-block";
    span.style.transform = "translateY(20px)";
    el.appendChild(span);
    return span;
  });

  // ВСЁ — ScrollTrigger работает тут
  gsap.fromTo(letters,{
    opacity:0,
    x:25,
    y:20
  },  {
    opacity: 1,
    x: 0,
    y:0,
    duration: 0.3,
    stagger: 0.02,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".quote-section-animate",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
}, []);



  // ============ background crossfade when index changes ============

  useEffect(() => {
    if (!bgRef.current) return;

    // плавно скрываем, меняем backgroundImage, показываем
    gsap.to(bgRef.current, {
      opacity: 0,
      duration: 0.35,
      onComplete: () => {
        if (bgRef.current) 
          bgRef.current.style.backgroundImage = `url(${activeSlide.bg})`;
          gsap.to(bgRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
          
        
      },
    });
  }, [index, activeSlide.bg]);


  // ============ per-letter appear for slide content on index change ============
  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    // Найдём заголовки/подпись внутри contentRef
    const targets = Array.from(contentEl.querySelectorAll("h2, p"));

    const splits = [];
    // подготовка: split + установка начального состояния
    targets.forEach((el) => {
      try {
        const s = new SplitText(el, { type: "chars" });
        gsap.set(s.chars, { opacity: 0, y: 30, x:20 });
        splits.push(s);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("SplitText error:", e);
      }
    });

    // таймлайн появления — буква за буквой, немного смещаем начало между элементами
    const tl = gsap.timeline();
    splits.forEach((s, i) => {
      tl.to(
        s.chars,
        {
          opacity: 1,
          y: 0,
          x:0,
          duration: 0.55,
          stagger: 0.03,
          ease: "power2.out",
        },
        i === 0 ? 0 : "-=0.75" // частичное перекрытие между строками
      );
    });

    return () => {
      // revert и убрать split'ы
      splits.forEach((s) => {
        try {
          s.revert();
        } catch (e) {}
      });
      tl.kill();
    };
  }, [index]);

  // ============ dots visual update (keeps your behavior) ============
  useEffect(() => {
    dotsRef.current.forEach((dot, i) => {
      if (!dot) return;
      const s = slides[i];
      if (!s) return;
      dot.classList.toggle("scale-110", s.id === index);
    });
  }, [index]);

  // ============ simple scroll-triggered fade for blocks (kept mostly as-is) ============
  useEffect(() => {


    const targets = [];
    if (textSectionRef.current) targets.push(textSectionRef.current);
    if (testimonialRef.current) targets.push(testimonialRef.current);

    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll('.service-card-block');
      cards.forEach(card => targets.push(card));
    }

    targets.forEach(el => {
      try {
        gsap.set(el, { opacity: 0 });
        gsap.to(el, {
          opacity: 1,
          duration: 0.9,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("Scroll fade error:", e);
      }
    });

    return () => {
     return () => ScrollTrigger.kill();

    };
  }, []);

  return (
    <main className="relative">
      {/* HERO / SLIDER */}
      <div
        ref={heroRef}
        className="relative h-[380px] md:h-[600px] lg:h-[700px] overflow-hidden"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* background image for active slide */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${activeSlide.bg})`, willChange: "transform, opacity" }}
          aria-hidden
        />

<div className="relative z-10 container mx-auto flex items-end h-[90%] pointer-events-none">
  <div className="w-full flex flex-col items-end">
  
    <div ref={contentRef} key={index} className="max-w-5xl pr-4 md:pr-8 flex flex-col pointer-events-auto">
      {activeSlide.title1 ? (
        <>
          <h2 className="text-transparent [-webkit-text-stroke:1px_white] font-extrabold text-4xl md:text-5xl lg:text-8xl leading-none whitespace-pre-line">
            {activeSlide.title1}
          </h2>

          <h2 className="text-white font-extrabold text-4xl md:text-5xl lg:text-8xl leading-none whitespace-pre-line">
            {activeSlide.title2}
          </h2>
        </>
      ) : (
        <h1 className="sr-only">Hero</h1>
      )}

      {activeSlide.caption && (
<p
  className="
    block
    text-white font-semibold
    text-base sm:text-lg md:text-xl lg:text-2xl
    leading-snug
    bg-[#212529]

    /* общий padding Y */
    py-4 sm:py-6 md:py-8

    /* раздельный padding X */
    pl-12 pr-6          /* mobile */
    sm:pl-16 sm:pr-10   /* tablet */
    md:pl-20 md:pr-14   /* desktop */

    [clip-path:polygon(13%_0,100%_0,100%_100%,0%_100%)]

    text-left
  "
>
  {activeSlide.caption}
</p>



      )}
    </div>
  </div>
</div>

        {isHover && (
          <div ref={buttonsRef} className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-6 pointer-events-none">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="pointer-events-auto group w-14 h-14 rounded-full backdrop-blur-md bg-black/40 hover:bg-black/70 transition-all flex items-center justify-center shadow-lg"
            >
              <span className="text-2xl text-white group-hover:-translate-x-1 transition-transform">←</span>
            </button>

            <button
              onClick={next}
              aria-label="Next slide"
              className="pointer-events-auto group w-14 h-14 rounded-full backdrop-blur-md bg-black/40 hover:bg-black/70 transition-all flex items-center justify-center shadow-lg"
            >
              <span className="text-2xl text-white group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        )}

        {/* dots */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 z-20 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => (dotsRef.current[i] = el)}
              onClick={() => setIndex(s.id)}
              aria-label={`Go to slide ${s.id}`}
              className={`w-3 h-3 rounded-full ${s.id === index ? "bg-white scale-110" : "bg-white/40"} transition-transform duration-200`}
            />
          ))}
        </div>
      </div>

      {/* text section */}
      <section ref={textSectionRef} className="bg-gray-50">
        <div className="container mx-auto py-16 pb-16 flex justify-center">
          <p className="text-gray-700 w-[70%] text-start">
            ARDELEC activities in the fields of Engineering, Design, Manufacturing and Project Management are
            directed towards creating the maximum value for our business partners. We adhere to innovative suppliers and
            partners who are eager to bring their technological expertise and creativity together with that of our own
            experts. We integrate this network into our customer projects right from the concept phase. In this way we
            create a crucial competitive advantage along the value chain. At Supply Chain Management, our aim is to add
            value for our customers. Our actions are consistently based on striving for innovation, productivity, quality
            and availability.
          </p>
        </div>
      </section>

      {/* services section */}
      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      {/* testimonial row */}
      <div className="container mx-auto py-20 max-w-4xl quote-section-animate">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <img src="index.html" alt="" className="mx-auto lg:mx-0 max-w-xs" />
          </div>
          <div>
            <blockquote ref={quoteRef} className="relative pl-12 text-xl italic font-semibold text-gray-900">
              If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.
            </blockquote>
            <p className="mt-4 text-right text-gray-600">- Nikola Tesla</p>
          </div>
        </div>
      </div>
    </main>
  );
}
