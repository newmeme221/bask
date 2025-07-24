import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx'; 
import emailjs from 'emailjs-com';
import { Label } from '@/components/ui/label.jsx';
import GoogleMapComponent from '@/components/GoogleMap.jsx';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_8df1qeb',
    'template_b4sz3kj',
    formData, // must match template variables
    'Mw4YZYvbOF6vMesV_'
  )
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  })
  .catch((err) => {
    console.error('FAILED...', err);
    alert('Failed to send message. Please try again.');
  });
};
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'P.O BOX CS 8284 TEMA - GHANA WEST AFRICA',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '(233) 0246 381 748',
        '(233) 0272 903 115',
        '(233) 0233 381 748',
        '(233) 0560 184 674'
      ],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'bs@baskengineeringlimited.com',
        'baskengineeringltd2yahoo.com'
      ],
      color: 'text-orange-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 8:00 AM - 2:00 PM',
        'Sunday: Closed'
      ],
      color: 'text-purple-600'
    }
  ];

  const services = [
    'Mechanical Heavy Plant Machinery',
    'Structural Steel Fabrication',
    'Pipeline Installation',
    'Plating & Ducting',
    'Tanks & Pressure Vessels',
    'Corrosion Protection',
    'Plant Maintenance',
    'Equipment Rental',
    'Other'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center text-white" style={{ backgroundImage: `url("/images/engineering_hero-4.jpg")` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Ready to discuss your engineering project? Get in touch with our team of experts. 
              We're committed to providing prompt responses and professional service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get a Quote</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed response.
              </p>
              
              {isSubmitted ? (
                <Card className="p-8 text-center bg-green-50 border-green-200">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="service">Service of Interest</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="mt-1"
                          placeholder="Please describe your project requirements, timeline, and any specific needs..."
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Reach out to us through any of the following channels. We're here to help with your engineering needs.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mr-4 ${info.color}`}>
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                          {Array.isArray(info.details) ? (
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-gray-600">{detail}</p>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-600">{info.details}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600">
              Located in Tema, Ghana - Serving clients across West Africa
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <GoogleMapComponent />
          </Card>
        </div>
      </section> */}

      {/* Quick Response Promise */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quick Response Guarantee
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            We understand that time is critical in engineering projects. That's why we guarantee 
            a response to all inquiries within 24 hours during business days.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">24hrs</div>
              <p className="text-blue-100">Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-blue-100">Professional Service</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">Free</div>
              <p className="text-blue-100">Initial Consultation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;