import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  FolderGit2,
  GitFork,
  Star,
} from 'lucide-react';
import { GithubBrandIcon } from './BrandIcons';
import { personalInfo } from '../data/personal';
import { featuredRepositories, GithubRepositoryCard } from '../data/projects';
import {
  RevealSection,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from './MotionPrimitives';

interface PublicGithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  fork: boolean;
}

const GITHUB_USERNAME = 'Rajeshm2006';

export function Github() {
  const [liveRepos, setLiveRepos] = useState<PublicGithubRepo[] | null>(null);
  const [repoNotice, setRepoNotice] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPublicRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          {
            signal: controller.signal,
            headers: { Accept: 'application/vnd.github+json' },
          }
        );

        if (!response.ok) return;
        const data = (await response.json()) as PublicGithubRepo[];
        const nonForkRepos = Array.isArray(data)
          ? data.filter((repo) => !repo.fork).slice(0, 6)
          : [];

        if (nonForkRepos.length > 0) {
          setLiveRepos(nonForkRepos);
        }
      } catch {
        // Silently fall back to editable static repository cards when offline/rate-limited.
      }
    }

    fetchPublicRepos();
    return () => controller.abort();
  }, []);

  const renderStaticRepoCard = (repo: GithubRepositoryCard) => {
    const hasUrl = Boolean(repo.url);

    return (
      <StaggerItem key={repo.name} className="flex">
        <motion.div
          whileHover={prefersReducedMotion ? undefined : { y: -3 }}
          transition={{ duration: 0.2 }}
          className="flex w-full flex-col rounded-2xl border border-[#303A33] bg-[#171C19] p-6 transition-colors duration-200 hover:border-[#9BE15D]/50"
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[#9BE15D]">
              <FolderGit2 className="h-4 w-4" />
              <span className="font-mono text-xs">{repo.status}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A5AEA8]">
              <span className="h-2 w-2 rounded-full bg-[#9BE15D]" />
              {repo.language}
            </span>
          </div>

          <h3 className="font-mono text-base font-semibold text-white">
            {repo.name}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-[#A5AEA8]">
            {repo.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {repo.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-md border border-[#303A33] bg-[#1D2520] px-2 py-0.5 font-mono text-[11px] text-[#A5AEA8]"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-5">
            {hasUrl ? (
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#9BE15D] transition-opacity hover:opacity-80"
              >
                <span>Open Repository</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() =>
                  setRepoNotice((prev) =>
                    prev === repo.name ? null : repo.name
                  )
                }
                className="inline-flex items-center gap-2 text-xs font-medium text-[#A5AEA8] transition-colors hover:text-white"
              >
                <Code2 className="h-3.5 w-3.5 text-[#9BE15D]" />
                <span>Repository link configurable</span>
              </button>
            )}

            {repoNotice === repo.name && !hasUrl ? (
              <p className="mt-2.5 rounded-lg border border-[#303A33] bg-[#101312] px-3 py-2 font-mono text-[11px] text-[#A5AEA8]">
                Set <span className="text-[#9BE15D]">url</span> for{' '}
                <span className="text-white">{repo.name}</span> in{' '}
                <span className="text-white">src/data/projects.ts</span>.
              </p>
            ) : null}
          </div>
        </motion.div>
      </StaggerItem>
    );
  };

  return (
    <section
      id="github"
      className="border-b border-[#303A33]/70 bg-[#101312] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Open Source & Code"
            title="Building, Learning & Contributing"
            description="Exploring machine learning systems, analytics workflows, and full-stack AI applications on GitHub."
          />

          <RevealSection className="mb-12">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-[#303A33] bg-[#171C19] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#9BE15D]/60 hover:bg-[#1D2520]"
            >
              <GithubBrandIcon className="h-4 w-4 text-[#9BE15D]" />
              <span>@{GITHUB_USERNAME}</span>
              <ArrowUpRight className="h-4 w-4 text-[#A5AEA8]" />
            </a>
          </RevealSection>
        </div>

        {/* Repository Grid: Live public GitHub repos when available, else static editable cards */}
        {liveRepos && liveRepos.length > 0 ? (
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liveRepos.map((repo) => (
              <StaggerItem key={repo.id} className="flex">
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group flex w-full flex-col rounded-2xl border border-[#303A33] bg-[#171C19] p-6 transition-colors duration-200 hover:border-[#9BE15D]/60"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-[#9BE15D]">
                      <FolderGit2 className="h-4 w-4" />
                      <span className="font-mono text-xs">Public Repo</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#A5AEA8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#9BE15D]" />
                  </div>

                  <h3 className="font-mono text-base font-semibold text-white group-hover:text-[#9BE15D]">
                    {repo.name}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#A5AEA8]">
                    {repo.description ||
                      'Repository hosted on GitHub — view source code and documentation.'}
                  </p>

                  <div className="mt-auto flex items-center gap-4 border-t border-[#303A33] pt-4 text-xs text-[#A5AEA8]">
                    {repo.language ? (
                      <span className="inline-flex items-center gap-1.5 font-mono">
                        <span className="h-2 w-2 rounded-full bg-[#9BE15D]" />
                        {repo.language}
                      </span>
                    ) : null}
                    <span className="inline-flex items-center gap-1 font-mono">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono">
                      <GitFork className="h-3.5 w-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredRepositories.map(renderStaticRepoCard)}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
