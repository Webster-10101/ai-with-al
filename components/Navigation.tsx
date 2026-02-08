"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "bg-cream/80 backdrop-blur-xl shadow-[0_1px_0_rgba(42,37,32,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-xl md:text-2xl tracking-tight text-charcoal font-medium">
          AI <span className="text-sage italic">with</span> Al
        </a>

        <a
          href="#book"
          className={`btn text-sm px-5 py-2.5 md:px-6 md:py-3 text-white transition-all duration-300 ${
            scrolled
              ? "bg-sage shadow-[0_2px_8px_rgba(122,154,126,0.2)]"
              : "bg-sage/90 shadow-none"
          }`}
        >
          Book a Discovery Call
        </a>
      </div>
    </nav>
  );
}
