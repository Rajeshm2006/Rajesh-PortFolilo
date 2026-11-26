import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { GithubBrandIcon } from './BrandIcons';
import { projects } from '../data/projects';
import {
  EASE_SMOOTH,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from './MotionPrimitives';

export function Projects() {
  const [repoNoticeSlug, setRepoNoticeSlug] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="border-b border-[#303A33]/70 bg-[#171C19] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Featured Work"
          title="Projects That Showcase My Skills"
          description="Selected machine learning, data science, and generative AI engineering work."
        />

        <StaggerContainer className="grid gap-7 lg:grid-cols-3">
          {projects.map((project) => {
            const hasRepoUrl = Boolean(project.githubUrl);

            return (
              <StaggerItem key={project.slug} className="flex">
                <motion.article
                  whileHover={prefersReducedMotion ? undefined : { y: -5 }}
                  transition={{ duration: 0.25, ease: EASE_SMOOTH }}
                  className="group flex w-full flex-col overflow-hidden rounded-2xl border border-[#303A33] bg-[#1D2520] transition-colors duration-200 hover:border-[#9BE15D]/60"
                >
                  {/* Project Thumbnail */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="relative block overflow-hidden border-b border-[#303A33] bg-[#101312]"
                    aria-label={`View ${project.title} details`}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.thumbnailAlt}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </Link>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-[#303A33] bg-[#171C19] px-2.5 py-1 font-mono text-[11px] font-medium text-[#9BE15D]">
                        <FolderGit2 className="h-3 w-3" />
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-[#9BE15D]">
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#A5AEA8]">
                      {project.shortDescription}
                    </p>

                    {/* Technology Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#303A33] bg-[#171C19] px-2.5 py-1 font-mono text-[11px] text-[#A5AEA8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap items-center gap-3 border-t border-[#303A33] pt-5">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#9BE15D] px-4 py-2.5 text-xs font-semibold text-[#101312] transition-colors hover:bg-[#aee879] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BE15D]"
                        >
                          <span>View Project</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>

                        {hasRepoUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#303A33] bg-[#171C19] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#9BE15D]/60 hover:text-[#9BE15D]"
                          >
                            <GithubBrandIcon className="h-3.5 w-3.5" />
                            <span>GitHub Repository</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              setRepoNoticeSlug((prev) =>
                                prev === project.slug ? null : project.slug
                              )
                            }
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#303A33] bg-[#171C19] px-4 py-2.5 text-xs font-semibold text-[#A5AEA8] transition-colors hover:border-[#9BE15D]/50 hover:text-white"
                          >
                            <GithubBrandIcon className="h-3.5 w-3.5" />
                            <span>GitHub Repository</span>
                          </button>
                        )}
                      </div>

                      {repoNoticeSlug === project.slug && !hasRepoUrl ? (
                        <p
                          role="status"
                          className="mt-3 rounded-lg border border-[#303A33] bg-[#101312] px-3 py-2 font-mono text-[11px] leading-relaxed text-[#A5AEA8]"
                        >
                          Repository link pending. Add{' '}
                          <span className="text-[#9BE15D]">githubUrl</span> for{' '}
                          <span className="text-white">{project.title}</span> in{' '}
                          <span className="text-white">src/data/projects.ts</span>.
                        </p>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
