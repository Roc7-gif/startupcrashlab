import React, { useEffect, useRef, useState } from "react";

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef} className="count-animate">
      {count}{suffix}
    </span>
  );
};

export default function Impact() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-16">
            Notre <span className="text-orange-500">impact</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="group">
            <div className="text-center p-4 md:p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-500/20 hover:border-orange-500 transition-all hover:transform hover:scale-105 hover:shadow-xl">
              <p className="text-3xl md:text-5xl font-black text-orange-500 mb-2">
                <Counter end={500} suffix="+" />
              </p>
              <p className="text-sm md:text-base text-gray-600 font-semibold">idées évaluées</p>
            </div>
          </div>
          <div className="group">
            <div className="text-center p-4 md:p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-500/20 hover:border-orange-500 transition-all hover:transform hover:scale-105 hover:shadow-xl">
              <p className="text-3xl md:text-5xl font-black text-orange-500 mb-2">
                <Counter end={200} suffix="+" />
              </p>
              <p className="text-sm md:text-base text-gray-600 font-semibold">founders clarifiés</p>
            </div>
          </div>
          <div className="group">
            <div className="text-center p-4 md:p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-500/20 hover:border-orange-500 transition-all hover:transform hover:scale-105 hover:shadow-xl">
              <p className="text-3xl md:text-5xl font-black text-orange-500 mb-2">
                <Counter end={100} suffix="+" />
              </p>
              <p className="text-sm md:text-base text-gray-600 font-semibold">MVP construits</p>
            </div>
          </div>
          <div className="group">
            <div className="text-center p-4 md:p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-500/20 hover:border-orange-500 transition-all hover:transform hover:scale-105 hover:shadow-xl">
              <p className="text-3xl md:text-5xl font-black text-orange-500 mb-2">
                <Counter end={50} suffix="+" />
              </p>
              <p className="text-sm md:text-base text-gray-600 font-semibold">founders transformés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}