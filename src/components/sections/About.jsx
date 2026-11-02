import { site } from '../../data/site'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <SectionHeading id="about-title" title="Tentang kelompok" className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start" />

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="font-display text-2xl leading-snug tracking-tight md:text-[1.75rem]">{site.about.lead}</p>

          <dl className="mt-14">
            {site.about.items.map((item) => (
              <div key={item.term} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[8rem_1fr] sm:gap-8">
                <dt className="font-display text-lg font-semibold">{item.term}</dt>
                <dd className="leading-relaxed text-muted">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
