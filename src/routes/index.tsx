import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Compass,
  Home,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  PlayCircle,
  Quote,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { CONTACT, FAQS, SERVICES, STEPS, TESTIMONIALS } from "@/components/site/site-data";
import heroHome from "@/assets/hero-home.jpg";
import ashokRao from "@/assets/ashok-rao.jpg";
import mandala from "@/assets/mandala.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vastu by Ashok Rao — Home Vastu Consultations in Kannada" },
      {
        name: "description",
        content:
          "Authentic Vastu Shastra guidance for homes: consultations, new flat selection and renovation planning. Simple Kannada explanations and practical remedies.",
      },
      { property: "og:title", content: "Vastu by Ashok Rao — Authentic Vastu Guidance" },
      {
        property: "og:description",
        content:
          "Create a harmonious home with practical Vastu consultations in Kannada. 100+ homes reviewed across Karnataka.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Resources />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="surface-warm relative overflow-hidden">
      <img
        src={mandala}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 w-[34rem] opacity-[0.07]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <p className="eyebrow">Vastu Shastra Consultant · Karnataka</p>
          <h1 className="mt-5 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Create a Harmonious Home with Authentic Vastu Guidance
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Expert Vastu Shastra consultations and practical tips in Kannada to bring peace,
            prosperity, and positive energy into your home.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">Book a Vastu Consultation</a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href={CONTACT.youtube} target="_blank" rel="noreferrer">
                <PlayCircle /> Watch Free Vastu Tips
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Trusted by homeowners across Karnataka · 100+ homes reviewed
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroHome}
              alt="Sunlit Indian home entrance with a brass lamp, rangoli and tulsi plant"
              width={1408}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 hidden items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-soft sm:flex">
            <Compass className="size-5 text-primary" />
            <span className="text-sm">
              Direction-based advice for
              <span className="block font-medium text-foreground">entrance, kitchen & puja room</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 lg:grid-cols-[0.85fr_1fr]">
        <div className="overflow-hidden rounded-[2rem] border border-border">
          <img
            src={ashokRao}
            alt="Ashok Rao, Vastu consultant, at his study with home floor plans"
            loading="lazy"
            width={1008}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Meet Your Vastu Guide – Ashok Rao</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Ashok Rao is a dedicated Vastu expert with years of experience in analyzing homes and
            suggesting practical, faith-based Vastu solutions. Through his YouTube channel and
            social media, he shares easy-to-understand Vastu tips in Kannada, helping families
            create balanced and positive living spaces.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            His approach combines traditional Vastu principles with real-world home layouts,
            focusing on directions, room placement, entrances, colors, and daily habits that
            influence energy flow in your house.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Specializes in home Vastu reviews and corrections",
              "Clear, simple explanations in Kannada",
              "Focus on practical changes, not just theory",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                  <Check className="size-3.5 text-primary" />
                </span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-secondary/50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Vastu Services for Your Home</h2>
          <p className="mt-4 text-muted-foreground">
            From quick tips to complete home Vastu analysis, choose the support that fits your
            needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-[1.75rem] border border-border bg-card p-8 shadow-soft"
            >
              <span className="eyebrow">{service.tag}</span>
              <h3 className="mt-3 text-2xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-6 text-sm font-medium text-foreground">What's included</p>
              <ul className="mt-3 space-y-2.5">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-2">
                <Button asChild variant="soft" size="lg" className="rounded-full">
                  <a href="#contact">{service.cta}</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div className="max-w-2xl">
          <p className="eyebrow">Process</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">How a Vastu Consultation Works</h2>
        </div>
        <ol className="mt-12 space-y-8 border-l border-border pl-8">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[3.05rem] flex size-9 items-center justify-center rounded-full bg-primary font-display text-sm text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="text-xl">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Resources() {
  const topics = [
    "Home Vastu tours and real case studies",
    "Water flow, entrance, and direction tips",
    "Bedroom, kitchen, and puja room Vastu",
    "Common Vastu mistakes and easy fixes",
  ];
  return (
    <section id="resources" className="scroll-mt-20 bg-primary py-24 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary-foreground/70 uppercase">
            Free Resources
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Learn Vastu Basics for Free</h2>
          <p className="mt-5 leading-relaxed text-primary-foreground/85">
            Start with simple Vastu tips on our YouTube channel and Instagram. Regular videos cover
            topics like:
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="soft" size="xl">
              <a href={CONTACT.youtube} target="_blank" rel="noreferrer">
                <Youtube /> Visit Our YouTube Channel
              </a>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                <Instagram /> Instagram
              </a>
            </Button>
          </div>
        </div>
        <ul className="grid gap-3">
          {topics.map((topic) => (
            <li
              key={topic}
              className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 px-5 py-4"
            >
              <PlayCircle className="size-5 shrink-0" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow">Client stories</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">What Homeowners Say</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="rounded-[1.75rem] border border-border bg-card p-8 shadow-soft"
            >
              <Quote className="size-6 text-accent" />
              <blockquote className="mt-4 text-lg leading-relaxed">"{item.quote}"</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                – {item.name}, {item.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-secondary/50 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <p className="eyebrow">Questions</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.q} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="eyebrow">Booking</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Get in Touch</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Ready to align your home with positive Vastu energy? Share your details, and we'll get
            back to you with available consultation slots.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary"
            >
              <MessageCircle className="size-5 text-primary" />
              <span>
                <span className="block text-sm text-muted-foreground">WhatsApp</span>
                <span className="font-medium">{CONTACT.phone}</span>
              </span>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary"
            >
              <Phone className="size-5 text-primary" />
              <span>
                <span className="block text-sm text-muted-foreground">Call</span>
                <span className="font-medium">{CONTACT.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary"
            >
              <Mail className="size-5 text-primary" />
              <span>
                <span className="block text-sm text-muted-foreground">Email</span>
                <span className="font-medium">{CONTACT.email}</span>
              </span>
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <Home className="size-4" />
            Home visits across Bengaluru, Mysuru and nearby districts.
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-border bg-card p-8 shadow-soft">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
