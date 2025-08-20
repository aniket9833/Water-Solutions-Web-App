"use client";

import { CheckCircle, Award, Users, Globe2 } from "lucide-react";

export default function AboutSection() {
  const features = [
    "Commitment to Quality & Reliability",
    "Advanced Membrane Technology",
    "Energy Efficient Solutions",
    "Comprehensive After-Sales Support",
    "24/7 Technical Assistance",
    "Customized Treatment Solutions",
  ];

  const achievements = [
    { icon: Award, title: "Industry Leader", desc: "5+ years of excellence" },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Certified engineers & technicians",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      desc: "Projects across multiple countries",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading manufacturer and supplier of water treatment
            equipment, committed to providing sustainable and cost-effective
            solutions for all your water needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Our commitment to delivering practical and cost-effective solutions has established our strong reputation 
for technical excellence. We pride ourselves on achieving the highest quality outcomes while leveraging a 
diverse range of skills to address every opportunity. This dedication ensures the successful and timely 
completion of all projects, allowing us to meet and exceed our client&apos;s expectations consistently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600">{achievement.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
