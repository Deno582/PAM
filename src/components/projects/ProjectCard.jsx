import { ArrowUpRight } from 'lucide-react'
import Thumb from '../ui/Thumb'
import Button from '../ui/Button'

export default function ProjectCard({ project, onOpen, className = '' }) {
  return (
    <article className={className}>
      <button type="button" onClick={onOpen} aria-label={`Detail ${project.title}`} className="group block w-full text-left">
        <div className="overflow-hidden">
          <Thumb project={project} className="transition-transform duration-500 group-hover:scale-[1.03]" />
        </div>
      </button>

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
        <span className="shrink-0 text-sm text-muted">{project.category}</span>
      </div>
      <p className="mt-2 line-clamp-2 leading-relaxed text-muted">{project.summary}</p>
      <p className="mt-3 text-sm text-ink/70">{project.tech.join(', ')}</p>

      <Button variant="secondary" onClick={onOpen} className="mt-5 !py-2.5 text-sm">
        Detail Project
        <ArrowUpRight size={16} aria-hidden="true" />
      </Button>
    </article>
  )
}
