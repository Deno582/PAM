import { ExternalLink } from 'lucide-react'
import Thumb from '../ui/Thumb'
import Button from '../ui/Button'
import { GithubIcon } from '../ui/BrandIcons'

export default function ProjectModal({ project }) {
  if (!project) return null
  return (
    <div>
      <div className="bg-paper-2 p-5 pt-16 md:p-8 md:pt-8">
        <Thumb project={project} />
      </div>

      <div className="grid gap-10 p-6 md:grid-cols-[3fr_2fr] md:p-10">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h2>
          <p className="mt-4 text-lg leading-relaxed">{project.summary}</p>
          <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

          <h3 className="mt-8 font-display text-lg font-semibold">Yang dikerjakan</h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <aside>
          <dl className="text-sm">
            {[
              ['Kategori', project.category],
              ['Tahun', project.year],
              ['Dikerjakan oleh', project.roles],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-line py-3">
                <dt className="text-muted">{k}</dt>
                <dd className="mt-0.5 font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-6 font-display text-lg font-semibold">Teknologi</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="border border-line px-2.5 py-1 text-sm text-muted">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.demo && (
              <Button href={project.links.demo} target="_blank" rel="noreferrer">
                <ExternalLink size={16} aria-hidden="true" />
                Lihat demo
              </Button>
            )}
            {project.links.repo && (
              <Button href={project.links.repo} target="_blank" rel="noreferrer" variant="secondary">
                <GithubIcon width={16} height={16} />
                Repositori
              </Button>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
