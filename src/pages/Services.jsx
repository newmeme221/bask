import { Card, CardContent } from '@/components/ui/card.jsx'; 
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Building, 
  Zap, 
  Layers, 
  Container, 
  Shield,
  ArrowRight,
  CheckCircle,
  Settings,
  Hammer,
  Cog
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Mechanical Heavy Fixed Plant Machinery',
      description: 'Comprehensive solutions for industrial machinery and equipment',
      image: '/images/services/service-1.png',
      capabilities: [
        'Cement mills', 'Paper mills', 'Ball & sag mills', 'Conveyors circuit', 'Crushers',
        'Agitators', 'Pumps', 'Drums and dryers', 'Gas turbines', 'Generator', 'Chimneys', 'Cooling towers'
      ]
    },
    {
      icon: Building,
      title: 'Structural Steel Designing, Fabrication & Erection',
      description: 'Leader in design and use of modular concepts with modernized welding facilities',
      image: '/images/services/service-2.png',
      capabilities: [
        'Drafting detailing', 'Structural steel designing', 'Fabrication of structural steel',
        'Erection of structural steel', 'Modification of structural steel', 'Prefabricated buildings'
      ]
    },
    {
      icon: Zap,
      title: 'Pipelines Fabrication and Installation',
      description: 'One-stop service for cross-country pipeline projects and associated facilities',
      image: '/images/services/service-3.png',
      capabilities: ['Carbon steel', 'Stainless steel', 'Exotic steel', 'HDPE pipe']
    },
    {
      icon: Layers,
      title: 'Plating, Ducting Fabrication and Welding',
      description: 'Specialized fabrication services for various industrial applications',
      image: '/images/services/service-4.jpg',
      capabilities: ['Mixing boxes', 'Bins', 'Splitting boxes', 'Air ducts', 'Flue gas ducts', 'Bunkers']
    },
    {
      icon: Container,
      title: 'Tanks and Pressure Vessels Installation',
      description: 'Professional installation of storage and pressure systems',
      image: '/images/services/service-5.jpg',
      capabilities: ['Bulk storage tanks', 'Tank farms', 'CIL tanks', 'Pressure vessels']
    },
    {
      icon: Shield,
      title: 'Corrosion Protection',
      description: 'Advanced corrosion protection services with certified teams and quality control',
      image: '/images/services/service-6.jpg',
      capabilities: [
        'Blasting to standard', 'Quality work guarantee', 'Trained and certified teams',
        'Qualified QC staff supervision', 'Recorded processes for client review'
      ]
    } ,
      {
      icon: Shield,
      title: 'Civil Engineering',
      description: 'Comprehensive civil engineering services with a focus on quality and safety',
      image: '/images/services/service-6.jpg',
      capabilities: [
        'Site preparation', 'Earthworks', 'Road construction',
        'Drainage systems', 'Concrete works', 'Dam construction'
      ]
      
    }
  ];

  const additionalServices = [
    'Plant shutdown and General Maintenance',
    'Refurbishment and relocation of plant and equipment',
    'Manpower supply',
    'Plant hire',
    'Equipment rentals',
    'Scaffolding services'
  ];

  const additionalImages = [
    '/images/additional/plant-1.jpg',
    '/images/additional/plant-2.jpg',
    '/images/additional/plant-3.jpg',
    '/images/additional/plant-4.jpg',
    '/images/additional/plant-5.jpg',
    '/images/additional/plant-6.jpg'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center text-white" style={{ backgroundImage: `url("/images/engineering_hero-3.jpg")` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive engineering and construction solutions spanning a broad range of activities. 
              We provide quality services at competitive prices without compromising on Safety, Quality, and Timely Delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have gained longstanding relationships with major companies through our comprehensive service offerings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                        <service.icon className="h-6 w-6 text-blue-900" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 mb-3">Capabilities include:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.capabilities.map((cap, capIndex) => (
                          <div key={capIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive support services to complement our core engineering capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={additionalImages[index]}
                    alt={service}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                      <Cog className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="font-medium text-gray-900">{service}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we deliver exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Design & Engineering', 'Procurement', 'Construction', 'Management'].map((title, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <span className="text-2xl font-bold text-blue-900">{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">
                  {[
                    'Comprehensive design and engineering solutions tailored to your needs',
                    'Strategic procurement of materials and equipment for optimal results',
                    'Expert construction and installation with focus on safety and quality',
                    'Comprehensive project management ensuring timely delivery'
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Engineering Solutions?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Whether it's construction of a processing plant or installation of a plant upgrade, 
            we provide quality services at competitive prices.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link to="/contact">
              Request Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
