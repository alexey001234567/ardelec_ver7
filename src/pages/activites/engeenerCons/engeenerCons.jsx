import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import networkIMG from '../../../assets/distribution-network.jpg'
import networkIMG2 from '../../../assets/industrial-network2.jpg'

gsap.registerPlugin(ScrollTrigger);

export default function ActivitiesPage() {

  return (
    <div className="bg-white text-gray-900">
      {/* Hero decorative heading */}
      <section className="relative overflow-hidden bg-gray-100">
        <div className="max-w-8xl h-56 mx-auto flex justify-end items-end">
          <div className="bg-white m-1 w-1/2 h-1/3 flex items-center justify-start pl-28 [clip-path:polygon(13%_0,100%_0,100%_100%,0%_100%)]">
            <h2 className="font-bold text-2xl"> About us</h2>
          </div>
        </div>
      </section>

      {/* Page title + nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 pt-8">
          <div className="text-center sm:text-left sm:flex-1">
            <span className="block text-gray-500 tracking-wider font-medium text-sm">ARDELEC</span>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 mt-3">
              Engineering &amp; Consulting
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl leading-relaxed">
              Проекты и решения по проектированию сетей, промышленным системам и энергогенерации — от оценки до внедрения.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Nav arrows as before */}
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 gap-10 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
            {[
              { img: networkIMG, title: 'For Power Distribution Networks', link: '/activities/engineering-consulting/disribution', desc: 'Краткое описание услуги — что делаем, какие результаты и преимущества для клиента. Добавил отступы и более свободный line-height.' },
              { img: networkIMG2, title: 'For Industrial Networks', link: '/activities/engineering-consulting/industrial', desc: 'Описание для промышленной сети — задачи, кейсы и ожидания клиента. Выровнял отступы и увеличил читаемость.' }
            ].map((card, idx) => (
              <article key={idx}  className="group bg-white shadow-sm rounded-md overflow-hidden flex flex-col">
                <div className="relative overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-72 sm:h-80 md:h-96 object-cover" />
                  <Link to={card.link} className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition" aria-label={`Open ${card.title}`}>
                    <div className="opacity-0 group-hover:opacity-100 transition text-white">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <span className="block text-gray-500 tracking-wider font-medium text-sm">Engineering &amp; Consulting</span>
                  <h3 className="mt-3 text-xl font-bold leading-snug">
                    <Link to={card.link} className="text-gray-900 hover:text-red-600 transition">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed flex-1">
                    {card.desc}
                  </p>
                  <div className="mt-6">
                    <Link to={card.link} className="inline-block text-sm font-medium underline">
                      Подробнее
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}  