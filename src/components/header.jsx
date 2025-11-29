import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);

  // desktop activities dropdown state + timers
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const timersRef = useRef({ open: null, close: null });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setMobileActivitiesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      // cleanup timers on unmount
      clearTimeout(timersRef.current.open);
      clearTimeout(timersRef.current.close);
    };
  }, []);

  const handleActivitiesEnter = () => {
    // отменяем таймер закрытия (если есть) и ставим небольшой таймер открытия
    clearTimeout(timersRef.current.close);
    clearTimeout(timersRef.current.open);
    timersRef.current.open = setTimeout(() => setActivitiesOpen(true), 80); // короткая задержка открытия
  };

  const handleActivitiesLeave = () => {
    // отменяем таймер открытия (если есть) и ставим таймер закрытия
    clearTimeout(timersRef.current.open);
    clearTimeout(timersRef.current.close);
    timersRef.current.close = setTimeout(() => setActivitiesOpen(false), 200); // чуть большая задержка закрытия
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="">
              <img
                src="https://www.ardelecindustrial.com/img/yuzonbir/construction/logo-dark.svg"
                alt="ARDELEC"
                className="h-10"
              />
            </Link>

            {/* Mobile Button */}
            <button
              className="md:hidden p-2 text-red-600"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                className="whitespace-nowrap shrink-0 text-gray-700 hover:text-red-600 transition-colors"
                to="/"
              >
                Home
              </Link>

              <Link
                className="whitespace-nowrap shrink-0 text-gray-700 hover:text-red-600 transition-colors"
                to="/company"
              >
                Company
              </Link>

              {/* Activities (desktop) - controlled hover with delay */}
              <div
                className="relative shrink-0 whitespace-nowrap"
                onMouseEnter={handleActivitiesEnter}
                onMouseLeave={handleActivitiesLeave}
              >
                <button
                  className="text-gray-700 hover:text-red-600 transition-colors nav-link cursor-pointer"
                  aria-haspopup="true"
                  aria-expanded={activitiesOpen}
                  onClick={() => setActivitiesOpen(prev => !prev)} // toggle on click for keyboard/touch support
                >
                  Activities
                </button>

                {/* dropdown */}
                <div
                  className={
                    "absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md transition-all transform z-50 " +
                    (activitiesOpen
                      ? "opacity-100 visible translate-y-0 pointer-events-auto"
                      : "opacity-0 invisible translate-y-2 pointer-events-none")
                  }
                  // тоже слушаем наведение, чтобы меню не закрылось при переходе в него
                  onMouseEnter={() => {
                    clearTimeout(timersRef.current.close);
                    clearTimeout(timersRef.current.open);
                    timersRef.current.open = setTimeout(() => setActivitiesOpen(true), 0);
                  }}
                  onMouseLeave={handleActivitiesLeave}
                >
                  <Link className="block px-4 py-2 hover:bg-gray-50 whitespace-nowrap text-gray-700 hover:text-red-600 transition-colors" to="/activities/power-generation">Power Generation</Link>
                  <Link className="block px-4 py-2 hover:bg-gray-50 whitespace-nowrap text-gray-700 hover:text-red-600 transition-colors" to="/activities/energy-storage">Energy Storage</Link>
                  <Link className="block px-4 py-2 hover:bg-gray-50 whitespace-nowrap text-gray-700 hover:text-red-600 transition-colors" to="/activities/special-power-supply">Special Power Supply</Link>
                  <Link className="block px-4 py-2 hover:bg-gray-50 whitespace-nowrap text-gray-700 hover:text-red-600 transition-colors" to="/activities/software-development">Software Development</Link>
                  <Link className="block px-4 py-2 hover:bg-gray-50 whitespace-nowrap text-gray-700 hover:text-red-600 transition-colors" to="/activities/engineering-consulting">Engineering &amp; Consulting</Link>
                </div>
              </div>

              <Link
                className="whitespace-nowrap shrink-0 text-gray-700 hover:text-red-600 transition-colors"
                to="/contact"
              >
                Contact
              </Link>

              <div className="h-9 w-px from-gray-400 to-transparent mx-3"></div>

              <div className="flex items-center gap-5 shrink-0">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <FaFacebookF size={16} />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <FaTwitter size={16} />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* ✅ MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              <Link className="block py-2" to="/">Home</Link>
              <Link className="block py-2" to="/company">Company</Link>

              <button
                className="flex justify-between w-full py-2"
                onClick={() => setMobileActivitiesOpen(!mobileActivitiesOpen)}
              >
                Activities
                <span>{mobileActivitiesOpen ? "▲" : "▼"}</span>
              </button>

              {mobileActivitiesOpen && (
                <div className="pl-4 space-y-2 text-sm">
                  <Link className="block" to="/activities/power-generation">Power Generation</Link>
                  <Link className="block" to="/activities/energy-storage">Energy Storage</Link>
                  <Link className="block" to="/activities/special-power-supply">Special Power Supply</Link>
                  <Link className="block" to="/activities/software-development">Software Development</Link>
                  <Link className="block" to="/activities/engineering-consulting">Engineering &amp; Consulting</Link>
                </div>
              )}

              <Link className="block py-2" to="/contact">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
