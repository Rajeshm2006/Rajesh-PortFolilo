import { motion, useReducedMotion } from 'framer-motion';
import {
  BarChart3,
  BookOpen,
  Bot,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  FileSpreadsheet,
  GitBranch,
  Layers,
  LineChart,
  PieChart,
  Search,
  Sigma,
  Sparkles,
  Table2,
  Terminal,
  Wrench,
} from 'lucide-react';
import { skillCategories, SkillCategory } from '../data/skills';
import { GithubBrandIcon } from './BrandIcons';
import {
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from './MotionPrimitives';

type IconKey = SkillCategory['skills'][number]['iconKey'];

const ICON_MAP: Record<IconKey, typeof Code2> = {
  code: Code2,
  database: Database,
  cpu: Cpu,
  layers: Layers,
  table: Table2,
  sigma: Sigma,
  sparkles: Sparkles,
  bot: Bot,
  search: Search,
  terminal: Terminal,
  barchart: BarChart3,
  sheet: FileSpreadsheet,
  linechart: LineChart,
  piechart: PieChart,
  compass: Compass,
  gitbranch: GitBranch,
  github: GithubBrandIcon as unknown as typeof Code2,
  vscode: Wrench,
  book: BookOpen,
  cloud: Cloud,
};

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="border-b border-[#303A33]/70 bg-[#101312] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Technical Stack"
          title="Technologies I Work With"
          description="Practical tools and frameworks across machine learning, data analytics, and software engineering."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <StaggerItem key={category.id}>
              <motion.div
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col rounded-2xl border border-[#303A33] bg-[#171C19] p-6 transition-colors duration-200 hover:border-[#9BE15D]/50 sm:p-7"
              >
                <div className="mb-5 border-b border-[#303A33] pb-4">
                  <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#A5AEA8]">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => {
                    const Icon = ICON_MAP[skill.iconKey] ?? Code2;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={
                          prefersReducedMotion ? undefined : { x: 2 }
                        }
                        transition={{ duration: 0.15 }}
                        className="group flex items-center gap-3 rounded-xl border border-[#303A33] bg-[#1D2520] px-3.5 py-3 transition-colors duration-200 hover:border-[#9BE15D]/60"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#101312] text-[#9BE15D] transition-colors group-hover:bg-[#9BE15D]/15">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="truncate text-sm font-medium text-white">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
