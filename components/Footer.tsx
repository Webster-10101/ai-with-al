export default function Footer() {
  return (
    <footer className="border-t border-charcoal/[0.06] py-10 md:py-14">
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-display text-lg tracking-tight text-charcoal font-medium">
            AI <span className="text-sage italic">with</span> Al
          </a>

          <div className="flex items-center gap-6 text-sm text-charcoal-muted">
            <a
              href="https://alistairwebster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-charcoal"
            >
              alistairwebster.com
            </a>
            <span className="w-1 h-1 rounded-full bg-charcoal/20" />
            <a href="#" className="transition-colors hover:text-charcoal">
              Book
            </a>
            <span className="w-1 h-1 rounded-full bg-charcoal/20" />
            <a
              href="mailto:al@alistairwebster.com"
              className="transition-colors hover:text-charcoal"
            >
              Contact
            </a>
          </div>

          <p className="text-xs text-charcoal-muted/60">
            © {new Date().getFullYear()} Alistair Webster
          </p>
        </div>
      </div>
    </footer>
  );
}
