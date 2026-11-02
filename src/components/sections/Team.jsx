import { useState } from 'react'
import { members } from '../../data/site'
import Container from '../ui/Container'
import Modal from '../ui/Modal'
import SectionHeading from '../ui/SectionHeading'
import MemberCard from '../team/MemberCard'
import MemberModal from '../team/MemberModal'

const offsets = ['', 'md:mt-16', 'md:mt-6']

export default function Team() {
  const [selected, setSelected] = useState(null)
  const member = selected === null ? null : members[selected]

  return (
    <section id="team" aria-labelledby="team-title" className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="team-title" title="Tiga orang, tiga bidang" />
          <p className="max-w-xs text-muted">Klik foto atau nama untuk melihat profil lengkap setiap anggota.</p>
        </div>

        <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-8 lg:gap-12">
          {members.map((m, i) => (
            <MemberCard key={m.id} member={m} index={i} className={offsets[i]} onOpen={() => setSelected(i)} />
          ))}
        </div>
      </Container>

      <Modal open={selected !== null} onClose={() => setSelected(null)} label={member ? `Profil ${member.name}` : 'Profil'}>
        <MemberModal member={member} index={selected ?? 0} />
      </Modal>
    </section>
  )
}
