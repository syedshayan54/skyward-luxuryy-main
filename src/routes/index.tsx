import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight, Shield, Sparkles, Compass, MessageCircle } from "lucide-react";
import heroKaaba from "@/assets/hero-kaaba.jpg";
import umrahMadinah from "@/assets/umrah-madinah.jpg";
import destTurkey from "@/assets/dest-turkey.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destPakistan from "@/assets/dest-pakistan.jpg";
import destMalaysia from "@/assets/dest-malaysia.jpg";
import pattern from "@/assets/pattern-arabesque.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TravelEx Pakistan — A Decade of Luxury Travel & Umrah" },
      { name: "description", content: "Bespoke Umrah pilgrimages and curated international escapes from Peshawar. Ten years of trust, IATA certified." },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: Home,
});

const destinations = [
  { name: "Saudi Arabia", tagline: "Sacred Journeys", img: umrahMadinah, to: "/umrah" },
  { name: "Türkiye", tagline: "Where Continents Meet", img: destTurkey, to: "/tours" },
  { name: "United Arab Emirates", tagline: "Modern Opulence", img: destDubai, to: "/tours" },
  { name: "Northern Pakistan", tagline: "Untouched Majesty", img: destPakistan, to: "/tours" },
  { name: "Malaysia", tagline: "Tropical Sanctuary", img: destMalaysia, to: "/tours" },
];

function Home() {
  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden">
        <video
          src={heroVideo.url}
          poster={heroKaaba}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, color-mix(in oklab, var(--ink) 55%, transparent) 0%, color-mix(in oklab, var(--ink) 35%, transparent) 45%, var(--ink) 100%)",
        }} />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32">
          <div className="max-w-3xl">
            <div className="eyebrow animate-fade-up">— Est. Peshawar · 2015</div>
            <h1
              className="mt-6 font-display text-5xl leading-[1.02] tracking-tight animate-fade-up delay-1 sm:text-6xl lg:text-[5.5rem]"
              style={{ color: "var(--ivory)" }}
            >
              The journey of a <em className="not-italic gold-gradient">lifetime</em>,<br />
              handled with quiet excellence.
            </h1>
            <p
              className="mt-8 max-w-xl text-base leading-relaxed animate-fade-up delay-2 sm:text-lg"
              style={{ color: "color-mix(in oklab, var(--ivory) 78%, transparent)" }}
            >
              A decade of crafting sacred Umrah pilgrimages and curated international
              escapes for Pakistan&apos;s most discerning travellers.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up delay-3">
              <Link
                to="/umrah"
                className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-all hover:gap-4"
                style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
              >
                Explore Umrah Packages
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <a
                href="https://wa.me/923111444192"
                className="inline-flex items-center gap-3 rounded-full border px-7 py-4 text-sm font-medium transition-all"
                style={{ borderColor: "color-mix(in oklab, var(--gold) 55%, transparent)", color: "var(--ivory)" }}
              >
                <MessageCircle className="h-4 w-4" /> Speak with Concierge
              </a>
            </div>
          </div>

          {/* trust strip */}
          <div className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-6 border-t pt-8 animate-fade-up delay-3"
               style={{ borderColor: "color-mix(in oklab, var(--gold) 25%, transparent)" }}>
            {[
              ["10", "Years of Trust"],
              ["15+", "Countries Served"],
              ["12,000+", "Pilgrims & Travellers"],
              ["IATA · TAAP", "Certified Member"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl gold-gradient sm:text-3xl">{n}</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.25em]" style={{ color: "color-mix(in oklab, var(--ivory) 65%, transparent)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE OFFERINGS */}
      <section
        className="relative py-28 lg:py-40"
        style={{ backgroundColor: "var(--ink)", color: "var(--ivory)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: "400px" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow">— The TravelEx Difference</div>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Four pillars of a <em className="not-italic gold-gradient">considered</em> journey.
            </h2>
          </div>

          <div className="mt-20 grid gap-px md:grid-cols-2 lg:grid-cols-4"
               style={{ backgroundColor: "color-mix(in oklab, var(--gold) 18%, transparent)" }}>
            {[
              { icon: Shield, t: "Verified Trust", d: "IATA, TAAP & Emaan Itehad accredited. A decade of audited operations." },
              { icon: Sparkles, t: "Premium Curation", d: "5★ Haram-adjacent hotels, business-class flights, private transfers." },
              { icon: Compass, t: "Bespoke Itineraries", d: "Your dates, your party, your pace. Tailored by senior consultants." },
              { icon: MessageCircle, t: "24/7 Concierge", d: "A single WhatsApp thread from inquiry to homecoming." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="group p-10 transition-colors" style={{ backgroundColor: "var(--ink)" }}>
                <Icon className="h-7 w-7 transition-transform group-hover:-translate-y-1" style={{ color: "var(--gold)" }} />
                <h3 className="mt-8 font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--ivory) 65%, transparent)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UMRAH FEATURE */}
      <section className="relative overflow-hidden py-28 lg:py-40" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-sm" style={{ backgroundColor: "color-mix(in oklab, var(--gold) 25%, transparent)" }} />
            <img
              src={umrahMadinah}
              alt="Green dome of Masjid al-Nabawi"
              className="relative h-[560px] w-full rounded-sm object-cover shadow-2xl"
              loading="lazy"
              width={1600}
              height={1200}
            />
          </div>
          <div>
            <div className="eyebrow">— Spiritual Travel</div>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              An Umrah held with the <em className="not-italic" style={{ color: "var(--emerald)" }}>reverence</em> it deserves.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed" style={{ color: "color-mix(in oklab, var(--foreground) 80%, transparent)" }}>
              From the first prayer to the final tawaf, every detail is arranged so
              you may worship without worry. Visa, business-class flights, premium
              Haram-view rooms, and a Pakistani ground host throughout.
            </p>

            <div className="mt-10 space-y-px">
              {[
                ["Economy", "From PKR 285,000", "14 nights · 3★ within walking distance"],
                ["Standard", "From PKR 425,000", "14 nights · 4★ Haram-view · group transfers"],
                ["Premium", "From PKR 695,000", "14 nights · 5★ Haram-front · private car"],
              ].map(([tier, price, detail]) => (
                <div
                  key={tier}
                  className="grid grid-cols-3 items-center gap-4 border-b py-5"
                  style={{ borderColor: "color-mix(in oklab, var(--foreground) 12%, transparent)" }}
                >
                  <div className="font-display text-xl">{tier}</div>
                  <div className="text-sm font-medium" style={{ color: "var(--emerald)" }}>{price}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "color-mix(in oklab, var(--foreground) 65%, transparent)" }}>{detail}</div>
                </div>
              ))}
            </div>

            <Link
              to="/umrah"
              className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em]"
              style={{ color: "var(--ink)" }}
            >
              See full Umrah collection <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATIONS GALLERY */}
      <section className="py-28 lg:py-40" style={{ backgroundColor: "var(--ink)", color: "var(--ivory)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="eyebrow">— Destinations</div>
              <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
                Worlds worth <em className="not-italic gold-gradient">remembering</em>.
              </h2>
            </div>
            <Link to="/tours" className="hidden text-sm uppercase tracking-[0.25em] md:inline-flex md:items-center md:gap-2"
                  style={{ color: "var(--gold)" }}>
              All destinations <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {destinations.slice(0, 4).map((d, i) => (
              <Link
                key={d.name}
                to={d.to}
                className={`group relative block overflow-hidden ${i === 0 ? "col-span-2 row-span-2 lg:col-span-2 lg:row-span-1" : ""}`}
              >
                <div className={`relative ${i === 0 ? "aspect-[4/5] lg:aspect-[5/6]" : "aspect-[3/4]"}`}>
                  <img
                    src={d.img}
                    alt={d.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0" style={{
                    background: "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--ink) 85%, transparent) 100%)",
                  }} />
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                    <div className="eyebrow">{d.tagline}</div>
                    <div className="mt-2 font-display text-2xl lg:text-3xl" style={{ color: "var(--ivory)" }}>{d.name}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 grid">
            <Link to="/tours" className="group relative block overflow-hidden">
              <div className="relative aspect-[21/9]">
                <img
                  src={destinations[4].img}
                  alt={destinations[4].name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(90deg, color-mix(in oklab, var(--ink) 80%, transparent), transparent 60%)",
                }} />
                <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-8 lg:p-14">
                  <div className="eyebrow">{destinations[4].tagline}</div>
                  <div className="mt-2 font-display text-3xl lg:text-5xl" style={{ color: "var(--ivory)" }}>{destinations[4].name}</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-28 lg:py-40" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <div className="font-display text-5xl gold-gradient">“</div>
          <p className="mt-2 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            TravelEx turned our family Umrah into the most peaceful fortnight of
            our lives. From the moment we landed in Jeddah, nothing was left to chance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: "var(--gold)" }} />
            <div className="text-xs uppercase tracking-[0.3em]" style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}>
              The Khan Family · Islamabad
            </div>
            <div className="h-px w-12" style={{ backgroundColor: "var(--gold)" }} />
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: "var(--ink)" }}>
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${pattern})`, backgroundSize: "300px" }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center lg:px-10">
          <div className="eyebrow">— Begin your journey</div>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl" style={{ color: "var(--ivory)" }}>
            Tell us where your heart is going.<br />
            <em className="not-italic gold-gradient">We&apos;ll handle the rest.</em>
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium"
              style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
            >
              Request a Tailored Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/923111444192"
              className="inline-flex items-center gap-2 rounded-full border px-8 py-4 text-sm font-medium"
              style={{ borderColor: "color-mix(in oklab, var(--gold) 60%, transparent)", color: "var(--ivory)" }}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
