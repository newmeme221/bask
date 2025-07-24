import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import {
  Shield,
  Clock,
  Award,
  Wrench,
  Building,
  Zap,
  ArrowRight,
  CheckCircle,
  Cog
} from 'lucide-react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const heroImages = [
    '/images/engineering_hero-1.png',
    '/images/engineering_hero-2.png',
    '/images/engineering_hero-3.jpg',
    '/images/engineering_hero-4.jpg',
    '/images/engineering_hero-5.jpg'
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Committed to maintaining the highest safety standards in all our operations'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'International recognition for Total Quality Management and excellence'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Proven track record of delivering projects on time and within budget'
    }
  ];

  const services = [
    {
      icon: Wrench,
      title: 'Mechanical Heavy Plant',
      description: 'Cement mills, crushers, conveyors, and industrial machinery',
      image: '/images/services/service-1.png'
    },
    {
      icon: Building,
      title: 'Structural Steel',
      description: 'Design, fabrication, and erection of structural steel components',
      image: '/images/services/service-2.png'
    },
    {
      icon: Zap,
      title: 'Pipeline Systems',
      description: 'Cross-country pipeline design, fabrication, and installation',
      image: '/images/services/service-3.png'
    }
  ];

  const clients = [
    'AFRICA CEMENT FACTORY (ACF)',
    'GLOBAL MANAGEMENT & CONSTRUCTION',
    'NEWMOUNT AHAFO MINES',
    'TWELLIUM INDUSTRY',
    'AFOTEK GLOBAL CONSTRUCTION',
    'ICON HOUSE'
  ];

  const heroSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  };

  const featuresSliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const servicesSliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const clientSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[600px] text-white overflow-hidden">
        <Slider {...heroSettings}>
          {heroImages.map((img, index) => (
           <div
  key={index}
  className="relative h-[600px] bg-black"
>
  <img
    src={img}
    alt={`Hero Slide ${index + 1}`}
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-black opacity-60" />
  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
        Ghana's Leading <span className="text-orange-500">Engineering</span> Company
      </h1>
      <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
        Delivering projects of any size with the tenacity to provide competitive services
        without compromising on Safety, Quality, and Timely Delivery.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
          <Link to="/services">
            Our Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
</div>

          ))}
        </Slider>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose BASK Engineering?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Our commitment to excellence has earned us local and international recognition.
            </p>
          </div>
          <Slider {...featuresSliderSettings}>
            {features.map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="px-4">
                <Card className="text-center hover:shadow-xl transition duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-orange-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-600 mt-2">{description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Services</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Comprehensive engineering and construction solutions tailored for your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, description }, index) => (
              <Card key={index} className="hover:shadow-xl transition duration-300">
                <CardContent className="p-6">
                  <div className="aspect-w-4 aspect-h-3 mb-4">
                    <img
                      src={`/images/services/service-${index + 1}.png`}
                      alt={`${title}`}
                      className="w-full h-full object-cover rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="h-6 w-6 text-blue-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                    aria-label={`Learn more about ${title}`}
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
  
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Trusted by Leading Companies
      </h2>
      <p className="text-lg text-gray-600">
        We have gained longstanding relationships with major companies across Ghana
      </p>
    </div>
    <Slider {...clientSettings}>
      {clients.map((client, index) => (
        <div key={index} className="px-4">
          <Card className="hover:shadow-md transition-shadow h-full flex flex-col items-center text-center py-8">
            <CardContent>
              <div className="w-28 h-28 mx-auto h-full overflow-hidden border-4 border-gray-200 mb-4">
                <img
                  src={`/images/clients/client-${index + 1}.png`}
                  alt={client}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center text-gray-900 font-medium text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                {client}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </Slider>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today for a consultation and let’s bring your engineering vision to life.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Home;
