import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight } from "lucide-react";
import destTurkey from "@/assets/dest-turkey.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destPakistan from "@/assets/dest-pakistan.jpg";
import destMalaysia from "@/assets/dest-malaysia.jpg";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "International & Domestic Tours — TravelEx Pakistan" },
      { name: "description", content: "Curated tours to Türkiye, UAE, Malaysia, Baku, Thailand and Northern Pakistan. Honeymoons, family escapes and bespoke itineraries." },
      { property: "og:title", content: "Curated Tours — TravelEx Pakistan" },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: Tours,
});

const tours = [
  { name: "Istanbul & Cappadocia", country: "Türkiye", duration: "8 nights", from: "395,000", img: destTurkey, tag: "Heritage" },
  { name: "Dubai · Yacht & Desert", country: "UAE", duration: "5 nights", from: "275,000", img: destDubai, tag: "Modern Luxury" },
  { name: "Hunza · Skardu · Khaplu", country: "Pakistan", duration: "9 nights", from: "185,000", img: destPakistan, tag: "Mountain Escape" },
  { name: "Langkawi & Kuala Lumpur", country: "Malaysia", duration: "7 nights", from: "320,000", img: destMalaysia, tag: "Tropical" },
  { name: "Baku & The Caucasus", country: "Azerbaijan", duration: "6 nights", from: "245,000", img: destTurkey, tag: "Honeymoon" },
  { name: "Phuket & Phi Phi", country: "Thailand", duration: "7 nights", from: "295,000", img: destMalaysia, tag: "Island Life" },
];

function Tours() {
  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>
      <SiteHeader />

      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <img src={destDubai} alt="Tours" className="absolute inset-0 h-full w-full object-cover animate-ken" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--ink) 50%, transparent), var(--ink))" }} />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 lg:px-10">
          <div className="eyebrow animate-fade-up">— The World Collection</div>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] animate-fade-up delay-1 sm:text-6xl lg:text-7xl"
              style={{ color: "var(--ivory)" }}>
            Discover the world,<br />
            <em className="not-italic gold-gradient">without the worry.</em>
          </h1>
        </div>
      </section>

      <section className="py-24 lg:py-32" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
            {tours.map((t) => (
              <article key={t.name} className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.name}
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                       loading="lazy" />
                  <div className="absolute left-5 top-5 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em]"
                       style={{ backgroundColor: "color-mix(in oklab, var(--ink) 80%, transparent)", color: "var(--gold)" }}>
                    {t.tag}
                  </div>
                </div>
                <div className="mt-6 flex items-end justify-between gap-4 border-b pb-6"
                     style={{ borderColor: "color-mix(in oklab, var(--foreground) 15%, transparent)" }}>
                  <div>
                    <div className="eyebrow">— {t.country} · {t.duration}</div>
                    <h3 className="mt-3 font-display text-3xl">{t.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.7rem] uppercase tracking-[0.2em] opacity-60">From PKR</div>
                    <div className="font-display text-2xl" style={{ color: "var(--emerald)" }}>{t.from}</div>
                  </div>
                </div>
                <a href="https://wa.me/923111444192"
                   className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em]">
                  Inquire on WhatsApp <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--ink)", color: "var(--ivory)" }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="eyebrow">— Bespoke</div>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Don&apos;t see your dream itinerary?
          </h2>
          <p className="mt-5" style={{ color: "color-mix(in oklab, var(--ivory) 70%, transparent)" }}>
            Our custom tour atelier crafts one-of-a-kind journeys across 30+ countries.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium"
                style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}>
            Design My Journey <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
