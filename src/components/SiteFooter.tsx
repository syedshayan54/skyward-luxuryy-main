import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--ink)", color: "var(--ivory)" }}
    >
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">TravelEx</div>
          <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--ivory) 70%, transparent)" }}>
            A decade of crafting sacred journeys and luxurious escapes for
            Pakistan&apos;s most discerning travellers. IATA · TAAP · Emaan Itehad.
          </p>
          <div className="mt-8 flex flex-col gap-2 text-sm" style={{ color: "color-mix(in oklab, var(--ivory) 75%, transparent)" }}>
            <span className="flex items-center gap-3"><MapPin className="h-4 w-4" style={{ color: "var(--gold)" }} /> Peshawar, Khyber Pakhtunkhwa — Pakistan</span>
            <span className="flex items-center gap-3"><Phone className="h-4 w-4" style={{ color: "var(--gold)" }} /> +92 311 1444 192</span>
            <span className="flex items-center gap-3"><Mail className="h-4 w-4" style={{ color: "var(--gold)" }} /> info@travelex.pk</span>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/umrah" className="hover:opacity-100" style={{ color: "color-mix(in oklab, var(--ivory) 75%, transparent)" }}>Umrah Packages</Link></li>
            <li><Link to="/tours" className="hover:opacity-100" style={{ color: "color-mix(in oklab, var(--ivory) 75%, transparent)" }}>International Tours</Link></li>
            <li><Link to="/tours" className="hover:opacity-100" style={{ color: "color-mix(in oklab, var(--ivory) 75%, transparent)" }}>Domestic Escapes</Link></li>
            <li><Link to="/contact" className="hover:opacity-100" style={{ color: "color-mix(in oklab, var(--ivory) 75%, transparent)" }}>Custom Itinerary</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-5">House</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:opacity-100" style={{ color: "color-mix(in oklab, var(--ivory) 75%, transparent)" }}>Our Story</Link></li>
            <li><Link to="/about" className="hover:opacity-100" style={{ color: "color-mix(in oklab, var(--ivory) 75%, transparent)" }}>Trust &amp; Credentials</Link></li>
            <li><Link to="/contact" className="hover:opacity-100" style={{ color: "color-mix(in oklab, var(--ivory) 75%, transparent)" }}>Visit Office</Link></li>
            <li><a href="https://wa.me/923111444192" className="hover:opacity-100" style={{ color: "var(--gold)" }}>WhatsApp Concierge</a></li>
          </ul>
        </div>
      </div>

      <div
        className="border-t px-6 py-6 text-center text-xs lg:px-10"
        style={{
          borderColor: "color-mix(in oklab, var(--gold) 15%, transparent)",
          color: "color-mix(in oklab, var(--ivory) 55%, transparent)",
        }}
      >
        © {new Date().getFullYear()} TravelEx Pakistan · 10 Years of Trust
      </div>
    </footer>
  );
}
