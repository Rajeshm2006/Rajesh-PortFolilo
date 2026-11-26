import { Brain, BarChart3, Sparkles, Lightbulb, GraduationCap, Target } from 'lucide-react';
import { personalInfo } from '../data/personal';
import {
  RevealSection,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from './MotionPrimitives';

const INTEREST_ICONS = [Brain, BarChart3, Sparkles, Lightbulb];

export function About() {
  return (
    <section
      id="about"
      className="border-b border-[#303A33]/70 bg-[#171C19] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="About"
          title="A Little About Me"
          description="Combining machine learning fundamentals, analytical rigor, and modern software engineering."
        />

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Engineering & Academic Profile Card */}
          <RevealSection className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-[#303A33] bg-[#1D2520]">
              <div className="relative border-b border-[#303A33] bg-[#101312] p-7">
                <div className="bg-grid-pattern absolute inset-0 opacity-40" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-wider text-[#9BE15D] uppercase">
                      Engineering Profile
                    </span>
                    <span className="rounded-md border border-[#303A33] bg-[#171C19] px-2.5 py-1 font-mono text-[11px] text-[#A5AEA8]">
                      {personalInfo.education.graduation}
                    </span>
                  </div>
                  <div className="rounded-xl border border-[#303A33] bg-[#171C19] p-5">
                    <p className="font-mono text-xs text-[#A5AEA8]">
                      // Specialization
                    </p>
                    <p className="mt-1.5 font-display text-lg font-semibold text-white">
                      {personalInfo.education.specialization}
                    </p>
                    <p className="mt-1 text-xs text-[#A5AEA8]">
                      {personalInfo.education.institution}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-[#303A33] pt-3">
                      <span className="font-mono text-xs text-[#A5AEA8]">
                        Academic Score
                      </span>
                      <span className="font-mono text-sm font-semibold text-[#9BE15D]">
                        CGPA {personalInfo.education.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Career Objective Summary Cards */}
              <div className="space-y-4 p-6">
                <div className="flex items-start gap-3.5 rounded-xl border border-[#303A33] bg-[#171C19] p-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1D2520] text-[#9BE15D]">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {personalInfo.education.degree} &mdash;{' '}
                      {personalInfo.education.specialization}
                    </h3>
                    <p className="mt-1 text-xs text-[#A5AEA8]">
                      {personalInfo.education.status} &bull; CGPA{' '}
                      <span className="font-medium text-[#9BE15D]">
                        {personalInfo.education.cgpa}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-xl border border-[#303A33] bg-[#171C19] p-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1D2520] text-[#9BE15D]">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Target Roles
                    </h3>
                    <p className="mt-1 text-xs text-[#A5AEA8]">
                      AI / Machine Learning Engineer &bull; Data Analyst
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Right Column: Narrative + Core Interest Cards */}
          <div className="lg:col-span-7">
            <RevealSection delay={0.08} className="space-y-5">
              <p className="text-base leading-relaxed text-white/95 sm:text-lg">
                {personalInfo.introduction}
              </p>
              <div className="rounded-xl border border-[#303A33] bg-[#1D2520] p-5">
                <span className="font-mono text-xs tracking-wider text-[#9BE15D] uppercase">
                  Career Objective
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[#A5AEA8] sm:text-base">
                  {personalInfo.careerObjective}
                </p>
              </div>
            </RevealSection>

            <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2">
              {personalInfo.interests.map((interest, idx) => {
                const Icon = INTEREST_ICONS[idx % INTEREST_ICONS.length];
                return (
                  <StaggerItem key={interest.title}>
                    <div className="group h-full rounded-xl border border-[#303A33] bg-[#1D2520] p-5 transition-colors duration-200 hover:border-[#9BE15D]/50">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#303A33] bg-[#171C19] text-[#9BE15D] transition-colors group-hover:border-[#9BE15D]/40">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-base font-semibold text-white">
                        {interest.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#A5AEA8]">
                        {interest.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
