import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';
import { Upload, User, Mail, Phone, FileText, Briefcase } from 'lucide-react';

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
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Application submitted:', data);
    toast.success('Application submitted successfully! We will get back to you soon.');
    reset();
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
    'Quality Control Inspector'
  ];

  const experienceLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (3-5 years)',
    'Senior Level (6-10 years)',
    'Expert Level (10+ years)'
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-blue-900">Join Our Team</CardTitle>
          <CardDescription className="text-lg text-gray-600">
            We're looking for talented individuals to help us build the future of engineering
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
                  <Input 
                    id="fullName" 
                    {...register('fullName')} 
                    className="mt-1"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    {...register('email')} 
                    className="mt-1"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    {...register('phone')} 
                    className="mt-1"
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <Label htmlFor="linkedIn" className="text-sm font-medium">LinkedIn Profile</Label>
                  <Input 
                    id="linkedIn" 
                    {...register('linkedIn')} 
                    className="mt-1"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                  {errors.linkedIn && <p className="text-red-500 text-sm mt-1">{errors.linkedIn.message}</p>}
                </div>
              </div>
            </div>

            {/* Professional Information Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Professional Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="position" className="text-sm font-medium">Position Applied For *</Label>
                  <Select onValueChange={(value) => setValue('position', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      {positions.map((position) => (
                        <SelectItem key={position} value={position}>
                          {position}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>}
                </div>

                <div>
                  <Label htmlFor="experience" className="text-sm font-medium">Experience Level *</Label>
                  <Select onValueChange={(value) => setValue('experience', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="portfolio" className="text-sm font-medium">Portfolio/Website</Label>
                  <Input 
                    id="portfolio" 
                    {...register('portfolio')} 
                    className="mt-1"
                    placeholder="https://yourportfolio.com"
                  />
                  {errors.portfolio && <p className="text-red-500 text-sm mt-1">{errors.portfolio.message}</p>}
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Documents & Additional Information
              </h3>
              
              <div>
                <Label htmlFor="resume" className="text-sm font-medium flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Resume/CV
                </Label>
                <Input 
                  id="resume" 
                  type="file" 
                  {...register('resume')} 
                  className="mt-1"
                  accept=".pdf,.doc,.docx"
                />
                <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <div>
                <Label htmlFor="coverLetter" className="text-sm font-medium">Cover Letter *</Label>
                <Textarea 
                  id="coverLetter" 
                  {...register('coverLetter')} 
                  className="mt-1 min-h-[120px]"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                />
                {errors.coverLetter && <p className="text-red-500 text-sm mt-1">{errors.coverLetter.message}</p>}
              </div>
            </div>

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


