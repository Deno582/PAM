const styles = {
  primary: 'bg-ink text-paper hover:bg-accent',
  secondary: 'border border-ink text-ink hover:bg-ink hover:text-paper',
  accent: 'bg-accent text-white hover:bg-accent-deep',
  light: 'border border-white/40 text-white hover:bg-white hover:text-ink',
}

export default function Button({ variant = 'primary', href, onClick, type = 'button', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded px-5 py-3 text-[0.95rem] font-medium transition-colors duration-200 ${styles[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  )
}
