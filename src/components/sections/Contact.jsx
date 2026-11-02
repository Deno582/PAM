import { useState } from 'react'
import { ArrowUpRight, Check, Mail, Send } from 'lucide-react'
import { site } from '../../data/site'
import Container from '../ui/Container'
import Button from '../ui/Button'

const socials = [
  ['GitHub', 'github'],
  ['LinkedIn', 'linkedin'],
  ['Instagram', 'instagram'],
]

const initial = { name: '', email: '', message: '' }
const field =
  'mt-2 block w-full border-0 border-b border-white/30 bg-transparent py-3 text-lg text-white placeholder:text-white/30 transition-colors focus:border-white focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: '' }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = 'Isi nama Anda.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = 'Isi alamat email yang valid, contoh: nama@email.com.'
    if (form.message.trim().length < 10) er.message = 'Tulis pesan minimal 10 karakter.'
    return er
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) return
    // Tanpa backend: pesan dikirim lewat aplikasi email pengguna.
    const subject = encodeURIComponent(`Pesan dari ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const reset = () => {
    setForm(initial)
    setSent(false)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="on-dark bg-ink py-24 text-paper md:py-32">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="contact-title" className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-5xl">
            Punya proyek atau ide? Mari bicara.
          </h2>

          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-flex items-center gap-3 border-b border-white/40 pb-1 text-xl transition-colors hover:border-white"
          >
            <Mail size={20} aria-hidden="true" />
            {site.email}
          </a>

          <ul className="mt-10 max-w-xs">
            {socials.map(([label, key]) =>
              site.social[key] ? (
                <li key={key}>
                  <a
                    href={site.social[key]}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between border-t border-white/15 py-4 text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </li>
              ) : null,
            )}
          </ul>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <div role="status" className="border-t border-white/15 pt-8">
              <span className="flex size-10 items-center justify-center bg-accent">
                <Check size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">Aplikasi email Anda sudah dibuka</h3>
              <p className="mt-3 max-w-md leading-relaxed text-white/70">
                Pesan sudah terisi. Tinggal tekan kirim di aplikasi email. Jika tidak terbuka, tulis langsung ke {site.email}.
              </p>
              <Button variant="light" onClick={reset} className="mt-6">
                Tulis pesan lain
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-8">
              <div>
                <label htmlFor="name" className="text-sm text-white/70">
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={update('name')}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={field}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-[#ff9b9b]">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update('email')}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={field}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-[#ff9b9b]">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-white/70">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${field} resize-none`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-[#ff9b9b]">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" variant="accent">
                <Send size={16} aria-hidden="true" />
                Kirim pesan
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
