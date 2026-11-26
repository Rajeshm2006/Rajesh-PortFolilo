import { Award, Calendar, ExternalLink, PlusCircle } from 'lucide-react';
import { certifications } from '../data/certifications';
import {
  RevealSection,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from './MotionPrimitives';

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-b border-[#303A33]/70 bg-[#171C19] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications & Learning"
          description="Verified courses, specializations, and technical learning milestones."
        />

        {certifications.length > 0 ? (
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <StaggerItem key={cert.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#303A33] bg-[#1D2520] transition-colors duration-200 hover:border-[#9BE15D]/50">
                  {cert.certificateImage ? (
                    <div className="border-b border-[#303A33] bg-[#101312]">
                      <img
                        src={cert.certificateImage}
                        alt={`${cert.name} certificate`}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#303A33] bg-[#171C19] text-[#9BE15D]">
                        <Award className="h-4 w-4" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A5AEA8]">
                        <Calendar className="h-3.5 w-3.5 text-[#9BE15D]" />
                        {cert.completionDate}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white">
                      {cert.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#A5AEA8]">
                      {cert.organization}
                    </p>

                    {cert.skills && cert.skills.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-[#303A33] bg-[#171C19] px-2 py-0.5 font-mono text-[11px] text-[#A5AEA8]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {cert.credentialUrl ? (
                      <div className="mt-auto pt-5">
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-[#9BE15D] transition-opacity hover:opacity-80"
                        >
                          <span>View Certificate</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    ) : null}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <RevealSection>
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Clean Configurable Card Slot */}
              <div className="rounded-2xl border border-dashed border-[#303A33] bg-[#1D2520]/60 p-7 lg:col-span-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#303A33] bg-[#171C19] text-[#9BE15D]">
                    <PlusCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs tracking-wider text-[#9BE15D] uppercase">
                      Configurable Registry
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-white">
                      Add Verified Certifications Anytime
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A5AEA8]">
                      This section renders verified credentials directly from{' '}
                      <code className="rounded bg-[#101312] px-1.5 py-0.5 font-mono text-xs text-white">
                        src/data/certifications.ts
                      </code>
                      . Add entries with certification name, issuing organization,
                      completion date, and certificate image or URL whenever you
                      are ready.
                    </p>
                  </div>
                </div>
              </div>

              {/* Continuous Learning Focus Card */}
              <div className="rounded-2xl border border-[#303A33] bg-[#1D2520] p-7 lg:col-span-5">
                <span className="font-mono text-xs tracking-wider text-[#A5AEA8] uppercase">
                  Active Learning Tracks
                </span>
                <ul className="mt-4 space-y-3 text-sm text-[#A5AEA8]">
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9BE15D]" />
                    <span>Machine Learning &amp; Model Evaluation</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9BE15D]" />
                    <span>Generative AI, LLMs &amp; RAG Systems</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9BE15D]" />
                    <span>Data Analytics with SQL &amp; Power BI</span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealSection>
        )}
      </div>
    </section>
  );
}
