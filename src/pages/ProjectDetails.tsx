import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  FolderGit2,
  Info,
  Layers,
  Target,
  TrendingUp,
} from 'lucide-react';
import { projects } from '../data/projects';
import { GithubBrandIcon } from '../components/BrandIcons';
import { EASE_SMOOTH } from '../components/MotionPrimitives';

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const prefersReducedMotion = useReducedMotion();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  if (!project) {
    return (
      <main className="flex min-h-[75vh] items-center justify-center bg-[#101312] px-5 pt-24 pb-20">
        <div className="max-w-md rounded-2xl border border-[#303A33] bg-[#171C19] p-8 text-center">
          <h1 className="font-display text-2xl font-bold text-white">
            Project Not Found
          </h1>
          <p className="mt-3 text-sm text-[#A5AEA8]">
            The requested project details page could not be found.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#9BE15D] px-5 py-3 text-sm font-semibold text-[#101312] transition-colors hover:bg-[#aee879]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#101312] pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_SMOOTH }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-[#303A33] bg-[#171C19] px-3.5 py-2 text-xs font-medium text-[#A5AEA8] transition-colors hover:border-[#9BE15D]/50 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-[#9BE15D]" />
            <span>Back to All Projects</span>
          </Link>

          <div className="mt-8">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#303A33] bg-[#171C19] px-3 py-1 font-mono text-xs text-[#9BE15D]">
              <FolderGit2 className="h-3.5 w-3.5" />
              {project.category}
            </span>

            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-[#A5AEA8] sm:text-lg">
              {project.shortDescription}
            </p>
          </div>

          {/* Thumbnail */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#303A33] bg-[#171C19]">
            <img
              src={project.thumbnail}
              alt={project.thumbnailAlt}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          {/* 8 Structured Sections */}
          <div className="mt-10 space-y-6">
            {/* 1. Project Overview */}
            <section className="rounded-2xl border border-[#303A33] bg-[#171C19] p-6 sm:p-7">
              <div className="mb-3 flex items-center gap-2.5 text-[#9BE15D]">
                <Info className="h-4 w-4" />
                <h2 className="font-display text-lg font-bold text-white">
                  1. Project Overview
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-[#A5AEA8] sm:text-base">
                {project.overview}
              </p>
            </section>

            {/* 2. Problem Statement & 3. Objective */}
            <div className="grid gap-6 md:grid-cols-2">
              <section className="rounded-2xl border border-[#303A33] bg-[#171C19] p-6 sm:p-7">
                <div className="mb-3 flex items-center gap-2.5 text-[#9BE15D]">
                  <Target className="h-4 w-4" />
                  <h2 className="font-display text-lg font-bold text-white">
                    2. Problem Statement
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-[#A5AEA8]">
                  {project.problemStatement}
                </p>
              </section>

              <section className="rounded-2xl border border-[#303A33] bg-[#171C19] p-6 sm:p-7">
                <div className="mb-3 flex items-center gap-2.5 text-[#9BE15D]">
                  <TrendingUp className="h-4 w-4" />
                  <h2 className="font-display text-lg font-bold text-white">
                    3. Objective
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-[#A5AEA8]">
                  {project.objective}
                </p>
              </section>
            </div>

            {/* 4. Technologies Used */}
            <section className="rounded-2xl border border-[#303A33] bg-[#171C19] p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-2.5 text-[#9BE15D]">
                <Cpu className="h-4 w-4" />
                <h2 className="font-display text-lg font-bold text-white">
                  4. Technologies Used
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[#303A33] bg-[#1D2520] px-3.5 py-1.5 font-mono text-xs font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* 5. Implementation */}
            <section className="rounded-2xl border border-[#303A33] bg-[#171C19] p-6 sm:p-7">
              <div className="mb-4 flex items-center gap-2.5 text-[#9BE15D]">
                <Layers className="h-4 w-4" />
                <h2 className="font-display text-lg font-bold text-white">
                  5. Implementation
                </h2>
              </div>
              <ul className="space-y-3">
                {project.implementation.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#A5AEA8] sm:text-base"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#1D2520] font-mono text-[11px] font-semibold text-[#9BE15D]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 6. Key Features & 7. Results */}
            <div className="grid gap-6 md:grid-cols-2">
              <section className="rounded-2xl border border-[#303A33] bg-[#171C19] p-6 sm:p-7">
                <h2 className="mb-4 font-display text-lg font-bold text-white">
                  6. Key Features
                </h2>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#A5AEA8]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#9BE15D]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-[#303A33] bg-[#171C19] p-6 sm:p-7">
                <h2 className="mb-4 font-display text-lg font-bold text-white">
                  7. Results
                </h2>
                <ul className="space-y-3">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#A5AEA8]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#9BE15D]" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                {project.metricsNote ? (
                  <p className="mt-4 rounded-lg border border-dashed border-[#303A33] bg-[#101312] px-3 py-2 font-mono text-[11px] text-[#A5AEA8]">
                    {project.metricsNote}
                  </p>
                ) : null}
              </section>
            </div>

            {/* 8. GitHub Repository */}
            <section className="rounded-2xl border border-[#303A33] bg-[#1D2520] p-6 sm:p-7">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="font-display text-lg font-bold text-white">
                    8. GitHub Repository
                  </h2>
                  <p className="mt-1 text-sm text-[#A5AEA8]">
                    {project.githubUrl
                      ? 'Explore the complete source code, documentation, and notebooks.'
                      : 'Repository link is ready to be configured in src/data/projects.ts.'}
                  </p>
                </div>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-[#9BE15D] px-5 py-3 text-sm font-semibold text-[#101312] transition-colors hover:bg-[#aee879]"
                  >
                    <GithubBrandIcon className="h-4 w-4" />
                    <span>Open Repository</span>
                  </a>
                ) : (
                  <div className="rounded-xl border border-[#303A33] bg-[#101312] px-4 py-2.5 font-mono text-xs text-[#A5AEA8]">
                    Placeholder: <span className="text-[#9BE15D]">githubUrl</span> pending
                  </div>
                )}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
