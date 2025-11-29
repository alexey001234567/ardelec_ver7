import React, { useEffect } from "react";
import UniversalMap from "../components/map";

import { HiLocationMarker, HiPhone, HiOutlineMail } from "react-icons/hi";

export default function ContactsSection() {
  useEffect(() => {

  }, []);

  return (
    <main>
      <section className="relative overflow-hidden bg-gray-100">
  <div className="max-w-8xl h-56 mx-auto  flex justify-end items-end">
        <div className="bg-white m-1 w-1/2 h-1/3 flex items-center justify-start pl-28 [clip-path:polygon(13%_0,100%_0,100%_100%,0%_100%)]">
          <h2 className="font-bold text-2xl"> About us</h2>
        </div>

  </div>
</section>
     <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="bg-linear-to-br from-white to-slate-50 rounded-2xl shadow-lg p-6 md:p-10 border border-slate-100">
        <h3 className="text-2xl font-extrabold text-slate-800 mb-6">
          Our Offices
        </h3>

        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* UK card */}
          <article className="relative w-full md:w-1/2 bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="shrink-0 bg-indigo-100 text-indigo-600 rounded-lg p-3 shadow-inner">
                <HiLocationMarker className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">UK Headquarters</h4>
                <p className="text-sm font-semibold text-slate-500">ARDELEC INDUSTRIAL SOLUTIONS LTD</p>
              </div>
            </div>

            <div className="mt-4 text-sm space-y-4 text-slate-600">
              <p className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-md bg-slate-100">
                  <HiLocationMarker className="w-5 h-5 text-slate-500" />
                </span>
                <span>128, City Road, London, EC1V 2NX, UK</span>
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                <a className="flex items-center gap-3 hover:text-indigo-600 transition" href="tel:+442036933963">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-slate-100">
                    <HiPhone className="w-4 h-4 text-slate-500" />
                  </span>
                  <span className="font-medium">+44 203 693 3963</span>
                </a>

                <a className="flex items-center gap-3 hover:text-indigo-600 transition" href="mailto:info@ardelecindustrial.com">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-slate-100">
                    <HiOutlineMail className="w-4 h-4 text-slate-500" />
                  </span>
                  <span className="font-medium">info@ardelecindustrial.com</span>
                </a>
              </div>
            </div>

            <div className="mt-5 rounded-lg overflow-hidden border border-slate-100 h-72">
              <UniversalMap center={[51.5273556324393, -0.08880888440251355]} zoom={14} popupText="Лондон, офис" className="h-full w-full" />
            </div>
          </article>

          {/* Separator with light fading effect */}
          <div className="hidden md:flex items-center px-3">
            <div
              aria-hidden
              className="w-px h-72"
              style={{
                background: "linear-gradient(to bottom, rgba(148,163,184,0.8) 0%, rgba(148,163,184,0.4) 50%, rgba(148,163,184,0.1) 80%, rgba(148,163,184,0) 100%)",
              }}
            />
          </div>

          {/* Turkiye card */}
          <article className="relative w-full md:w-1/2 bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="shrink-0 bg-emerald-100 text-emerald-600 rounded-lg p-3 shadow-inner">
                <HiLocationMarker className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">Operations in Turkiye</h4>
                <p className="text-sm font-semibold text-slate-500">Meta FX Global Software and Trade Ltd</p>
              </div>
            </div>

            <div className="mt-4 text-sm space-y-4 text-slate-600">
              <p className="flex items-start gap-3">
                <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-md bg-slate-100">
                  <HiLocationMarker className="w-5 h-5 text-slate-500" />
                </span>
                <span>
                  Esentepe, Keskin Kalem street,
                  <br /> Arya Plaza Nr: 17/2, Istanbul 34394
                </span>
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                <a className="flex items-center gap-3 hover:text-emerald-600 transition" href="tel:+905353795318">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-slate-100">
                    <HiPhone className="w-4 h-4 text-slate-500" />
                  </span>
                  <span className="font-medium">+90 535 379 53 18</span>
                </a>

                <a className="flex items-center gap-3 hover:text-emerald-600 transition" href="mailto:sales@ardelecindustrial.com">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-slate-100">
                    <HiOutlineMail className="w-4 h-4 text-slate-500" />
                  </span>
                  <span className="font-medium">sales@ardelecindustrial.com</span>
                </a>
              </div>
            </div>

            <div className="mt-5 rounded-lg overflow-hidden border border-slate-100 h-72">
              <UniversalMap center={[41.06853837766312, 29.00790302903611]} zoom={14} popupText="Meta FX Global Software and Trade Ltd" className="h-full w-full" />
            </div>
          </article>
        </div>

        {/* subtle decorative element */}
        <div className="hidden xl:block absolute left-10 top-24">
          <div className="w-14 h-14 bg-indigo-200 rounded-md opacity-70 rotate-6" />
        </div>
      </div>
    </section>
    </main>

  );
}


