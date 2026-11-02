// Thumbnail placeholder proyek (SVG sederhana). Jika `image` ada, pakai gambar asli.
const INK = '#141414'
const PAPER = '#f3f3f0'
const SAND = '#e3e3dd'
const GREY = '#9a9a92'
const ACCENT = '#2b47e0'

function Art({ variant }) {
  switch (variant) {
    case 0:
      return (
        <>
          <rect x="36" y="32" width="328" height="236" fill={PAPER} />
          <rect x="36" y="32" width="64" height="236" fill={INK} />
          <rect x="116" y="52" width="120" height="12" fill={INK} />
          <rect x="116" y="84" width="72" height="54" fill={SAND} />
          <rect x="196" y="84" width="72" height="54" fill={SAND} />
          <rect x="276" y="84" width="72" height="54" fill={ACCENT} />
          <rect x="116" y="204" width="24" height="46" fill={GREY} />
          <rect x="150" y="184" width="24" height="66" fill={GREY} />
          <rect x="184" y="196" width="24" height="54" fill={GREY} />
          <rect x="218" y="168" width="24" height="82" fill={INK} />
          <rect x="252" y="188" width="24" height="62" fill={GREY} />
          <rect x="286" y="156" width="24" height="94" fill={GREY} />
        </>
      )
    case 1:
      return (
        <>
          <rect x="146" y="22" width="108" height="256" rx="14" fill={INK} />
          <rect x="154" y="38" width="92" height="224" rx="6" fill={PAPER} />
          <rect x="154" y="38" width="92" height="34" fill={ACCENT} />
          <rect x="164" y="88" width="72" height="9" fill={INK} />
          <rect x="164" y="104" width="52" height="6" fill={GREY} />
          <rect x="164" y="132" width="72" height="9" fill={INK} />
          <rect x="164" y="148" width="40" height="6" fill={GREY} />
          <rect x="164" y="176" width="72" height="9" fill={INK} />
          <rect x="164" y="192" width="60" height="6" fill={GREY} />
          <rect x="40" y="70" width="70" height="8" fill={GREY} />
          <rect x="40" y="88" width="46" height="8" fill={GREY} />
          <rect x="290" y="210" width="70" height="8" fill={GREY} />
          <rect x="314" y="228" width="46" height="8" fill={GREY} />
        </>
      )
    case 2:
      return (
        <>
          <g stroke={INK} strokeWidth="2">
            <line x1="200" y1="140" x2="92" y2="72" />
            <line x1="200" y1="140" x2="312" y2="66" />
            <line x1="200" y1="140" x2="100" y2="206" />
            <line x1="200" y1="140" x2="304" y2="214" />
          </g>
          <circle cx="92" cy="72" r="13" fill={INK} />
          <circle cx="312" cy="66" r="13" fill={GREY} />
          <circle cx="100" cy="206" r="13" fill={GREY} />
          <circle cx="304" cy="214" r="13" fill={INK} />
          <circle cx="200" cy="140" r="26" fill={ACCENT} />
          <polyline points="130,262 170,248 210,256 250,238 290,246 330,230" fill="none" stroke={INK} strokeWidth="3" />
        </>
      )
    default:
      return (
        <>
          <rect x="44" y="36" width="312" height="228" fill={PAPER} />
          <rect x="44" y="36" width="312" height="24" fill={INK} />
          <circle cx="60" cy="48" r="4" fill={PAPER} />
          <circle cx="74" cy="48" r="4" fill={PAPER} />
          <circle cx="88" cy="48" r="4" fill={PAPER} />
          <rect x="68" y="86" width="150" height="14" fill={INK} />
          <rect x="68" y="108" width="110" height="14" fill={INK} />
          <rect x="68" y="136" width="170" height="6" fill={GREY} />
          <rect x="68" y="150" width="140" height="6" fill={GREY} />
          <rect x="68" y="176" width="74" height="24" fill={ACCENT} />
          <rect x="258" y="86" width="74" height="114" fill={SAND} />
          <rect x="68" y="222" width="264" height="1.5" fill={GREY} />
        </>
      )
  }
}

export default function Thumb({ project, className = '' }) {
  if (project.image) {
    return <img src={project.image} alt={`Cuplikan ${project.title}`} className={`aspect-[4/3] w-full object-cover ${className}`} loading="lazy" />
  }
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={`Thumbnail placeholder ${project.title}`}
      className={`block aspect-[4/3] w-full ${className}`}
    >
      <rect width="400" height="300" fill="#dededa" />
      <Art variant={project.variant} />
    </svg>
  )
}
