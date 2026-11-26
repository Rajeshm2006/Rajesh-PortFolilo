import { Mail } from 'lucide-react';
import { GithubBrandIcon, LinkedinBrandIcon } from './BrandIcons';
import { personalInfo } from '../data/personal';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#303A33] bg-[#101312] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <div className="font-display text-sm font-bold tracking-wider text-white">
            {personalInfo.brandName}
          </div>
          <p className="mt-1 text-xs text-[#A5AEA8]">
            &copy; {year} {personalInfo.name}. {personalInfo.title}.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303A33] bg-[#171C19] text-[#A5AEA8] transition-colors hover:border-[#9BE15D]/60 hover:text-[#9BE15D]"
          >
            <GithubBrandIcon className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303A33] bg-[#171C19] text-[#A5AEA8] transition-colors hover:border-[#9BE15D]/60 hover:text-[#9BE15D]"
          >
            <LinkedinBrandIcon className="h-4 w-4" />
          </a>
          {personalInfo.socials.email ? (
            <a
              href={`mailto:${personalInfo.socials.email}`}
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303A33] bg-[#171C19] text-[#A5AEA8] transition-colors hover:border-[#9BE15D]/60 hover:text-[#9BE15D]"
            >
              <Mail className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
