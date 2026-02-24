import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-10 py-5">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground uppercase">
          Relay
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#agentic" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Agentic AI
          </a>
          <a href="#patterns" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Patterns
          </a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Process
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </div>
        <a
          href="#cta"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-foreground text-primary-foreground text-sm font-semibold hover:bg-foreground/90 transition-colors"
        >
          Book a Call
        </a>
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-background px-6 pb-6 flex flex-col gap-4 border-t border-border">
          <a href="#agentic" className="text-sm text-muted-foreground pt-4" onClick={() => setMobileOpen(false)}>Agentic AI</a>
          <a href="#patterns" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Patterns</a>
          <a href="#process" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Process</a>
          <a href="#about" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#cta" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-foreground text-primary-foreground text-sm font-semibold" onClick={() => setMobileOpen(false)}>
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
