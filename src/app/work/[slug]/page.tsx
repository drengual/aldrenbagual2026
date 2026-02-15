import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { SafeImage } from "@/components/SafeImage";

import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects/data";
import type { ProjectContent } from "@/lib/projects/types";

import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import content from "@/content/content.json";

// For convenience
export const home = content;

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function asText(v: unknown, fallback: string): string {
  return isNonEmptyString(v) ? v : fallback;
}

function ListOrPlaceholder({
  items,
  placeholder,
}: {
  items?: string[];
  placeholder: string;
}) {
  if (!items || items.length === 0) {
    return (
      <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-5 shadow-soft">
        <p className="text-sm text-black/65 dark:text-white/65">
          {placeholder}
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-2 text-sm text-black/75 dark:text-white/75">
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(124,58,237,0.8)]" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

function KeyValue({
  label,
  value,
  placeholder,
}: {
  label: string;
  value?: string;
  placeholder: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-black/55 dark:text-white/55">
        {label}
      </p>
      <p className="mt-1 text-sm text-black/80 dark:text-white/80">
        {asText(value, placeholder)}
      </p>
    </div>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const title = asText(project.title, "Project case study");
  const summary = asText(
    project.summary,
    "A production project focused on clarity, maintainability, and real-world delivery.",
  );

  const meta = project.meta ?? {};
  const overview = project.overview ?? {};
  const arch = project.architecture ?? {};
  const links = project.links ?? {};

  const stackText =
    meta.stack && meta.stack.length > 0
      ? meta.stack.slice(0, 5).join(" • ")
      : "";

  const liveHref = isNonEmptyString(links.live) ? links.live : "";
  const repoHref = isNonEmptyString(links.repo) ? links.repo : "";

  return (
    <div className="min-h-screen bg-[#0b0f17]">
      <Header name={home.meta.name} links={home.meta.links} />

      {/* HERO */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-[rgba(124,58,237,0.14)] blur-3xl" />
        </div>

        <Container>
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <p className="text-sm text-[rgba(255,255,255,0.7)]">
                  Case study
                </p>

                <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[rgba(255,255,255,0.92)] sm:text-5xl">
                  {title}
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[rgba(255,255,255,0.72)] sm:text-lg">
                  {summary}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="/#work">
                    Back to Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  {liveHref ? (
                    <Button href={liveHref} variant="secondary">
                      Live Site
                    </Button>
                  ) : null}

                  {repoHref ? (
                    <Button href={repoHref} variant="secondary">
                      Repo
                    </Button>
                  ) : null}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 shadow-soft">
                    <div className="grid gap-5">
                      <KeyValue
                        label="Role"
                        value={meta.role}
                        placeholder="Contributor"
                      />
                      <KeyValue
                        label="Environment"
                        value={meta.environment}
                        placeholder="Production"
                      />
                      <KeyValue
                        label="Duration"
                        value={meta.duration}
                        placeholder="—"
                      />
                      <KeyValue
                        label="Stack"
                        value={stackText}
                        placeholder="Web stack"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 shadow-soft">
                    <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)]">
                      Quick overview
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[rgba(255,255,255,0.72)]">
                      {asText(
                        overview.scope,
                        "Scope placeholder — describe what the system does and who it served.",
                      )}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[rgba(255,255,255,0.72)]">
                      <span className="font-semibold text-[rgba(255,255,255,0.86)]">
                        Owned:
                      </span>{" "}
                      {asText(
                        overview.responsibility,
                        "Responsibility placeholder — list what you owned end-to-end.",
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-full max-w-sm">
                <div className="relative rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-3 shadow-soft">
                  <div className="relative aspect-4/5 overflow-hidden rounded-xl">
                    {project.heroImage ? (
                      <SafeImage
                        src={project.heroImage.src}
                        alt={project.heroImage.alt}
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 90vw, 420px"
                        fallback={
                          <div className="relative h-full w-full overflow-hidden rounded-xl bg-linear-to-br from-[rgba(124,58,237,0.18)] to-transparent">
                            <div className="absolute inset-0 bg-[rgba(11,15,23,0.65)]" />
                            <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
                              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] text-lg font-semibold text-[rgba(255,255,255,0.9)]">
                                PRJ
                              </div>
                              <p className="mt-4 text-sm font-medium text-[rgba(255,255,255,0.9)]">
                                Project preview
                              </p>
                              <p className="mt-1 text-xs text-[rgba(255,255,255,0.65)]">
                                Add /public images later
                              </p>
                            </div>
                          </div>
                        }
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[rgba(255,255,255,0.04)]">
                        <span className="text-xs uppercase tracking-wider text-[rgba(255,255,255,0.4)]">
                          Project Preview
                        </span>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[rgba(11,15,23,0.85)] via-transparent to-transparent" />
                  </div>

                  {/* Video/Proof Section */}
                  {project.video ? (
                    <div className="mt-3">
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-[rgba(124,58,237,0.15)] px-3 py-2 text-sm font-medium text-[rgba(124,58,237,0.92)] transition hover:bg-[rgba(124,58,237,0.25)]"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Watch Demo Video
                      </a>
                    </div>
                  ) : null}

                  <div className="mt-3 px-1">
                    <p className="text-sm font-medium text-[rgba(255,255,255,0.9)]">
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-[rgba(255,255,255,0.65)]">
                      {asText(meta.environment, "Production")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* PROBLEM */}
      <Section id="problem" title="The problem">
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <p className="max-w-3xl text-black/75 dark:text-white/75">
              {asText(
                project.problem,
                "Add 2–4 sentences describing what was broken, slow, unclear, risky, or costly — and why it mattered.",
              )}
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* CONSTRAINTS */}
      <Section id="constraints" title="Constraints">
        <FadeIn>
          <ListOrPlaceholder
            items={project.constraints}
            placeholder="Add 3–6 constraints: time pressure, stakeholders, legacy systems, infrastructure limits, team size, content workflows, etc."
          />
        </FadeIn>
      </Section>

      {/* APPROACH */}
      <Section id="approach" title="Approach">
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <p className="max-w-3xl text-black/75 dark:text-white/75">
              {asText(
                project.approach,
                "Explain your thinking: tradeoffs, why you chose X over Y, and how you prioritized maintainability and delivery.",
              )}
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ARCHITECTURE */}
      <Section id="architecture" title="System architecture">
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <KeyValue
                label="Frontend"
                value={arch.frontend}
                placeholder="—"
              />
              <KeyValue label="CMS" value={arch.cms} placeholder="—" />
              <KeyValue label="Data" value={arch.data} placeholder="—" />
              <KeyValue
                label="Deployment"
                value={arch.deployment}
                placeholder="—"
              />
            </div>

            {!arch.frontend && !arch.cms && !arch.data && !arch.deployment ? (
              <p className="mt-4 text-sm text-black/65 dark:text-white/65">
                Add a simple breakdown: frontend, CMS, data layer, deployment,
                CI/CD — keep it calm and readable.
              </p>
            ) : null}
          </div>
        </FadeIn>
      </Section>

      {/* EXECUTION */}
      <Section id="execution" title="Execution">
        <FadeIn>
          <ListOrPlaceholder
            items={project.execution}
            placeholder="Add 4–8 bullets of what you built/owned: modules, workflows, deployment setup, patterns, reliability improvements."
          />
        </FadeIn>
      </Section>

      {/* OUTCOMES */}
      <Section id="outcomes" title="Outcomes">
        <FadeIn>
          <ListOrPlaceholder
            items={project.outcomes}
            placeholder="Add 2–6 outcomes. Even without numbers, be specific: what improved, what became easier, what risk was reduced."
          />
        </FadeIn>
      </Section>

      {/* REFLECTION */}
      <Section id="reflection" title="Reflection">
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <p className="max-w-3xl text-black/75 dark:text-white/75">
              {asText(
                project.reflection,
                "Add what you’d improve next, what you learned, and what you’d do differently. This signals seniority.",
              )}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/#work">View more work</Button>
            <Button href="/#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Footer
        name={home.meta.name}
        email={home.meta.email}
        links={home.meta.links}
      />
    </div>
  );
}
