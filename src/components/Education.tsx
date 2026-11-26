import { Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { RevealSection, SectionHeader } from './MotionPrimitives';

export function Education() {
  const { education } = personalInfo;

  return (
    <section
      id="education"
      className="border-b border-[#303A33]/70 bg-[#101312] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Academic Background"
          title="My Education Journey"
          description="Undergraduate training focused on artificial intelligence, machine learning, and applied analytics."
        />

        <RevealSection>
          <div className="relative pl-6 sm:pl-10">
            {/* Minimal Vertical Timeline Line */}
            <div
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-2 w-px bg-[#303A33] sm:left-3.5"
            />

            {/* Timeline Entry */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute top-6 -left-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#9BE15D] bg-[#101312] sm:-left-[2.15rem]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#9BE15D]" />
              </div>

              <div className="rounded-2xl border border-[#303A33] bg-[#171C19] p-6 transition-colors duration-200 hover:border-[#9BE15D]/50 sm:p-8">
                <div className="flex flex-col justify-between gap-4 border-b border-[#303A33] pb-6 sm:flex-row sm:items-center">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#303A33] bg-[#1D2520] text-[#9BE15D]">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs tracking-wider text-[#9BE15D] uppercase">
                        {education.status} &bull; {education.graduation}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                        {education.degree} in {education.specialization}
                      </h3>
                      <p className="mt-1 text-sm text-[#A5AEA8]">
                        {education.institution}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2.5 self-start rounded-xl border border-[#303A33] bg-[#1D2520] px-4 py-2.5 sm:self-center">
                    <Award className="h-4 w-4 text-[#9BE15D]" />
                    <span className="font-mono text-xs text-[#A5AEA8] uppercase">
                      CGPA
                    </span>
                    <span className="font-display text-lg font-bold text-white">
                      {education.cgpa}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-1">
                  {education.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#A5AEA8] sm:text-base"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#9BE15D]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
