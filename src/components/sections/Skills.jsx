import { Code, Database, Globe, PenTool, Wrench } from 'lucide-react'
import { members, skillGroups } from '../../data/site'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const icons = { code: Code, globe: Globe, pen: PenTool, database: Database, wrench: Wrench }

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-paper-2 py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading id="skills-title" title="Yang bisa kami kerjakan">
            Titik di samping setiap skill menunjukkan anggota yang menguasainya.
          </SectionHeading>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted" aria-label="Keterangan warna anggota">
            {members.map((m) => (
              <li key={m.id} className="flex items-center gap-2">
                <span className="size-2.5 rounded-full" style={{ background: m.tone }} aria-hidden="true" />
                {m.short}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon]
            return (
              <div key={group.name} className="grid gap-4 border-t border-ink/20 py-8 md:grid-cols-[15rem_1fr] md:gap-10">
                <h3 className="flex items-center gap-3 font-display text-xl font-semibold">
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  {group.name}
                </h3>
                <ul className="flex flex-wrap gap-x-8 gap-y-3">
                  {group.items.map((s) => (
                    <li key={s.name} className="flex items-center gap-2.5 text-lg">
                      {s.name}
                      <span className="flex gap-1">
                        {s.by.map((i) => (
                          <span
                            key={i}
                            title={members[i].short}
                            className="size-2 rounded-full"
                            style={{ background: members[i].tone }}
                          />
                        ))}
                        <span className="sr-only">Dikuasai {s.by.map((i) => members[i].short).join(', ')}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
