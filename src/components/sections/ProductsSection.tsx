"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      title: "Sewage Treatment Plants (STP)",
      description:
        "Advanced biological treatment systems for residential and commercial wastewater",
      image:
        "https://www.rciaquatech.com/wp-content/uploads/2025/03/Sewage-Treatment-Plants.jpg",
      features: ["Compact Design", "Low Maintenance", "Energy Efficient"],
    },
    {
      title: "Effluent Treatment Plants (ETP)",
      description:
        "Industrial wastewater treatment for chemical, pharmaceutical, and textile industries",
      image:
        "https://www.rciaquatech.com/wp-content/uploads/2025/03/Effluent-Treatment-Plant-ETP.jpg",
      features: [
        "Zero Liquid Discharge",
        "Chemical Recovery",
        "Automated Control",
      ],
    },
    {
      title: "Water Treatment Plants (WTP)",
      description:
        "Municipal and industrial water purification systems for safe drinking water",
      image:
        "https://www.rciaquatech.com/wp-content/uploads/2025/03/Water-Treatment-Plants-WTP.jpg",
      features: [
        "Multi-Stage Filtration",
        "UV Disinfection",
        "Quality Monitoring",
      ],
    },
    {
      title: "Reverse Osmosis Systems",
      description:
        "High-efficiency membrane technology for water desalination and purification",
      image:
        "https://www.rciaquatech.com/wp-content/uploads/2025/03/Reverse-Osmosis-Plants-Industrial-RO-Plants.jpg",
      features: [
        "High Recovery Rate",
        "Low Energy Consumption",
        "Modular Design",
      ],
    },
    {
      title: "Ultrafiltration Plants",
      description:
        "Advanced membrane filtration for removing suspended solids and bacteria",
      image:
        "https://www.rciaquatech.com/wp-content/uploads/2025/03/Ultrafiltration-Plants-Systems-UF.jpg",
      features: ["High Flux Rate", "Chemical Resistant", "Easy Cleaning","Low Maintenance"],
    },
    {
      title: "Demineralization Plants",
      description:
        "Ion exchange systems for producing high-purity water for industrial use",
      image:
        "https://www.rciaquatech.com/wp-content/uploads/2025/03/Demineralization-DM-Water-Treatment-Plant.jpg",
      features: [
        "High Purity Output",
        "Regeneration System",
        "Continuous Operation",
      ],
    },
    {
      title: "Multi-Effect Evaporation (MEE) Plant",
      description:
        "Energy-efficient evaporation systems for concentration and volume reduction of industrial effluents",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpEHysgrwLwm2k3gSfs9VXXLEF2vmL23ZmRQ&s",
      features: [
        "High Thermal Efficiency",
        "Corrosion Resistant",
        "Low Operating Cost",
        "Minimal Scaling"
      ],
    },
    {
      title: "Zero Liquid Discharge (ZLD) Systems",
      description:
        "Complete solution for wastewater treatment with zero liquid discharge and maximum water recovery",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9WUhI7_3LEi8cBGn7qFYHjzEXbEnHkps5A&s",
      features: [
        "100% Water Recovery",
        "Minimal Sludge Generation",
        "Compliance Ready",
        "Automated Operation"
      ],
    },
    {
      title: "Softening Plants",
      description:
        "Ion exchange based systems for water softening by removing hardness causing ions",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrvkukn3BFyJKtRAZXUUruen72FJ64BayCQ&s",
      features: [
        "Removes Hardness",
        "Low Chemical Usage",
        "High Flow Rates",
        "Easy Maintenance"
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offering reliable, customized solutions to meet diverse water
            treatment needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-2"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
  variant="outline"
  className="
    w-full flex items-center justify-center gap-2 
    px-4 py-2 border border-gray-300 rounded-lg
    text-gray-800 bg-transparent
    transition-all duration-300 ease-in-out 
    hover:bg-blue-600 hover:text-white hover:border-blue-600 
    hover:shadow-md
  "
>
  Learn More
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Button>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
