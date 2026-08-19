import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Vastu by Ashok Rao" },
      {
        name: "description",
        content:
          "Terms covering Vastu consultations, scheduling, payments and the nature of the guidance offered by Ashok Rao.",
      },
      { property: "og:title", content: "Terms of Service — Vastu by Ashok Rao" },
      {
        property: "og:description",
        content: "Terms covering Vastu consultations, scheduling and the guidance offered.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl">Terms of Service</h1>
        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Consultations are scheduled by mutual agreement after you submit an enquiry. Please
            share accurate floor plans and direction details — recommendations depend on them.
          </p>
          <p>
            Guidance is based on traditional Vastu Shastra principles and personal belief. Results
            may vary from person to person, and the service is not a substitute for professional
            architectural, legal, structural or financial advice.
          </p>
          <p>
            Rescheduling is possible with reasonable notice. Recordings, notes and reports shared
            with you are for your personal use and may not be redistributed commercially.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}