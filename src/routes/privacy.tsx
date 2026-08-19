import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CONTACT } from "@/components/site/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vastu by Ashok Rao" },
      {
        name: "description",
        content:
          "How Vastu by Ashok Rao collects, uses and protects the details you share when requesting a Vastu consultation.",
      },
      { property: "og:title", content: "Privacy Policy — Vastu by Ashok Rao" },
      {
        property: "og:description",
        content: "How we handle the details you share when booking a Vastu consultation.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            We collect only the details you choose to share — your name, phone number, city, home
            type and the concerns you describe — so that we can respond with consultation slots and
            prepare for your session.
          </p>
          <p>
            Floor plans, photographs and other documents you send are used solely for your Vastu
            analysis. They are never sold, published or shared with third parties without your
            permission.
          </p>
          <p>
            You may ask us to delete your details and documents at any time by writing to{" "}
            <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}