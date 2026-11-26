import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail,
  Terminal,
} from 'lucide-react';
import { GithubBrandIcon, LinkedinBrandIcon } from './BrandIcons';
import { personalInfo } from '../data/personal';
import { EASE_SMOOTH } from './MotionPrimitives';

export function Hero() {
  const [notice, setNotice] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  const handleResumeClick = () => {
    if (personalInfo.resumeUrl) {
      window.open(personalInfo.resumeUrl, '_blank', 'noopener,noreferrer');
      setNotice(null);
      return;
    }
    setNotice(
      'Resume link is not configured yet. Add your PDF to public/resume.pdf and update resumeUrl in src/data/personal.ts.'
    );
  };

  const handleEmailClick = () => {
    if (personalInfo.socials.email) {
      window.location.href = `mailto:${personalInfo.socials.email}`;
      return;
    }
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    setNotice(
      'Direct email is not configured yet. Add socials.email in src/data/personal.ts or use the Contact section below.'
    );
  };

  const textTransition = (delay: number) =>
    prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.6, delay, ease: EASE_SMOOTH };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-[#303A33]/70 bg-[#101312] pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Subtle architectural grid & quiet ambient glow */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-60" />
      {!prefersReducedMotion ? (
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.06, 0.11, 0.06], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-24 right-[8%] h-96 w-96 rounded-full bg-[#9BE15D] blur-[140px]"
        />
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Introduction & CTA */}
          <div className="lg:col-span-7">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={textTransition(0.05)}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#303A33] bg-[#171C19] px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9BE15D] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9BE15D]" />
              </span>
              <span className="font-mono text-xs font-medium tracking-widest text-[#A5AEA8] uppercase">
                {personalInfo.availabilityLabel}
              </span>
            </motion.div>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={textTransition(0.12)}
              className="font-display text-lg font-medium text-[#A5AEA8] sm:text-xl"
            >
              {personalInfo.heroGreeting}{' '}
              <span className="text-[#9BE15D]">/</span>{' '}
              <span className="text-white">{personalInfo.title}</span>
            </motion.p>

            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={textTransition(0.2)}
              className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            >
              Building{' '}
              <span className="text-[#9BE15D]">Intelligent Solutions</span>{' '}
              with <span className="text-[#9BE15D]">Data</span> &amp;{' '}
              <span className="text-[#9BE15D]">AI</span>.
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={textTransition(0.28)}
              className="mt-6 max-w-xl text-base leading-relaxed text-[#A5AEA8] sm:text-lg"
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* Primary Actions */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={textTransition(0.36)}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.button
                type="button"
                onClick={handleScrollToProjects}
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#9BE15D] px-6 py-3.5 text-sm font-semibold text-[#101312] transition-colors hover:bg-[#aee879] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BE15D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101312]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              {personalInfo.resumeUrl ? (
                <motion.a
                  href={personalInfo.resumeUrl}
                  download="Rajesh_M_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-[#303A33] bg-[#171C19] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#9BE15D]/60 hover:bg-[#1D2520] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BE15D]"
                >
                  <Download className="h-4 w-4 text-[#9BE15D]" />
                  <span>Download Resume</span>
                </motion.a>
              ) : (
                <motion.button
                  type="button"
                  onClick={handleResumeClick}
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-[#303A33] bg-[#171C19] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#9BE15D]/60 hover:bg-[#1D2520] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BE15D]"
                >
                  <Download className="h-4 w-4 text-[#9BE15D]" />
                  <span>Download Resume</span>
                </motion.button>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={textTransition(0.44)}
              className="mt-8 flex items-center gap-3"
            >
              <span className="mr-1 font-mono text-xs tracking-wider text-[#A5AEA8] uppercase">
                Connect
              </span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#303A33] bg-[#171C19] text-[#A5AEA8] transition-colors hover:border-[#9BE15D]/60 hover:text-[#9BE15D]"
              >
                <GithubBrandIcon className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#303A33] bg-[#171C19] text-[#A5AEA8] transition-colors hover:border-[#9BE15D]/60 hover:text-[#9BE15D]"
              >
                <LinkedinBrandIcon className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={handleEmailClick}
                aria-label="Email Rajesh M"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#303A33] bg-[#171C19] text-[#A5AEA8] transition-colors hover:border-[#9BE15D]/60 hover:text-[#9BE15D]"
              >
                <Mail className="h-4 w-4" />
              </button>
            </motion.div>

            {notice ? (
              <div
                role="status"
                className="mt-5 max-w-xl rounded-xl border border-[#303A33] bg-[#171C19] px-4 py-3 text-xs leading-relaxed text-[#A5AEA8]"
              >
                <span className="font-mono font-medium text-[#9BE15D]">Note: </span>
                {notice}
              </div>
            ) : null}
          </div>

          {/* Right Column: Profile Image or Clean Editorial Placeholder */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.7, delay: 0.22, ease: EASE_SMOOTH }
            }
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm lg:ml-auto lg:max-w-md">
              {/* Architectural corner frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-2xl border border-[#303A33]/60"
              />
              <div className="relative overflow-hidden rounded-2xl border border-[#303A33] bg-[#171C19] shadow-2xl shadow-black/50">
                {personalInfo.profileImageUrl ? (
                  <div className="relative aspect-[4/4.6] w-full bg-[#101312]">
                    <img
                      src={personalInfo.profileImageUrl}
                      alt={`${personalInfo.name} - ${personalInfo.title}`}
                      className="h-full w-full object-cover object-top"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#101312] via-[#101312]/60 to-transparent"
                    />
                    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 rounded-xl border border-[#303A33] bg-[#171C19]/90 px-4 py-2.5 backdrop-blur-sm">
                      <div>
                        <p className="font-display text-sm font-semibold text-white">
                          {personalInfo.name}
                        </p>
                        <p className="text-[11px] text-[#A5AEA8]">
                          {personalInfo.location}
                        </p>
                      </div>
                      <span className="rounded-md border border-[#303A33] bg-[#1D2520] px-2.5 py-1 font-mono text-[11px] font-medium text-[#9BE15D]">
                        AI &amp; ML
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex aspect-[4/4.6] w-full flex-col justify-between bg-[#171C19] p-7">
                    {/* Top Metadata Bar */}
                    <div className="flex items-center justify-between border-b border-[#303A33] pb-4">
                      <div className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-[#9BE15D]" />
                        <span className="font-mono text-xs text-[#A5AEA8]">
                          PROFILE_FRAME
                        </span>
                      </div>
                      <span className="rounded-md border border-[#303A33] bg-[#1D2520] px-2.5 py-0.5 font-mono text-[11px] text-[#9BE15D]">
                        B.Tech AI &amp; ML
                      </span>
                    </div>

                    {/* Center Editorial Monogram */}
                    <div className="my-auto flex flex-col items-center py-6 text-center">
                      <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl border border-[#303A33] bg-[#1D2520] shadow-inner">
                        <span className="font-display text-4xl font-extrabold tracking-tight text-white">
                          RM<span className="text-[#9BE15D]">.</span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute -right-1.5 -bottom-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#171C19] bg-[#9BE15D]"
                        />
                      </div>
                      <p className="mt-5 font-display text-lg font-semibold text-white">
                        {personalInfo.name}
                      </p>
                      <p className="mt-1 text-xs text-[#A5AEA8]">
                        {personalInfo.title}
                      </p>
                      <p className="mt-4 max-w-[230px] rounded-lg border border-dashed border-[#303A33] bg-[#101312]/70 px-3 py-2 font-mono text-[11px] leading-relaxed text-[#A5AEA8]">
                        Portrait placeholder — set <code className="text-[#9BE15D]">profileImageUrl</code> in{' '}
                        <code className="text-white">src/data/personal.ts</code>
                      </p>
                    </div>

                    {/* Bottom Focus Strip */}
                    <div className="grid grid-cols-3 gap-2 border-t border-[#303A33] pt-4 text-center">
                      <div className="rounded-lg bg-[#1D2520] px-2 py-2">
                        <div className="font-mono text-[10px] text-[#A5AEA8] uppercase">
                          Focus
                        </div>
                        <div className="mt-0.5 text-xs font-semibold text-white">
                          ML / AI
                        </div>
                      </div>
                      <div className="rounded-lg bg-[#1D2520] px-2 py-2">
                        <div className="font-mono text-[10px] text-[#A5AEA8] uppercase">
                          Stack
                        </div>
                        <div className="mt-0.5 text-xs font-semibold text-white">
                          Python
                        </div>
                      </div>
                      <div className="rounded-lg bg-[#1D2520] px-2 py-2">
                        <div className="font-mono text-[10px] text-[#A5AEA8] uppercase">
                          CGPA
                        </div>
                        <div className="mt-0.5 text-xs font-semibold text-[#9BE15D]">
                          {personalInfo.education.cgpa}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={textTransition(0.65)}
          className="mt-14 hidden items-center justify-center sm:flex"
        >
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="group inline-flex flex-col items-center gap-2 text-xs font-mono tracking-widest text-[#A5AEA8] uppercase transition-colors hover:text-[#9BE15D]"
          >
            <span>Scroll</span>
            <motion.span
              animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-4 w-4 text-[#9BE15D]" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
