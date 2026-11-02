import Avatar from '../ui/Avatar'
import SocialLinks from '../ui/SocialLinks'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/BrandIcons'

const labels = [
  ['github', 'GitHub', GithubIcon],
  ['linkedin', 'LinkedIn', LinkedinIcon],
  ['instagram', 'Instagram', InstagramIcon],
]

export default function MemberModal({ member, index }) {
  if (!member) return null
  return (
    <div className="grid md:grid-cols-[2fr_3fr]">
      <div className="bg-paper-2 p-5 pt-16 md:p-8 md:pt-8">
        <Avatar member={member} index={index} />
      </div>

      <div className="p-6 md:p-10 md:pr-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{member.name}</h2>
        <p className="mt-1 text-lg text-muted">{member.role}</p>

        <p className="mt-6 leading-relaxed">{member.bio}</p>
        <p className="mt-3 leading-relaxed text-muted">{member.about}</p>

        <h3 className="mt-8 font-display text-lg font-semibold">Kemampuan</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {member.skills.map((s) => (
            <li key={s} className="border border-line px-2.5 py-1 text-sm text-muted">
              {s}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 font-display text-lg font-semibold">Pengalaman</h3>
        <ul className="mt-2">
          {member.experience.map((e, i) => (
            <li key={i} className="grid grid-cols-[5rem_1fr] gap-4 border-t border-line py-3 text-sm first:mt-2">
              <span className="text-muted">{e.period}</span>
              <span>
                <span className="block font-medium">{e.title}</span>
                <span className="text-muted">{e.place}</span>
              </span>
            </li>
          ))}
        </ul>

        <h3 className="mt-8 font-display text-lg font-semibold">Kontak</h3>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {labels.map(([key, label, Icon]) =>
            member.links[key] ? (
              <li key={key}>
                <a
                  href={member.links[key]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:text-accent hover:underline"
                >
                  <Icon width={18} height={18} />
                  {label}
                </a>
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </div>
  )
}
