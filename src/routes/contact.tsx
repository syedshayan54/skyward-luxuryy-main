import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TravelEx — Speak with a Concierge" },
      { name: "description", content: "WhatsApp, call, or visit our Peshawar office. A senior consultant will respond within the hour." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>
      <SiteHeader />

      <section className="pt-40 pb-16 lg:pt-48" style={{ backgroundColor: "var(--ink)", color: "var(--ivory)" }}>
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="eyebrow">— Speak with us</div>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            A senior consultant,<br />
            <em className="not-italic gold-gradient">within the hour.</em>
          </h1>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-5 lg:px-10">
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "+92 311 1444 192", href: "https://wa.me/923111444192" },
              { icon: Phone, label: "Call us", value: "+92 311 1444 192", href: "tel:+92915250000" },
              { icon: Mail, label: "Email", value: "info@travelex.pk", href: "mailto:info@travelex.pk" },
              { icon: MapPin, label: "Visit", value: "Peshawar, KP — Pakistan", href: "#" },
            ].map(({ icon: I, label, value, href }) => (
              <a key={label} href={href} className="block border-b pb-6" style={{ borderColor: "color-mix(in oklab, var(--foreground) 12%, transparent)" }}>
                <div className="flex items-center gap-3">
                  <I className="h-4 w-4" style={{ color: "var(--gold)" }} />
                  <div className="eyebrow">{label}</div>
                </div>
                <div className="mt-2 font-display text-2xl">{value}</div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-sm border p-10"
            style={{
              borderColor: "color-mix(in oklab, var(--foreground) 12%, transparent)",
              backgroundColor: "var(--card)",
            }}
          >
            <div className="eyebrow">— Request a Quote</div>
            <h2 className="mt-3 font-display text-3xl">Tell us about your journey</h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="WhatsApp number" name="phone" />
              <Field label="Email" name="email" type="email" />
              <Field label="Destination / Umrah" name="dest" />
              <Field label="Travel month" name="month" />
              <Field label="Travellers" name="people" />
            </div>
            <div className="mt-5">
              <label className="eyebrow">Notes</label>
              <textarea
                rows={4}
                className="mt-2 w-full border-b bg-transparent py-3 outline-none focus:border-current"
                style={{ borderColor: "color-mix(in oklab, var(--foreground) 25%, transparent)" }}
              />
            </div>

            <button
              type="submit"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium"
              style={{ backgroundColor: "var(--ink)", color: "var(--ivory)" }}
            >
              {sent ? "Received — we'll be in touch" : "Send Inquiry"}
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <input
        name={name}
        type={type}
        className="mt-2 w-full border-b bg-transparent py-3 outline-none transition-colors focus:border-current"
        style={{ borderColor: "color-mix(in oklab, var(--foreground) 25%, transparent)" }}
      />
    </label>
  );
}
