import { Card, CardContent } from '@/components/ui/card.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Award,
  CheckCircle,
  Briefcase
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Integrity and Fairness',
      description: 'We conduct our business with the highest ethical standards and treat all stakeholders fairly.'
    },
    {
      icon: Briefcase,
      title: 'Professionalism',
      description: 'We maintain professional excellence in all our services and client interactions.'
    },
    {
      icon: Users,
      title: 'Diversity',
      description: 'We embrace diversity and create an inclusive environment for all our team members.'
    }
  ];

  const valuesSliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const safetyCommitments = [
    'Provision of a risk managed workplace conducive to health and safety',
    'Expertise, appropriate resources, training and personal protective equipment',
    'Continuously improving occupational health and safety performance',
    'Operating in accordance with recognized industry standards',
    'Ensuring employees and subcontractors are aware of their obligations',
    'Preventing workplace accidents through proper training and resources',
    'Prompt and effective emergency response arrangements'
  ];

  const keyOperations = [
    'Designing and Engineering',
    'Procurement and Construction',
    'Project Management',
    'Supply and Engineering Consultancy',
    'Plant and Labor Hiring',
    'Steel Erection',
    'Rubber Lining',
    'Welding and Fabrication',
    'Pipe Construction',
    'Corrosion Control',
    'Mines Maintenance',
    'External and Internal Finishing',
    'Equipment Rentals',
    'Scaffolding'
  ];

  return (
    <div className="min-h-screen w-full bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url("/images/engineering_hero-5.jpg")` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="text-center w-full text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About BASK Engineering</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              One of Ghana's leading engineering and construction companies with the tenacity to deliver projects of any size to clients in various markets.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              BASK Engineering Limited is fully structured and dynamic, specializing in comprehensive engineering solutions. With our strong management team and trained employees, we have built a reputation for excellence.
            </p>
            <p className="text-gray-600 mb-4">
              Our modern, well-maintained fleet enables competitively priced services without compromising Safety, Quality, or Timely Delivery.
            </p>
            <p className="text-gray-600">
              This commitment to excellence has earned us recognition for Total Quality Management both locally and internationally.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Key Operations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyOperations.map((op, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                  <span className="text-gray-700 text-sm">{op}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                To provide specialized engineering and construction services in a professional manner in accordance with internationally recognized Health, Safety and Environmental Standards.
              </p>
            </CardContent>
          </Card>
          {/* Vision */}
          <Card className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                To become one of the world's leading companies, bringing innovations to improve the way the world works and lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section with Slider */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our work and define our company culture
          </p>
        </div>
        <Slider {...valuesSliderSettings}>
          {values.map((value, idx) => (
            <div key={idx} className="px-4 h-full">
              <Card className="text-center h-full shadow hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </section>

      {/* Safety Section */}
      <section className="py-16 bg-blue-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety, Health & Environmental Policy</h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              BASK Engineering Limited believes that sound occupational health and safety management practices are in the best interest of its employees and business.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Commitments</h3>
              <div className="space-y-4">
                {safetyCommitments.map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                    <p className="text-blue-100">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-6">Employee & Subcontractor Responsibilities</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                  <p className="text-blue-100">Right to work in an environment where health risks are reduced and duty to report unsafe situations.</p>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                  <p className="text-blue-100">Take ownership of safety programs and comply with all standards.</p>
                </div>
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                  <p className="text-blue-100">Be responsible for your own safety and that of coworkers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
