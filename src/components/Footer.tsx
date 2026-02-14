import { Container } from "./Container";
import { Button } from "./Button";

export function Footer({
  name,
  email,
  links,
}: {
  name: string;
  email: string;
  links: { label: string; href: string }[];
}) {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">{name}</div>
            <div className="mt-1 text-sm text-[rgba(255,255,255,0.7)]">
              {email}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {links.map((l) => (
              <Button key={l.label} href={l.href} variant="secondary">
                {l.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
