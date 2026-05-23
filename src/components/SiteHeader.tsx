import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/umrah", label: "Umrah" },
  { to: "/tours", label: "Tours" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-gold/15"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "color-mix(in oklab, var(--ink) 85%, transparent)" } : undefined}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span
            className="grid h-9 w-9 place-items-center rounded-full border font-display text-lg"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
              background: "linear-gradient(135deg, transparent, color-mix(in oklab, var(--gold) 12%, transparent))",
            }}
          >
            T
          </span>
          <div className="leading-tight">
            <div className="font-display text-xl text-ivory" style={{ color: "var(--ivory)" }}>
              TravelEx
            </div>
            <div className="eyebrow text-[0.6rem]" style={{ letterSpacing: "0.28em" }}>
              Pakistan · Est. 2015
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide transition-colors hover:opacity-100"
              style={{ color: "color-mix(in oklab, var(--ivory) 80%, transparent)" }}
              activeProps={{ style: { color: "var(--gold)" } }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+923111444192"
          className="hidden items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-all md:inline-flex"
          style={{
            borderColor: "color-mix(in oklab, var(--gold) 55%, transparent)",
            color: "var(--gold)",
          }}
        >
          <Phone className="h-3.5 w-3.5" />
          +92 311 1444 192
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ color: "var(--ivory)" }}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div
          className="border-t md:hidden"
          style={{
            backgroundColor: "var(--ink)",
            borderColor: "color-mix(in oklab, var(--gold) 20%, transparent)",
          }}
        >
          <nav className="flex flex-col px-6 py-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b py-4 text-base"
                style={{
                  color: "var(--ivory)",
                  borderColor: "color-mix(in oklab, var(--gold) 12%, transparent)",
                }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://wa.me/923111444192"
              className="mt-6 rounded-full px-5 py-3 text-center text-sm font-medium"
              style={{ backgroundColor: "var(--gold)", color: "var(--ink)" }}
            >
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
