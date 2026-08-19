import { Link } from "@tanstack/react-router";
import { CONTACT } from "./site-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl">Vastu by Ashok Rao</p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Practical, faith-based Vastu guidance for homes across Karnataka and beyond.
            </p>
          </div>

          <div className="text-sm">
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-primary">
                  How It Works
                </a>
              </li>
              <li>
                <a href={CONTACT.youtube} className="hover:text-primary">
                  Free Vastu Tips (YouTube)
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="eyebrow">Legal</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          The Vastu guidance provided is based on traditional Vastu Shastra principles and personal
          belief. Results may vary from person to person. This service is not a substitute for
          professional architectural, legal, or financial advice.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {year} Vastu by Ashok Rao. All rights reserved.
        </p>
      </div>
    </footer>
  );
}