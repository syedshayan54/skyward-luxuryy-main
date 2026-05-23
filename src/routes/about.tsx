import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import pattern from "@/assets/pattern-arabesque.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TravelEx — 10 Years of Trust" },
      { name: "description", content: "Peshawar-based luxury travel agency. IATA, TAAP, Emaan Itehad affiliated. The story behind a decade of trust." },
      { property: "og:title", content: "About TravelEx Pakistan" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>
      <SiteHeader />

      <section
        className="relative pt-40 pb-28 lg:pt-48 lg:pb-36"
        style={{ backgroundColor: "var(--ink)", color: "var(--ivory)" }}
      >
        <div aria-hidden className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${pattern})`, backgroundSize: "380px" }} />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <div className="eyebrow">— Our Story</div>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Ten years of carrying<br />
            <em className="not-italic gold-gradient">Pakistan&apos;s travellers</em> with care.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed" style={{ color: "color-mix(in oklab, var(--ivory) 78%, transparent)" }}>
            TravelEx was founded in Peshawar in 2015 with one quiet conviction:
            that booking a journey, especially a sacred one, should feel like
            handing it to family. A decade later, that promise is still our entire
            business model.
          </p>
        </div>
      </section>

      <section className="py-28" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="eyebrow">— What we believe</div>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              Trust is the only luxury that matters.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed" style={{ color: "color-mix(in oklab, var(--foreground) 80%, transparent)" }}>
            <p>
              Anyone can book a flight. We exist for the moments around it — the
              visa that nearly fell through, the hotel room that needed changing at
              midnight, the elderly parent who needs a wheelchair in Madinah.
            </p>
            <p>
              Our consultants are senior, salaried (never commissioned), and stay
              with you on a single WhatsApp thread from inquiry to homecoming. That
              is the entire TravelEx product.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--ink)", color: "var(--ivory)" }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="eyebrow text-center">— Credentials</div>
          <div className="mt-12 grid grid-cols-2 gap-px md:grid-cols-4"
               style={{ backgroundColor: "color-mix(in oklab, var(--gold) 20%, transparent)" }}>
            {[
              ["IATA", "Accredited Agent"],
              ["TAAP", "Travel Agents Assoc."],
              ["Emaan Itehad", "Hajj & Umrah"],
              ["SiteLock", "Secured Platform"],
            ].map(([n, d]) => (
              <div key={n} className="p-10 text-center" style={{ backgroundColor: "var(--ink)" }}>
                <div className="font-display text-2xl gold-gradient">{n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em]" style={{ color: "color-mix(in oklab, var(--ivory) 60%, transparent)" }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
