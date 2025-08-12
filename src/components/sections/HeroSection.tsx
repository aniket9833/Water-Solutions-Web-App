"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Award, Globe } from "lucide-react";

export default function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Globe, value: "109+", label: "Projects Completed" },
    { icon: Droplets, value: "126+", label: "Happy Customers" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
      </div>

      {/* Animated Water Droplets */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full water-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            Advanced Wastewater Treatment &
            <span className="block text-teal-300">Environmental Solutions</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 fade-in">
            Leading provider of innovative water treatment technologies with
            proven expertise in industrial and municipal applications worldwide
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Floating Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`glass-effect rounded-lg p-6 transition-all duration-500 ${
                    currentStat === index
                      ? "scale-105 bg-white/20"
                      : "bg-white/10"
                  }`}
                >
                  <Icon className="h-8 w-8 mx-auto mb-3 text-teal-300" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
