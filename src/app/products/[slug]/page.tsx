import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// This would typically come from a database or API
const products = [
  {
    slug: 'sewage-treatment-plants',
    title: "Sewage Treatment Plants (STP)",
    description: "Advanced biological treatment systems for residential and commercial wastewater",
    image: "https://www.rciaquatech.com/wp-content/uploads/2025/03/Sewage-Treatment-Plants.jpg",
    features: ["Compact Design", "Low Maintenance", "Energy Efficient"],
    fullDescription: "Our Sewage Treatment Plants (STP) are designed to treat domestic and commercial wastewater efficiently. Using advanced biological treatment processes, our STPs ensure that the treated water meets all regulatory standards. These systems are compact, energy-efficient, and require minimal maintenance, making them ideal for various applications including residential complexes, hotels, hospitals, and commercial establishments.",
    specifications: {
      capacity: "1 KLD to 10 MLD",
      technology: "MBBR, SBR, MBR",
      applications: "Residential Complexes, Hotels, Hospitals, Commercial Buildings"
    }
  },
  {
    slug: 'effluent-treatment-plants',
    title: "Effluent Treatment Plants (ETP)",
    description: "Industrial wastewater treatment for chemical, pharmaceutical, and textile industries",
    image: "https://www.rciaquatech.com/wp-content/uploads/2025/03/Effluent-Treatment-Plant-ETP.jpg",
    features: ["Zero Liquid Discharge", "Chemical Recovery", "Automated Control"],
    fullDescription: "Our Effluent Treatment Plants (ETP) are engineered to treat industrial wastewater effectively. These systems are designed to handle various types of industrial effluents, including those from chemical, pharmaceutical, and textile industries. With features like zero liquid discharge and chemical recovery, our ETPs help industries meet environmental regulations while reducing water consumption and operational costs.",
    specifications: {
      capacity: "Customizable as per requirement",
      technology: "Primary, Secondary & Tertiary Treatment",
      applications: "Chemical, Pharmaceutical, Textile, and other Industries"
    }
  },
  {
    slug: 'water-treatment-plants',
    title: "Water Treatment Plants (WTP)",
    description: "Municipal and industrial water purification systems for safe drinking water",
    image: "https://www.rciaquatech.com/wp-content/uploads/2025/03/Water-Treatment-Plants-WTP.jpg",
    features: ["Multi-Stage Filtration", "UV Disinfection", "Quality Monitoring"],
    fullDescription: "Our Water Treatment Plants (WTP) provide comprehensive solutions for purifying water from various sources. Using advanced filtration and disinfection technologies, we ensure the delivery of safe and clean drinking water. Our systems are designed for both municipal and industrial applications, featuring multi-stage filtration, UV disinfection, and continuous quality monitoring to meet the highest standards of water purity.",
    specifications: {
      capacity: "1 KLD to 100 MLD",
      technology: "Multi-Stage Filtration, UV Disinfection",
      applications: "Municipalities, Industries, Commercial Complexes"
    }
  },
  {
    slug: 'reverse-osmosis-systems',
    title: "Reverse Osmosis Systems",
    description: "High-efficiency membrane technology for water desalination and purification",
    image: "https://www.rciaquatech.com/wp-content/uploads/2025/03/Reverse-Osmosis-Plants-Industrial-RO-Plants.jpg",
    features: ["High Recovery Rate", "Low Energy Consumption", "Modular Design"],
    fullDescription: "Our Reverse Osmosis (RO) Systems utilize advanced membrane technology to remove dissolved solids, salts, and impurities from water. These systems are ideal for desalination and producing high-purity water for various industrial and commercial applications. With high recovery rates and energy-efficient operation, our RO systems provide cost-effective water treatment solutions.",
    specifications: {
      capacity: "100 LPH to 100,000 LPH",
      technology: "Reverse Osmosis (RO)",
      applications: "Desalination, Industrial Process Water, Drinking Water"
    }
  },
  {
    slug: 'ultrafiltration-plants',
    title: "Ultrafiltration Plants",
    description: "Advanced membrane filtration for removing suspended solids and bacteria",
    image: "https://www.rciaquatech.com/wp-content/uploads/2025/03/Ultrafiltration-Plants-Systems-UF.jpg",
    features: ["High Flux Rate", "Chemical Resistant", "Easy Cleaning", "Low Maintenance"],
    fullDescription: "Our Ultrafiltration (UF) Plants employ advanced membrane technology to effectively remove suspended solids, bacteria, and viruses from water. These systems are widely used in various industries for water purification, pre-treatment for RO systems, and wastewater recycling. With their high flux rates and chemical resistance, UF plants offer reliable and efficient water treatment.",
    specifications: {
      capacity: "Customizable",
      technology: "Ultrafiltration (UF)",
      applications: "Pre-treatment for RO, Wastewater Reuse, Surface Water Treatment"
    }
  },
  {
    slug: 'demineralization-plants',
    title: "Demineralization Plants",
    description: "Ion exchange systems for producing high-purity water for industrial use",
    image: "https://www.rciaquatech.com/wp-content/uploads/2025/03/Demineralization-DM-Water-Treatment-Plant.jpg",
    features: ["High Purity Output", "Regeneration System", "Continuous Operation"],
    fullDescription: "Our Demineralization (DM) Plants use ion exchange technology to remove mineral salts from water, producing high-purity water essential for various industrial processes. These systems are commonly used in power plants, pharmaceuticals, and electronics manufacturing where water with very low conductivity is required. Our DM plants feature automatic regeneration and continuous operation capabilities.",
    specifications: {
      capacity: "Customizable",
      technology: "Ion Exchange",
      applications: "Power Plants, Pharmaceuticals, Electronics, Laboratories"
    }
  },
  {
    slug: 'multi-effect-evaporation-plant',
    title: "Multi-Effect Evaporation (MEE) Plant",
    description: "Energy-efficient evaporation systems for concentration and volume reduction of industrial effluents",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpEHysgrwLwm2k3gSfs9VXXLEF2vmL23ZmRQ&s",
    features: ["High Thermal Efficiency", "Corrosion Resistant", "Low Operating Cost", "Minimal Scaling"],
    fullDescription: "Our Multi-Effect Evaporation (MEE) Plants are designed for the concentration of industrial effluents through multiple stages of evaporation. These energy-efficient systems recover water while reducing the volume of liquid waste. With corrosion-resistant construction and minimal scaling, our MEE plants offer reliable operation for various industrial applications including chemical, pharmaceutical, and food processing industries.",
    specifications: {
      capacity: "Customizable",
      technology: "Multi-Effect Evaporation",
      applications: "Waste Concentration, Zero Liquid Discharge, Product Recovery"
    }
  },
  {
    slug: 'zero-liquid-discharge-systems',
    title: "Zero Liquid Discharge (ZLD) Systems",
    description: "Complete solution for wastewater treatment with zero liquid discharge and maximum water recovery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9WUhI7_3LEi8cBGn7qFYHjzEXbEnHkps5A&s",
    features: ["100% Water Recovery", "Minimal Sludge Generation", "Compliance Ready", "Automated Operation"],
    fullDescription: "Our Zero Liquid Discharge (ZLD) Systems are comprehensive wastewater treatment solutions that ensure no liquid waste is discharged into the environment. These systems recover up to 100% of the water for reuse while converting the dissolved solids into solid waste for disposal. With advanced automation and minimal sludge generation, our ZLD systems help industries meet stringent environmental regulations and reduce their water footprint.",
    specifications: {
      capacity: "Customizable",
      technology: "Integrated Treatment Process",
      applications: "Industries with Strict Environmental Regulations, Water-Scarce Areas"
    }
  },
  {
    slug: 'softening-plants',
    title: "Softening Plants",
    description: "Ion exchange based systems for water softening by removing hardness causing ions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrvkukn3BFyJKtRAZXUUruen72FJ64BayCQ&s",
    features: ["Removes Hardness", "Low Chemical Usage", "High Flow Rates", "Easy Maintenance"],
    fullDescription: "Our Water Softening Plants effectively remove hardness-causing ions like calcium and magnesium from water through ion exchange technology. These systems are essential for preventing scale formation in boilers, cooling towers, and industrial equipment. With low chemical consumption and easy maintenance, our softening plants provide reliable operation for various industrial and commercial applications.",
    specifications: {
      capacity: "Customizable",
      technology: "Ion Exchange",
      applications: "Boiler Feed Water, Cooling Towers, Process Water"
    }
  }
];

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ProductDetail({ params }: PageProps) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/#products" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <div className="relative h-96 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Key Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Product Description</h2>
                <p className="text-gray-700">{product.fullDescription}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-3 rounded">
                      <h4 className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: `${product.title} | Water Solutions`,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}
