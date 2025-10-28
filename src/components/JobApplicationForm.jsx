import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Briefcase } from "lucide-react";

const JobApplicationForm = () => {
  // Load POWR script dynamically when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.powr.io/powr.js?platform=react";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-900 flex items-center justify-center gap-2">
            <Briefcase className="h-7 w-7 text-orange-500" />
            Join Our Team
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            We're looking for talented individuals to help us build the future
            of engineering.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8">
          {/* POWR Form Embed */}
          {/* Replace "unique_form_id" with your actual POWR Form ID */}
          <div className="powr-form-builder" id="b9ebdc31_1761656241"></div>

          {/* Info Section (optional) */}
          <div className="mt-10 text-center text-gray-600">
            <p>
              Our HR team will review your application and contact you within 3–5
              business days.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Need help? Email us at{" "}
              <a
                href="mailto:bs@baskengineeringlimited.com"
                className="text-orange-500 hover:underline"
              >
                bs@baskengineeringlimited.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobApplicationForm;
