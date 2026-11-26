import { FormEvent, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle2,
  Info,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { GithubBrandIcon, LinkedinBrandIcon } from './BrandIcons';
import { personalInfo } from '../data/personal';
import { RevealSection, SectionHeader } from './MotionPrimitives';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitState =
  | { type: 'idle' }
  | { type: 'submitting' }
  | { type: 'unconfigured'; message: string }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

const INITIAL_VALUES: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>({ type: 'idle' });
  const prefersReducedMotion = useReducedMotion();

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    } else if (data.name.trim().length < 2) {
      nextErrors.name = 'Name must be at least 2 characters.';
    }

    if (!data.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!EMAIL_REGEX.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!data.subject.trim()) {
      nextErrors.subject = 'Please enter a subject.';
    } else if (data.subject.trim().length < 3) {
      nextErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!data.message.trim()) {
      nextErrors.message = 'Please enter a message.';
    } else if (data.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.';
    }

    return nextErrors;
  };

  const handleFieldChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitState.type !== 'idle') {
      setSubmitState({ type: 'idle' });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!personalInfo.contactEndpoint) {
      setSubmitState({
        type: 'unconfigured',
        message:
          'Form validation passed, but no email backend endpoint is configured yet. Set contactEndpoint (e.g., Formspree) or socials.email in src/data/personal.ts to enable message delivery.',
      });
      return;
    }

    try {
      setSubmitState({ type: 'submitting' });
      const response = await fetch(personalInfo.contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      setValues(INITIAL_VALUES);
      setSubmitState({
        type: 'success',
        message: 'Thank you for reaching out. Your message has been sent.',
      });
    } catch {
      setSubmitState({
        type: 'error',
        message:
          'Unable to submit right now. Please try again later or reach out via LinkedIn.',
      });
    }
  };

  return (
    <section id="contact" className="bg-[#171C19] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Connect & Build Something Great."
          description="I am open to opportunities in AI, Machine Learning, Data Science, and Data Analytics."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Direct Contact Channels */}
          <RevealSection className="space-y-5 lg:col-span-5">
            <div className="rounded-2xl border border-[#303A33] bg-[#1D2520] p-6 sm:p-7">
              <h3 className="font-display text-lg font-bold text-white">
                Direct Channels
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A5AEA8]">
                Interested in discussing entry-level AI/ML Engineer, Data Analyst,
                or internship opportunities? Connect through any channel below.
              </p>

              <div className="mt-6 space-y-3.5">
                {/* Email */}
                <div className="flex items-center gap-3.5 rounded-xl border border-[#303A33] bg-[#171C19] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1D2520] text-[#9BE15D]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] text-[#A5AEA8] uppercase">
                      Email
                    </div>
                    {personalInfo.socials.email ? (
                      <a
                        href={`mailto:${personalInfo.socials.email}`}
                        className="block truncate text-sm font-medium text-white transition-colors hover:text-[#9BE15D]"
                      >
                        {personalInfo.socials.email}
                      </a>
                    ) : (
                      <p className="text-xs text-[#A5AEA8]">
                        Configure <code className="text-[#9BE15D]">socials.email</code> in{' '}
                        <code className="text-white">src/data/personal.ts</code>
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`}
                  className="group flex items-center gap-3.5 rounded-xl border border-[#303A33] bg-[#171C19] p-4 transition-colors hover:border-[#9BE15D]/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1D2520] text-[#9BE15D]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] text-[#A5AEA8] uppercase">
                      Phone
                    </div>
                    <div className="truncate text-sm font-medium text-white transition-colors group-hover:text-[#9BE15D]">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 rounded-xl border border-[#303A33] bg-[#171C19] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1D2520] text-[#9BE15D]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] text-[#A5AEA8] uppercase">
                      Location
                    </div>
                    <div className="truncate text-sm font-medium text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-xl border border-[#303A33] bg-[#171C19] p-4 transition-colors hover:border-[#9BE15D]/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1D2520] text-[#9BE15D]">
                    <LinkedinBrandIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] text-[#A5AEA8] uppercase">
                      LinkedIn
                    </div>
                    <div className="truncate text-sm font-medium text-white transition-colors group-hover:text-[#9BE15D]">
                      linkedin.com/in/rajesh-m-989844293
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-xl border border-[#303A33] bg-[#171C19] p-4 transition-colors hover:border-[#9BE15D]/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1D2520] text-[#9BE15D]">
                    <GithubBrandIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] text-[#A5AEA8] uppercase">
                      GitHub
                    </div>
                    <div className="truncate text-sm font-medium text-white transition-colors group-hover:text-[#9BE15D]">
                      github.com/Rajeshm2006
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </RevealSection>

          {/* Right Column: Validated Contact Form */}
          <RevealSection delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-[#303A33] bg-[#1D2520] p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium tracking-wide text-white uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className="w-full rounded-xl border border-[#303A33] bg-[#101312] px-4 py-3 text-sm text-white placeholder-[#A5AEA8]/50 transition-colors focus:border-[#9BE15D] focus:outline-none"
                  />
                  {errors.name ? (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium tracking-wide text-white uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="w-full rounded-xl border border-[#303A33] bg-[#101312] px-4 py-3 text-sm text-white placeholder-[#A5AEA8]/50 transition-colors focus:border-[#9BE15D] focus:outline-none"
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-medium tracking-wide text-white uppercase"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={(e) => handleFieldChange('subject', e.target.value)}
                  placeholder="Opportunity / Collaboration"
                  aria-invalid={Boolean(errors.subject)}
                  className="w-full rounded-xl border border-[#303A33] bg-[#101312] px-4 py-3 text-sm text-white placeholder-[#A5AEA8]/50 transition-colors focus:border-[#9BE15D] focus:outline-none"
                />
                {errors.subject ? (
                  <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
                ) : null}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-medium tracking-wide text-white uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => handleFieldChange('message', e.target.value)}
                  placeholder="Share details about the role, project, or question..."
                  aria-invalid={Boolean(errors.message)}
                  className="w-full resize-y rounded-xl border border-[#303A33] bg-[#101312] px-4 py-3 text-sm text-white placeholder-[#A5AEA8]/50 transition-colors focus:border-[#9BE15D] focus:outline-none"
                />
                {errors.message ? (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                ) : null}
              </div>

              {/* Honest Submission Status Feedback */}
              {submitState.type === 'unconfigured' ? (
                <div
                  role="status"
                  className="mt-5 flex flex-col gap-3 rounded-xl border border-[#303A33] bg-[#101312] p-4 text-xs leading-relaxed text-[#A5AEA8]"
                >
                  <div className="flex items-start gap-3">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#9BE15D]" />
                    <span>{submitState.message}</span>
                  </div>
                  {personalInfo.socials.email ? (
                    <a
                      href={`mailto:${personalInfo.socials.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(`From: ${values.name.trim()} (${values.email.trim()})\n\n${values.message.trim()}`)}`}
                      className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#303A33] bg-[#171C19] px-3.5 py-2 font-medium text-[#9BE15D] transition-colors hover:border-[#9BE15D]/60"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Open in Email Client ({personalInfo.socials.email})</span>
                    </a>
                  ) : null}
                </div>
              ) : null}

              {submitState.type === 'success' ? (
                <div
                  role="status"
                  className="mt-5 flex items-start gap-3 rounded-xl border border-[#9BE15D]/50 bg-[#101312] p-4 text-xs leading-relaxed text-white"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#9BE15D]" />
                  <span>{submitState.message}</span>
                </div>
              ) : null}

              {submitState.type === 'error' ? (
                <div
                  role="alert"
                  className="mt-5 flex items-start gap-3 rounded-xl border border-red-500/40 bg-[#101312] p-4 text-xs leading-relaxed text-red-300"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  <span>{submitState.message}</span>
                </div>
              ) : null}

              <div className="mt-6 flex items-center justify-between gap-4">
                <motion.button
                  type="submit"
                  disabled={submitState.type === 'submitting'}
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#9BE15D] px-6 py-3.5 text-sm font-semibold text-[#101312] transition-colors hover:bg-[#aee879] disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BE15D]"
                >
                  <Send className="h-4 w-4" />
                  <span>
                    {submitState.type === 'submitting'
                      ? 'Sending...'
                      : 'Send Message'}
                  </span>
                </motion.button>
              </div>
            </form>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
