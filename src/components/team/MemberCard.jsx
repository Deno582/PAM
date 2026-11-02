import Avatar from '../ui/Avatar'
import SocialLinks from '../ui/SocialLinks'

export default function MemberCard({ member, index, onOpen, className = '' }) {
  return (
    <article className={className}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Lihat profil ${member.name}`}
        className="group block w-full text-left"
      >
        <div className="overflow-hidden">
          <Avatar member={member} index={index} className="transition-transform duration-500 group-hover:scale-[1.03]" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight group-hover:text-accent">{member.name}</h3>
        <p className="mt-1 text-muted">{member.role}</p>
      </button>

      <p className="mt-4 line-clamp-3 leading-relaxed text-ink/80">{member.bio}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Kemampuan ${member.name}`}>
        {member.skills.map((s) => (
          <li key={s} className="border border-line px-2.5 py-1 text-xs text-muted">
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <SocialLinks links={member.links} owner={member.name} />
        <button type="button" onClick={onOpen} className="text-sm font-medium underline-offset-4 hover:text-accent hover:underline">
          Lihat profil
        </button>
      </div>
    </article>
  )
}
