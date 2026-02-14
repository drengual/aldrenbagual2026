import content from "@/content/content.json";
import process from "@/content/process.json";

// For convenience
export const home = content;

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 shadow-soft">
      {children}
    </div>
  );
}

function List({
  items,
  placeholder,
}: {
  items?: string[];
  placeholder: string;
}) {
  if (!items || items.length === 0) {
    return (
      <p className="text-sm text-[rgba(255,255,255,0.65)]">{placeholder}</p>
    );
  }

  return (
    <ul className="mt-3 space-y-2 text-sm text-[rgba(255,255,255,0.75)]">
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(124,58,237,0.85)]" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  const title =
    process?.meta?.title && process.meta.title.trim().length > 0
      ? process.meta.title
      : "Systems & process";

  const subtitle =
    process?.meta?.subtitle && process.meta.subtitle.trim().length > 0
      ? process.meta.subtitle
      : "I design delivery workflows that reduce ambiguity and improve reliability.";

  return (
    <div className="min-h-screen bg-[#0b0f17]">
      <Header name={home.meta.name} links={home.meta.links} />

      {/* HERO */}
      <section className="relative overflow-hidden py-14 sm:py-18">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-44 left-1/2 h-140 w-140 -translate-x-1/2 rounded-full bg-[rgba(124,58,237,0.16)] blur-3xl" />
        </div>

        <Container>
          <FadeIn>
            <p className="text-sm text-[rgba(255,255,255,0.7)]">Systems</p>

            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[rgba(255,255,255,0.92)] sm:text-5xl">
              {title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[rgba(255,255,255,0.72)] sm:text-lg">
              {subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#contact">Contact</Button>
              <Button href="/#work" variant="secondary">
                View case studies
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <Section
        id="principles"
        title={process?.principles?.title ?? "What I optimize for"}
      >
        <Container>
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(process?.principles?.items ?? []).length > 0 ? (
                process.principles.items.map((p) => (
                  <Card key={p.title}>
                    <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)]">
                      {p.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[rgba(255,255,255,0.72)]">
                      {p.body}
                    </p>
                  </Card>
                ))
              ) : (
                <Card>
                  <p className="text-sm text-[rgba(255,255,255,0.65)]">
                    Add principles content in{" "}
                    <code>src/content/process.json</code>.
                  </p>
                </Card>
              )}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* DELIVERY LOOP */}
      <Section id="loop" title={process?.loop?.title ?? "My delivery loop"}>
        <Container>
          <FadeIn>
            <div className="grid gap-4 lg:grid-cols-2">
              {(process?.loop?.steps ?? []).length > 0 ? (
                process.loop.steps.map((s) => (
                  <Card key={s.title}>
                    <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)]">
                      {s.title}
                    </p>
                    <List
                      items={s.bullets}
                      placeholder="Add 3–5 bullets describing what you do in this step."
                    />
                  </Card>
                ))
              ) : (
                <Card>
                  <p className="text-sm text-[rgba(255,255,255,0.65)]">
                    Add steps in <code>process.loop.steps</code>.
                  </p>
                </Card>
              )}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* TOOLING */}
      <Section
        id="tooling"
        title={process?.tooling?.title ?? "Tooling & habits"}
      >
        <Container>
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(process?.tooling?.items ?? []).length > 0 ? (
                process.tooling.items.map((t) => (
                  <Card key={t.title}>
                    <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)]">
                      {t.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[rgba(255,255,255,0.72)]">
                      {t.body}
                    </p>
                  </Card>
                ))
              ) : (
                <Card>
                  <p className="text-sm text-[rgba(255,255,255,0.65)]">
                    Add tooling items in <code>process.tooling.items</code>.
                  </p>
                </Card>
              )}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA */}
      <section className="py-14 sm:py-18">
        <Container>
          <FadeIn>
            <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-7 shadow-soft">
              <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)]">
                {process?.cta?.title ?? "Want to work together?"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[rgba(255,255,255,0.72)]">
                {process?.cta?.body ??
                  "If you need a reliable developer who can own delivery and reduce ambiguity, let’s talk."}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={process?.cta?.buttons?.[0]?.href ?? "/#contact"}>
                  {process?.cta?.buttons?.[0]?.label ?? "Contact"}
                </Button>
                <Button
                  href={process?.cta?.buttons?.[1]?.href ?? "/#work"}
                  variant="secondary"
                >
                  {process?.cta?.buttons?.[1]?.label ?? "View work"}
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Footer
        name={home.meta.name}
        email={home.meta.email}
        links={home.meta.links}
      />
    </div>
  );
}
