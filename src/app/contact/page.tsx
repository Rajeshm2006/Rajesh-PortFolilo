"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Copy, Check } from "lucide-react";

export default function ContactPage() {
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Top Header with Back to Intro */}
      <div className="flex items-center justify-between pt-4 pb-8 border-b border-[#E5E5E5]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
          05 // THE DIRECT DISPATCH
        </span>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#666666] hover:text-[#111111] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to intro</span>
        </Link>
      </div>

      {/* Editorial Headline */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight leading-tight">
          A little signal.
          <span className="block text-[#666666] font-semibold">None of the noise.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed">
          Backend ideas, project inquiries, job opportunities, and things worth collaborating on.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#777777]">
            Direct Channels
          </h3>

          {/* Email */}
          <div className="p-4 rounded-2xl border border-[#E5E5E5] bg-white shadow-sm flex items-center justify-between">
            <div className="flex items-center space-x-3.5">
              <div className="p-2 bg-[#F8F9FA] rounded-xl text-[#111111] border border-[#E5E5E5]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-[#777777]">EMAIL</p>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="text-xs sm:text-sm font-semibold text-[#111111] hover:underline"
                >
                  {portfolioData.profile.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(portfolioData.profile.email, "email")}
              className="p-1.5 border border-[#E5E5E5] rounded-lg text-[#666666] hover:text-[#111111] hover:bg-[#F8F9FA] transition-colors"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone */}
          <div className="p-4 rounded-2xl border border-[#E5E5E5] bg-white shadow-sm flex items-center justify-between">
            <div className="flex items-center space-x-3.5">
              <div className="p-2 bg-[#F8F9FA] rounded-xl text-[#111111] border border-[#E5E5E5]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-[#777777]">PHONE</p>
                <a
                  href={`tel:${portfolioData.profile.phone}`}
                  className="text-xs sm:text-sm font-semibold text-[#111111] hover:underline"
                >
                  {portfolioData.profile.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(portfolioData.profile.phone, "phone")}
              className="p-1.5 border border-[#E5E5E5] rounded-lg text-[#666666] hover:text-[#111111] hover:bg-[#F8F9FA] transition-colors"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location */}
          <div className="p-4 rounded-2xl border border-[#E5E5E5] bg-white shadow-sm flex items-center space-x-3.5">
            <div className="p-2 bg-[#F8F9FA] rounded-xl text-[#111111] border border-[#E5E5E5]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] font-mono text-[#777777]">LOCATION</p>
              <p className="text-xs sm:text-sm font-semibold text-[#111111]">
                {portfolioData.profile.location}
              </p>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href={portfolioData.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-[#E5E5E5] bg-white shadow-sm flex items-center justify-between hover:border-[#111111] transition-colors group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="p-2 bg-[#F8F9FA] rounded-xl text-[#111111] border border-[#E5E5E5]">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-[#777777]">LINKEDIN</p>
                <p className="text-xs sm:text-sm font-semibold text-[#111111]">
                  rajesh-m-989844293
                </p>
              </div>
            </div>
            <span className="text-xs text-[#777777] group-hover:text-[#111111] transition-colors">
              Connect &rarr;
            </span>
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-[#E5E5E5] bg-white shadow-sm flex items-center justify-between hover:border-[#111111] transition-colors group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="p-2 bg-[#F8F9FA] rounded-xl text-[#111111] border border-[#E5E5E5]">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-[#777777]">GITHUB</p>
                <p className="text-xs sm:text-sm font-semibold text-[#111111]">
                  Rajeshm2006
                </p>
              </div>
            </div>
            <span className="text-xs text-[#777777] group-hover:text-[#111111] transition-colors">
              Follow &rarr;
            </span>
          </a>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-[#E5E5E5] bg-white shadow-sm space-y-6">
          <h3 className="text-base font-bold text-[#111111]">Dispatch a Message</h3>

          {submitted && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start space-x-3 text-xs sm:text-sm text-emerald-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Dispatch triggered!</p>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Your mail client has been opened with your prefilled message to {portfolioData.profile.email}.
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
                  placeholder="e.g. Hiring Manager"
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-[#F8F9FA] border rounded-xl text-[#111111] outline-none transition-colors ${
                    errors.name ? "border-red-500" : "border-[#E5E5E5] focus:border-[#111111]"
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
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
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-[#F8F9FA] border rounded-xl text-[#111111] outline-none transition-colors ${
                    errors.email ? "border-red-500" : "border-[#E5E5E5] focus:border-[#111111]"
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
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
                placeholder="e.g. AI / ML Engineering Opportunity"
                className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-[#F8F9FA] border rounded-xl text-[#111111] outline-none transition-colors ${
                  errors.subject ? "border-red-500" : "border-[#E5E5E5] focus:border-[#111111]"
                }`}
              />
              {errors.subject && <p className="text-[11px] text-red-500">{errors.subject}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#111111]">
                Message *
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="What are you building or looking for?..."
                className={`w-full px-4 py-2.5 text-xs sm:text-sm bg-[#F8F9FA] border rounded-xl text-[#111111] outline-none transition-colors resize-none ${
                  errors.message ? "border-red-500" : "border-[#E5E5E5] focus:border-[#111111]"
                }`}
              />
              {errors.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 bg-[#111111] text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-[#333333] transition-all shadow-sm active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>Dispatch Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
