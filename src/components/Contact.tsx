"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Linkedin, Github, MapPin, Phone, Send, CheckCircle2, Copy, Check } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject";
    if (!formData.message.trim()) errs.message = "Please enter your message";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      const mailtoLink = `mailto:${portfolioData.profile.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      setSubmitted(true);
      window.location.href = mailtoLink;
    }
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#777777] font-semibold">
            07 // Connect
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm text-[#777777] max-w-2xl">
            Interested in hiring, collaborating, or discussing AI/ML and Data Analytics opportunities? Feel free to reach out.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#111111]">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                Actively seeking entry-level opportunities as a Data Analyst or AI/ML Engineer.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-3">
              {/* Location Card */}
              <div className="p-4 border border-[#E5E5E5] rounded-xl flex items-center space-x-3.5 bg-white">
                <div className="p-2 bg-[#F2F2F2] rounded-lg">
                  <MapPin className="w-4 h-4 text-[#111111]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#777777]">Location</p>
                  <p className="text-sm font-bold text-[#111111]">{portfolioData.profile.location}</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 border border-[#E5E5E5] rounded-xl flex items-center justify-between bg-white">
                <div className="flex items-center space-x-3.5">
                  <div className="p-2 bg-[#F2F2F2] rounded-lg">
                    <Mail className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#777777]">Email Address</p>
                    <a
                      href={`mailto:${portfolioData.profile.email}`}
                      className="text-xs sm:text-sm font-bold text-[#111111] hover:underline"
                    >
                      {portfolioData.profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(portfolioData.profile.email, "email")}
                  className="p-1.5 border border-[#E5E5E5] rounded-md text-[#777777] hover:text-[#111111] hover:bg-[#F2F2F2] transition-colors"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#111111]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 border border-[#E5E5E5] rounded-xl flex items-center justify-between bg-white">
                <div className="flex items-center space-x-3.5">
                  <div className="p-2 bg-[#F2F2F2] rounded-lg">
                    <Phone className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#777777]">Phone</p>
                    <a
                      href={`tel:${portfolioData.profile.phone}`}
                      className="text-xs sm:text-sm font-bold text-[#111111] hover:underline"
                    >
                      {portfolioData.profile.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(portfolioData.profile.phone, "phone")}
                  className="p-1.5 border border-[#E5E5E5] rounded-md text-[#777777] hover:text-[#111111] hover:bg-[#F2F2F2] transition-colors"
                  aria-label="Copy phone"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#111111]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={portfolioData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-[#E5E5E5] rounded-xl flex items-center justify-between bg-white hover:border-[#111111] transition-colors group"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2 bg-[#F2F2F2] rounded-lg">
                    <Linkedin className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#777777]">LinkedIn</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111111]">
                      rajesh-m-989844293
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#777777] group-hover:text-[#111111] transition-colors">
                  Connect &rarr;
                </span>
              </a>

              {/* GitHub Card */}
              <a
                href={portfolioData.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-[#E5E5E5] rounded-xl flex items-center justify-between bg-white hover:border-[#111111] transition-colors group"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2 bg-[#F2F2F2] rounded-lg">
                    <Github className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#777777]">GitHub</p>
                    <p className="text-xs sm:text-sm font-bold text-[#111111]">
                      Rajeshm2006
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#777777] group-hover:text-[#111111] transition-colors">
                  Follow &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 border border-[#E5E5E5] rounded-xl p-6 sm:p-8 bg-white space-y-6">
            <h3 className="text-base font-bold text-[#111111]">Send a Direct Message</h3>

            {submitted && (
              <div className="p-4 bg-[#F2F2F2] border border-[#E5E5E5] rounded-lg flex items-start space-x-3 text-xs sm:text-sm text-[#111111]">
                <CheckCircle2 className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Thank you for reaching out!</p>
                  <p className="text-xs text-[#777777] mt-0.5">
                    Your default mail application has been opened with the message prefilled to {portfolioData.profile.email}.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#111111]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / John Doe"
                    className={`w-full px-3.5 py-2 text-xs sm:text-sm border rounded-md outline-none transition-colors ${
                      errors.name ? "border-red-500 bg-red-50/10" : "border-[#E5E5E5] focus:border-[#111111]"
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-[#777777]">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#111111]">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className={`w-full px-3.5 py-2 text-xs sm:text-sm border rounded-md outline-none transition-colors ${
                      errors.email ? "border-red-500 bg-red-50/10" : "border-[#E5E5E5] focus:border-[#111111]"
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-[#777777]">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#111111]">
                  Subject *
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. AI / ML Engineer Role Discussion"
                  className={`w-full px-3.5 py-2 text-xs sm:text-sm border rounded-md outline-none transition-colors ${
                    errors.subject ? "border-red-500 bg-red-50/10" : "border-[#E5E5E5] focus:border-[#111111]"
                  }`}
                />
                {errors.subject && <p className="text-[11px] text-[#777777]">{errors.subject}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#111111]">
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className={`w-full px-3.5 py-2 text-xs sm:text-sm border rounded-md outline-none transition-colors resize-none ${
                    errors.message ? "border-red-500 bg-red-50/10" : "border-[#E5E5E5] focus:border-[#111111]"
                  }`}
                />
                {errors.message && <p className="text-[11px] text-[#777777]">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-2.5 bg-[#111111] text-white text-xs sm:text-sm font-semibold rounded-md hover:bg-[#333333] transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
