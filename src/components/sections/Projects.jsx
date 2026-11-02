import { useState } from 'react'
import { projects } from '../../data/site'
import Container from '../ui/Container'
import Modal from '../ui/Modal'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../projects/ProjectCard'
import ProjectModal from '../projects/ProjectModal'

// Lebar kolom bergantian (7/5, 5/7) supaya layout tidak monoton.
const spans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7']

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const project = selected === null ? null : projects[selected]

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 md:py-32">
      <Container>
        <SectionHeading id="projects-title" title="Proyek terpilih">
          Proyek yang pernah dan sedang kami kerjakan bersama.
        </SectionHeading>

        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-12 md:gap-x-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} className={spans[i % spans.length]} onOpen={() => setSelected(i)} />
          ))}
        </div>
      </Container>

      <Modal open={selected !== null} onClose={() => setSelected(null)} label={project ? `Detail ${project.title}` : 'Detail proyek'}>
        <ProjectModal project={project} />
      </Modal>
    </section>
  )
}
