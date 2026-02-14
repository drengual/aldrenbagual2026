import { Container } from "./Container";
import { Button } from "./Button";
import Image from "next/image";

export function Header({
  name,
  links,
}: {
  name: string;
  links: { label: string; href: string }[];
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-[#0b0f17]/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-[rgba(255,255,255,0.92)]"
          >
            {/* <Image
              src="/AldrenBagual_Logo.png"
              alt="Aldren Bagual Logo"
              width={40}
              height={40}
              className="h-7 object-cover scale-150 w-auto"
            /> */}
            <span>{name}</span>
          </a>

          <nav className="hidden items-center gap-2 sm:flex">
            {links.map((l) => (
              <Button key={l.label} href={l.href} variant="ghost">
                {l.label}
              </Button>
            ))}
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </nav>

          <div className="sm:hidden">
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
