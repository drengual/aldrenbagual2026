import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-14 sm:py-16">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs tracking-widest text-[rgba(255,255,255,0.6)]">
              {eyebrow.toUpperCase()}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold text-[rgba(255,255,255,0.92)] sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
