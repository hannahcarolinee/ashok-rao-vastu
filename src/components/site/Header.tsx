import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "./site-data";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Free Tips", href: "/#resources" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft font-display text-lg text-primary">
            ॐ
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base text-foreground">Vastu by Ashok Rao</span>
            <span className="block text-[11px] tracking-widest text-muted-foreground uppercase">
              Vastu Shastra Guidance
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary md:flex"
          >
            <Phone className="size-4" />
            {CONTACT.phone}
          </a>
          <Button asChild variant="hero" size="lg" className="rounded-full">
            <a href="/#contact">Book Consultation</a>
          </Button>
        </div>
      </div>
    </header>
  );
}