import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    location: '',
    budget: '$100,000–$250,000',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validate = () => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.location.trim()) errs.location = 'Please state your project city / location';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please share a brief note about your project';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    // Simulate clean submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Residential',
      location: '',
      budget: '$100,000–$250,000',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#F7F3ED] border-b border-[#E5DED2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Info & Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-[#59624D]" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#59624D] font-semibold">
                  Get in Touch
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E211C] font-normal leading-tight mb-6">
                Start Your <br />
                <span className="editorial-italic text-[#59624D]">Project.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#292923]/70 leading-relaxed mb-10 font-normal">
                Every collaboration begins with an open conversation about how you wish to live. Fill out the inquiry form and our principal studio team will respond within two business days.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6 pt-6 border-t border-[#E5DED2]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-sm bg-[#EFE9DF] border border-[#D5CCBD] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#59624D]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6C745E] block font-medium">Studio</span>
                    <span className="text-sm text-[#1E211C] font-normal">New York, NY / Remote Worldwide</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-sm bg-[#EFE9DF] border border-[#D5CCBD] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#59624D]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6C745E] block font-medium">Direct Inquiries</span>
                    <a href="mailto:hello@studioarchon.example" className="text-sm text-[#1E211C] hover:text-[#59624D] transition-colors">
                      hello@studioarchon.example
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-sm bg-[#EFE9DF] border border-[#D5CCBD] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#59624D]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6C745E] block font-medium">Studio Telephone</span>
                    <a href="tel:+12125550188" className="text-sm text-[#1E211C] hover:text-[#59624D] transition-colors">
                      +1 (212) 555-0188
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-4 bg-[#EFE9DF]/60 border border-[#E5DED2] rounded-sm text-[11px] text-[#6C745E]">
              Note: Studio Archon is a boutique architecture and interior design studio. Contact credentials and metrics are presented for studio portfolio demonstration purposes.
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-[#EFE9DF]/50 border border-[#E5DED2] rounded-md p-6 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="py-12 px-4 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-[#59624D] text-[#F7F3ED] rounded-full mx-auto flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1E211C] font-normal mb-3">
                  Thank You, {formData.name}.
                </h3>
                <p className="text-sm text-[#292923]/80 max-w-md mx-auto leading-relaxed mb-8">
                  We have received your project details for your {formData.projectType.toLowerCase()} space in {formData.location}. Our principal architect will review your materials and contact you at {formData.email} shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 bg-[#1E211C] hover:bg-[#292923] text-[#F7F3ED] text-xs uppercase tracking-widest px-6 py-3 rounded-sm font-medium transition-colors"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1E211C] font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Katherine Vance"
                      className={`w-full bg-[#F7F3ED] border ${
                        errors.name ? 'border-red-500' : 'border-[#D5CCBD]'
                      } rounded-sm px-4 py-3 text-sm text-[#1E211C] placeholder-[#B7AE9E] focus:outline-none focus:border-[#59624D] transition-colors`}
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1E211C] font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. kvance@example.com"
                      className={`w-full bg-[#F7F3ED] border ${
                        errors.email ? 'border-red-500' : 'border-[#D5CCBD]'
                      } rounded-sm px-4 py-3 text-sm text-[#1E211C] placeholder-[#B7AE9E] focus:outline-none focus:border-[#59624D] transition-colors`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1E211C] font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#F7F3ED] border border-[#D5CCBD] rounded-sm px-4 py-3 text-sm text-[#1E211C] placeholder-[#B7AE9E] focus:outline-none focus:border-[#59624D] transition-colors"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1E211C] font-medium mb-2">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="City, State / Country"
                      className={`w-full bg-[#F7F3ED] border ${
                        errors.location ? 'border-red-500' : 'border-[#D5CCBD]'
                      } rounded-sm px-4 py-3 text-sm text-[#1E211C] placeholder-[#B7AE9E] focus:outline-none focus:border-[#59624D] transition-colors`}
                    />
                    {errors.location && <p className="text-xs text-red-600 mt-1">{errors.location}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1E211C] font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#F7F3ED] border border-[#D5CCBD] rounded-sm px-4 py-3 text-sm text-[#1E211C] focus:outline-none focus:border-[#59624D] transition-colors cursor-pointer"
                    >
                      <option value="Residential">Residential Interior</option>
                      <option value="Commercial">Commercial Office</option>
                      <option value="Hospitality">Hospitality & Retreat</option>
                      <option value="Renovation">Complete Architectural Gut</option>
                      <option value="Consultation">Design Advisory & Styling</option>
                    </select>
                  </div>

                  {/* Approximate Budget */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1E211C] font-medium mb-2">
                      Approximate Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#F7F3ED] border border-[#D5CCBD] rounded-sm px-4 py-3 text-sm text-[#1E211C] focus:outline-none focus:border-[#59624D] transition-colors cursor-pointer"
                    >
                      <option value="$50,000–$100,000">$50,000 – $100,000</option>
                      <option value="$100,000–$250,000">$100,000 – $250,000</option>
                      <option value="$250,000–$500,000">$250,000 – $500,000</option>
                      <option value="$500,000+">$500,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E211C] font-medium mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share details about the property, your ideal move-in or completion timeline, aesthetic preferences, and any specific architectural needs..."
                    className={`w-full bg-[#F7F3ED] border ${
                      errors.message ? 'border-red-500' : 'border-[#D5CCBD]'
                    } rounded-sm px-4 py-3 text-sm text-[#1E211C] placeholder-[#B7AE9E] focus:outline-none focus:border-[#59624D] transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1E211C] hover:bg-[#292923] text-[#F7F3ED] text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300 font-medium group disabled:opacity-50"
                >
                  <span>{loading ? 'Sending Inquiry...' : 'Send Project Inquiry'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
