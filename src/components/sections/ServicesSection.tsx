"use client";

import {
  Settings,
  Wrench,
  Truck,
  HeadphonesIcon,
  FileText,
  Shield,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Settings,
      title: "Design & Engineering",
      description:
        "Custom design solutions tailored to your specific requirements and site conditions",
    },
    {
      icon: Shield,
      title: "Manufacturing",
      description:
        "State-of-the-art manufacturing facilities with quality control at every step",
    },
    {
      icon: Truck,
      title: "Installation & Commissioning",
      description:
        "Professional installation and commissioning services by certified technicians",
    },
    {
      icon: Wrench,
      title: "Operation & Maintenance",
      description:
        "Comprehensive O&M services to ensure optimal performance and longevity",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and emergency response services",
    },
    {
      icon: FileText,
      title: "Consulting Services",
      description:
        "Expert consultation for water treatment planning and regulatory compliance",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive water treatment services from design to maintenance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
