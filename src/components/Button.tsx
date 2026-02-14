import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  children,
  variant = "primary",
  newTab = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  newTab?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-0";

  const styles: Record<Variant, string> = {
    primary:
      "bg-accent text-white shadow-soft hover:opacity-95 focus:ring-[rgba(124,58,237,0.45)]",
    secondary:
      "bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] hover:bg-[rgba(255,255,255,0.12)] focus:ring-[rgba(255,255,255,0.18)]",
    ghost:
      "text-[rgba(255,255,255,0.75)] hover:text-[rgba(255,255,255,0.92)] hover:bg-[rgba(255,255,255,0.06)] focus:ring-[rgba(255,255,255,0.18)]",
  };

  const isExternal = href.startsWith("http");
  const isHash = href.startsWith("#");
  const isPdf = href.endsWith(".pdf");

  if (isHash) {
    return (
      <a className={`${base} ${styles[variant]}`} href={href}>
        {children}
      </a>
    );
  }

  if (isExternal || newTab || isPdf) {
    return (
      <a
        className={`${base} ${styles[variant]}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={`${base} ${styles[variant]}`} href={href}>
      {children}
    </Link>
  );
}
