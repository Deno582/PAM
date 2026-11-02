// Foto anggota. Jika `photo` kosong, tampil siluet placeholder.
const tones = [
  ['#d8d8d2', '#bdbdb5'],
  ['#cbcbc4', '#aeaea6'],
  ['#e2e2dc', '#c6c6be'],
]

export default function Avatar({ member, index = 0, className = '' }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={`Foto ${member.name}`}
        className={`aspect-[4/5] w-full object-cover ${className}`}
        loading="lazy"
      />
    )
  }
  const [bg, fg] = tones[index % tones.length]
  return (
    <div
      role="img"
      aria-label={`Foto placeholder ${member.name}`}
      className={`aspect-[4/5] w-full overflow-hidden ${className}`}
      style={{ background: bg }}
    >
      <svg viewBox="0 0 200 250" className="h-full w-full" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <circle cx="100" cy="98" r="38" fill={fg} />
        <path d="M20 250c0-52 36-84 80-84s80 32 80 84z" fill={fg} />
      </svg>
    </div>
  )
}
