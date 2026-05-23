import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Check, MessageCircle, ArrowUpRight } from "lucide-react";
import madinah from "@/assets/umrah-madinah.jpg";
import hero from "@/assets/hero-kaaba.jpg";
import pattern from "@/assets/pattern-arabesque.jpg";

export const Route = createFileRoute("/umrah")({
  head: () => ({
    meta: [
      { title: "Umrah Packages from Pakistan — TravelEx" },
      { name: "description", content: "Economy, Standard and Premium Umrah packages from Peshawar, Islamabad and Lahore. 5★ Haram-front hotels, business-class flights, private transfers." },
      { property: "og:title", content: "Umrah Packages — TravelEx Pakistan" },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: Umrah,
});

const packages = [
  {
    tier: "Economy",
    price: "285,000",
    nights: "14 Nights",
    color: "var(--muted-foreground)",
    features: [
      "Direct economy flight ex-Karachi/Islamabad",
      "3★ hotel · 5 min walk to Haram",
      "Group transfers Jeddah – Makkah – Madinah",
      "Standard Umrah visa & insurance",
      "Pakistani ground host",
    ],
  },
  {
    tier: "Standard",
    featured: true,
    price: "425,000",
    nights: "14 Nights",
    color: "var(--emerald)",
    features: [
      "Direct economy flight (preferred carriers)",
      "4★ hotel · Haram-view rooms",
      "Daily breakfast & dinner buffet",
      "Premium Umrah visa & travel insurance",
      "Private city tours · Ziyarat included",
      "Dedicated 24/7 WhatsApp concierge",
    ],
  },
  {
    tier: "Premium",
    price: "695,000",
    nights: "14 Nights",
    color: "var(--gold)",
    features: [
      "Business-class flights",
      "5★ Haram-front hotel · Suite available",
      "Full board with private dining option",
      "Private chauffeured transfers throughout",
      "VIP Umrah visa & Ziyarat with scholar",
      "Personal concierge in Makkah & Madinah",
    ],
  },
];

function Umrah() {
  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[75vh] min-h-[520px] w-full overflow-hidden">
        <img src={hero} alt="Kaaba" className="absolute inset-0 h-full w-full object-cover animate-ken" />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, color-mix(in oklab, var(--ink) 55%, transparent), var(--ink))",
        }} />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 lg:px-10">
          <div className="eyebrow animate-fade-up">— Umrah · 1447 H</div>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] animate-fade-up delay-1 sm:text-6xl lg:text-7xl"
              style={{ color: "var(--ivory)" }}>
            Your sacred journey,<br />
            <em className="not-italic gold-gradient">arranged with grace.</em>
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up delay-2" style={{ color: "color-mix(in oklab, var(--ivory) 80%, transparent)" }}>
            Three tiers, one promise: nothing between you and your worship. Visas,
            flights, hotels, transport, and a Pakistani host — handled.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.tier}
                className={`relative flex flex-col rounded-sm border bg-card p-10 transition-all ${p.featured ? "lg:-translate-y-4 lg:shadow-2xl" : ""}`}
                style={{
                  borderColor: p.featured ? "var(--gold)" : "color-mix(in oklab, var(--foreground) 12%, transparent)",
                  backgroundColor: p.featured ? "var(--ink)" : "var(--card)",
                  color: p.featured ? "var(--ivory)" : "var(--foreground)",
                }}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-10 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em]"
                       style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}>
                    Most chosen
                  </div>
                )}
                <div className="eyebrow" style={{ color: p.color }}>— {p.nights}</div>
                <h3 className="mt-3 font-display text-4xl">{p.tier}</h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-sm opacity-70">From PKR</span>
                  <span className="font-display text-4xl">{p.price}</span>
                  <span className="text-sm opacity-70">/ person</span>
                </div>

                <ul className="mt-8 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: p.featured ? "var(--gold)" : "var(--emerald)" }} />
                      <span style={{ color: p.featured ? "color-mix(in oklab, var(--ivory) 80%, transparent)" : "color-mix(in oklab, var(--foreground) 78%, transparent)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/923111444192"
                  className="mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all"
                  style={
                    p.featured
                      ? { backgroundColor: "var(--gold)", color: "var(--ink)" }
                      : { backgroundColor: "var(--ink)", color: "var(--ivory)" }
                  }
                >
                  <MessageCircle className="h-4 w-4" /> Reserve via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MADINAH FEATURE */}
      <section className="relative py-28 lg:py-36" style={{ backgroundColor: "var(--ink)", color: "var(--ivory)" }}>
        <div aria-hidden className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${pattern})`, backgroundSize: "400px" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="eyebrow">— Ziyarat · Madinah Al-Munawwarah</div>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Days of <em className="not-italic gold-gradient">stillness</em> beneath the green dome.
            </h2>
            <p className="mt-6 max-w-lg" style={{ color: "color-mix(in oklab, var(--ivory) 75%, transparent)" }}>
              Every package includes a minimum of four nights in Madinah, with
              hotels chosen for proximity, quiet, and respect. Optional guided Ziyarat
              with a Pakistani scholar familiar with our cultural questions.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Quba Mosque", "Mount Uhud", "Masjid al-Qiblatayn", "Seven Mosques", "Date Farms", "Jannat al-Baqi"].map((z) => (
                <li key={z} className="flex items-center gap-3 text-sm">
                  <span className="h-1 w-3" style={{ backgroundColor: "var(--gold)" }} />
                  {z}
                </li>
              ))}
            </ul>
          </div>
          <img src={madinah} alt="Madinah" className="h-[560px] w-full rounded-sm object-cover" loading="lazy" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Need a date that&apos;s not on the brochure?
          </h2>
          <p className="mt-5" style={{ color: "color-mix(in oklab, var(--foreground) 70%, transparent)" }}>
            We build private Umrah itineraries year-round for families, corporates, and groups.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium"
                style={{ backgroundColor: "var(--ink)", color: "var(--ivory)" }}>
            Begin a Private Itinerary <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
