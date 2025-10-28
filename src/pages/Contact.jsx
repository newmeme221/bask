import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Label } from "@/components/ui/label.jsx";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  // Load POWR form script when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.powr.io/powr.js?platform=react";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "P.O BOX CS 8284 TEMA - GHANA WEST AFRICA",
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["(233) 0246 381 748"],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "bs@baskengineeringlimited.com",
        "baskengineeringltd@yahoo.com",
      ],
      color: "text-orange-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 8:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center text-white"
        style={{ backgroundImage: `url("/images/engineering_hero-4.jpg")` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Ready to discuss your engineering project? Get in touch with our team
              of experts. We're committed to providing prompt responses and
              professional service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* POWR Form Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get a Quote</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
                with a detailed response.
              </p>

              <Card>
                <CardContent className="p-8">
                  {/* Replace "unique_form_id" with your POWR Form ID */}
                  <div
                    className="powr-form-builder"
                    id="60e000b4_1761654251"
                  ></div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Reach out to us through any of the following channels. We're here
                to help with your engineering needs.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mr-4 ${info.color}`}
                        >
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          {Array.isArray(info.details) ? (
                            <div className="space-y-1">
                              {info.details.map((detail, i) => (
                                <p key={i} className="text-gray-600">
                                  {detail}
                                </p>
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

      {/* Quick Response Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quick Response Guarantee
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            We understand that time is critical in engineering projects. That's
            why we guarantee a response to all inquiries within 24 hours during
            business days.
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
