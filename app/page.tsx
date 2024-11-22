"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ComingSoonPage() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 5);
    target.setHours(23, 59, 59, 999);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen bg-gradient-to-br from-[#1e3a8a]/70 via-white/90 to-[#fbbf24]/70 relative">
      <div className="absolute top-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-[#1e3a8a] to-[#fbbf24]" />
      <div className="absolute bottom-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-[#fbbf24] to-[#1e3a8a]" />

      <div className="h-full flex items-center justify-center p-3 md:p-4">
        <div className="w-full max-w-[90%] md:max-w-5xl bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg">
          <Image
            src="/logo.png"
            alt="Ranway Energies Limited"
            width={120}
            height={60}
            className="mx-auto mb-4 md:mb-6 md:w-[200px] md:h-[100px]"
            priority
          />

          <h1 className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 text-center text-[#1e3a8a]">
            Coming Soon
          </h1>
          <p className="text-lg md:text-2xl text-[#fbbf24] font-semibold text-center mb-6 md:mb-8">
            Powering Progress, Delivering Excellence
          </p>

          <div className="flex justify-center gap-2 md:gap-4 mb-6 md:mb-8">
            {[
              { label: "Days", value: String(days).padStart(2, '0') },
              { label: "Hours", value: String(hours).padStart(2, '0') },
              { label: "Minutes", value: String(minutes).padStart(2, '0') },
              { label: "Seconds", value: String(seconds).padStart(2, '0') },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md 
                          border border-white/80 md:border-2 rounded-lg md:rounded-xl 
                          p-2 md:p-4 text-center shadow-md md:shadow-lg 
                          transform transition-all duration-300 hover:scale-105 
                          min-w-[64px] md:min-w-[100px]"
              >
                <span className="block text-2xl md:text-4xl font-bold text-[#1e3a8a] font-mono">
                  {value}
                </span>
                <p className="text-[10px] md:text-sm text-[#1e3a8a]/80 font-semibold uppercase tracking-wider mt-0.5 md:mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm md:text-base text-center text-gray-700 max-w-xs md:max-w-2xl mx-auto mb-6 md:mb-8 px-2">
            Ranway Energies Limited is revolutionizing the energy sector with
            innovative solutions. Our new website is under construction.
          </p>

          <div className="flex flex-col gap-2 md:flex-row md:gap-3 justify-center items-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-[250px] md:max-w-xs bg-white/50 backdrop-blur-md 
                       border-white/60 focus:border-[#1e3a8a] focus:ring-[#1e3a8a] 
                       text-sm md:text-base h-9 md:h-10"
            />
            <Button className="w-full max-w-[250px] md:w-auto bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 
                           text-white font-semibold px-4 md:px-6 py-1.5 md:py-2 rounded-full 
                           text-sm md:text-base h-9 md:h-10">
              Notify Me
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
