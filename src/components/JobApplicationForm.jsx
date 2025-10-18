import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { toast } from 'sonner';
import {
  Upload,
  User,
  FileText,
  Briefcase,
} from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  position: z.string().min(1, { message: 'Please select a position.' }),
  experience: z.string().min(1, { message: 'Please select your experience level.' }),
  resume: z.any().optional(),
  coverLetter: z.string().min(50, { message: 'Cover letter must be at least 50 characters.' }),
  linkedIn: z.string().url({ message: 'Please enter a valid LinkedIn URL.' }).optional().or(z.literal('')),
  portfolio: z.string().url({ message: 'Please enter a valid portfolio URL.' }).optional().or(z.literal('')),
});

const JobApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const templateParams = {
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      position: data.position,
      experience: data.experience,
      cover_letter: data.coverLetter,
      linked_in: data.linkedIn || 'N/A',
      portfolio: data.portfolio || 'N/A',
    };

    try {
      await emailjs.send(
        'your_service_id',
        'your_template_id',
        templateParams,
        'your_public_key'
      );

      toast.success('Application submitted and email sent successfully!');
      reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Failed to send email. Please try again later.');
    }

    setIsSubmitting(false);
  };

  const positions = [
    'Civil Engineer',
    'Structural Engineer',
    'Mechanical Engineer',
    'Electrical Engineer',
    'Project Manager',
    'Site Supervisor',
    'CAD Technician',
    'Quality Control Inspector',
  ];

  const experienceLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (3-5 years)',
    'Senior Level (6-10 years)',
    'Expert Level (10+ years)',
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-900">Join Our Team</CardTitle>
          <CardDescription className="text-lg text-gray-600">
            We're looking for talented individuals to help us build the future of engineering.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <User className="h-5 w-5" /> Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" {...register('fullName')} />
                  {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" {...register('email')} />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" {...register('phone')} />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div>
                  <Label htmlFor="linkedIn">LinkedIn</Label>
                  <Input id="linkedIn" {...register('linkedIn')} />
                  {errors.linkedIn && <p className="text-red-500 text-sm">{errors.linkedIn.message}</p>}
                </div>
              </div>
            </div>

            {/* Professional Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <Briefcase className="h-5 w-5" /> Professional Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Position Applied For *</Label>
                  <Select onValueChange={(value) => setValue('position', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      {positions.map((position) => (
                        <SelectItem key={position} value={position}>
                          {position}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.position && <p className="text-red-500 text-sm">{errors.position.message}</p>}
                </div>

                <div>
                  <Label>Experience Level *</Label>
                  <Select onValueChange={(value) => setValue('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="portfolio">Portfolio/Website</Label>
                  <Input id="portfolio" {...register('portfolio')} />
                  {errors.portfolio && <p className="text-red-500 text-sm">{errors.portfolio.message}</p>}
                </div>
              </div>
            </div>

            {/* Documents & Cover Letter */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <FileText className="h-5 w-5" /> Documents & Additional Info
              </h3>

              <div>
                <Label htmlFor="resume" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" /> Resume/CV
                </Label>
                <Input id="resume" type="file" {...register('resume')} accept=".pdf,.doc,.docx" />
              </div>

              <div>
                <Label htmlFor="coverLetter">Cover Letter *</Label>
                <Textarea
                  id="coverLetter"
                  {...register('coverLetter')}
                  placeholder="Tell us why you're interested in this position..."
                />
                {errors.coverLetter && <p className="text-red-500 text-sm">{errors.coverLetter.message}</p>}
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobApplicationForm;
