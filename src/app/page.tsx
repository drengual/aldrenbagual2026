import content from "@/content/content.json";

// For convenience, create a home object from the content
const home = content;
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { Container } from "@/components/Container";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b0f17]">
      <Header name={home.meta.name} links={home.meta.links} />

      {/* HERO */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-[rgba(124,58,237,0.15)] blur-3xl" />
        </div>

        <Container>
          <FadeIn>
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm text-[rgba(255,255,255,0.7)]">
                  {home.meta.role}
                </p>

                <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[rgba(255,255,255,0.92)] sm:text-5xl">
                  {home.hero.headline}
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[rgba(255,255,255,0.72)] sm:text-lg">
                  {home.hero.subheadline}
                </p>

                <a
                  href={`mailto:${home.hero.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[rgba(124,58,237,0.92)] hover:text-[rgba(124,58,237,1)]"
                >
                  <Mail className="h-4 w-4" />
                  {home.hero.email}
                </a>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href={home.hero.primaryCta.href}>
                    {home.hero.primaryCta.label}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    href={home.hero.secondaryCta.href}
                    variant="secondary"
                  >
                    {home.hero.secondaryCta.label}
                  </Button>
                </div>

                {/* <div className="mt-8 flex flex-wrap gap-2">
                  {home.meta.links.map((l) => (
                    <Button key={l.label} href={l.href} variant="ghost">
                      {l.label}
                    </Button>
                  ))}
                </div> */}
              </div>

              <div className="mx-auto w-full max-w-sm">
                <div className="relative rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-3 shadow-soft">
                  <div className="relative aspect-4/5 overflow-hidden rounded-xl">
                    <SafeImage
                      src={home.hero.portrait.src}
                      alt={home.hero.portrait.alt}
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 420px"
                      fallback={
                        <div className="relative h-full w-full overflow-hidden rounded-xl bg-linear-to-br from-[rgba(124,58,237,0.18)] to-transparent">
                          <div className="absolute inset-0 bg-[rgba(11,15,23,0.65)]" />
                          <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] text-lg font-semibold">
                              AB
                            </div>
                            <p className="mt-4 text-sm font-medium text-[rgba(255,255,255,0.9)]">
                              {home.meta.name}
                            </p>
                            <p className="mt-1 text-xs text-[rgba(255,255,255,0.65)]">
                              {home.meta.role}
                            </p>
                          </div>
                        </div>
                      }
                    />

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[rgba(11,15,23,0.85)] via-transparent to-transparent" />
                  </div>
                  <div className="mt-3 px-1">
                    <p className="text-sm font-medium text-[rgba(255,255,255,0.9)]">
                      {home.meta.name}
                    </p>
                    <p className="mt-1 text-xs text-[rgba(255,255,255,0.65)]">
                      {home.meta.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CREDIBILITY */}
      <Section id="credibility" title={home.credibility.title}>
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <p className="max-w-3xl text-black/75 dark:text-white/75">
              {home.credibility.body}
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {home.credibility.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-xl border border-black/10 dark:border-white/08 bg-gray-100 dark:bg-[rgba(17,24,39,0.6)] p-4 text-sm text-black/78 dark:text-white/78"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title={home.experience.title}>
        <div className="space-y-4">
          {home.experience.roles.map((r, idx) => (
            <FadeIn key={`${r.company}-${r.title}`} delay={idx * 0.05}>
              <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-black/92 dark:text-white/92">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                      {r.company}
                    </p>
                  </div>

                  <p className="text-sm text-black/60 dark:text-white/60">
                    {r.date}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-black/75 dark:text-white/75">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(124,58,237,0.8)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* WORK */}
      <Section id="work" title={home.work.title}>
        <div className="grid gap-4">
          {home.work.items.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.05}>
              <a
                href={item.href}
                className="block overflow-hidden rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 shadow-soft transition hover:bg-white/6 dark:hover:bg-white/06"
              >
                <div className="grid gap-0 sm:grid-cols-[220px_1fr]">
                  <div className="relative h-44 sm:h-full">
                    {item.image ? (
                      <SafeImage
                        src={item.image.src}
                        alt={item.image.alt}
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 220px"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-white/04">
                        <span className="text-xs uppercase tracking-wider text-black/40 dark:text-white/40">
                          Project Preview
                        </span>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[rgba(11,15,23,0.75)] via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-semibold text-black/92 dark:text-white/92">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-black/72 dark:text-white/72">
                          {item.outcome}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-5 w-5 text-black/60 dark:text-white/60" />
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* HOW I WORK */}
      <Section id="how" title={home.how.title}>
        <FadeIn>
          <p className="max-w-3xl text-black/75 dark:text-white/75">
            {home.how.intro}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {home.how.principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-5 shadow-soft"
              >
                <h3 className="text-sm font-semibold text-black/92 dark:text-white/92">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/72 dark:text-white/72">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* SYSTEMS */}
      <Section id="systems" title={home.systems.title}>
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <p className="max-w-3xl text-black/75 dark:text-white/75">
              {home.systems.body}
            </p>
            <div className="mt-5">
              <Button href={home.systems.link.href} variant="secondary">
                {home.systems.link.label}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ABOUT */}
      <Section id="about" title={home.about.title}>
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <p className="max-w-3xl text-black/75 dark:text-white/75">
              {home.about.body}
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* CTA + CONTACT */}
      <Section id="contact" title={home.contact.title}>
        <FadeIn>
          <div className="rounded-xl border border-black/10 dark:border-white/08 bg-white/4 dark:bg-white/04 p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-black/92 dark:text-white/92">
              {home.cta.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-black/72 dark:text-white/72">
              {home.cta.body}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {home.cta.buttons.map((b, idx) => (
                <Button
                  key={b.label}
                  href={b.href}
                  variant={idx === 0 ? "primary" : "secondary"}
                >
                  {b.label}
                </Button>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-[rgba(17,24,39,0.6)] p-5">
              <p className="text-sm text-black/72 dark:text-white/72">
                {home.contact.body}
              </p>
              <a
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-black/92 dark:text-white/92 hover:opacity-90"
                href={`mailto:${home.contact.emailLabel}`}
              >
                <Mail className="h-4 w-4 text-black/92 dark:text-white/92" />
                {home.contact.emailLabel}
              </a>
            </div>
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
