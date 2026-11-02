export default function SectionHeading({ id, title, children, className = '' }) {
  return (
    <div className={className}>
      <h2 id={id} className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{children}</p>}
    </div>
  )
}
