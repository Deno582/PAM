import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons'

const items = [
  ['github', 'GitHub', GithubIcon],
  ['linkedin', 'LinkedIn', LinkedinIcon],
  ['instagram', 'Instagram', InstagramIcon],
]

// Hanya menampilkan link yang diisi.
export default function SocialLinks({ links = {}, owner = '', className = '' }) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {items.map(([key, label, Icon]) =>
        links[key] ? (
          <li key={key}>
            <a
              href={links[key]}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label} ${owner}`.trim()}
              className="block text-current opacity-70 transition-opacity hover:opacity-100"
            >
              <Icon />
            </a>
          </li>
        ) : null,
      )}
    </ul>
  )
}
