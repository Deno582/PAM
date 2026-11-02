import { navLinks, site } from '../../data/site'
import Container from '../ui/Container'
import SocialLinks from '../ui/SocialLinks'

export default function Footer() {
  return (
    <footer className="on-dark bg-ink pb-10 text-paper">
      <Container>
        <div className="grid gap-10 border-t border-white/15 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
              <span className="size-2.5 bg-accent" aria-hidden="true" />
              {site.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{site.footerNote}</p>
          </div>

          <nav aria-label="Navigasi footer" className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/70">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 md:justify-self-end">
            <SocialLinks links={site.social} owner={site.name} className="text-white" />
          </div>
        </div>

        <p className="mt-12 text-sm text-white/50">
          © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
        </p>
      </Container>
    </footer>
  )
}
