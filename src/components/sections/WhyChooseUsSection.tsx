"use client";

import { Award, Zap, Globe, Clock, Users, CheckCircle } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Award,
      title: "5+ Years Experience",
      description: "Proven track record in water treatment industry",
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "Latest membrane and filtration technologies",
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Projects delivered across multiple countries",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
    },
    {
      icon: Users,
      title: "Certified Engineers",
      description: "Highly qualified and experienced team",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "ISO certified manufacturing processes",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for reliable and efficient water treatment
            solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
