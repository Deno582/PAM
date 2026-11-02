import { motion } from 'framer-motion'
import { members, site } from '../../data/site'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Avatar from '../ui/Avatar'

const offsets = ['md:mt-14', 'md:mt-0', 'md:mt-24']
const ease = [0.2, 0.7, 0.2, 1]

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="pt-28 pb-20 md:pt-40 md:pb-28">
      <Container>
        <h1
          id="hero-title"
          className="font-display text-[clamp(2.1rem,5.8vw,5.25rem)] font-semibold leading-[0.98] tracking-tight"
        >
          {site.headline.map((line, i) => (
            <span key={line} className="block overflow-hidden py-[0.04em]">
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.1 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
          >
            <p className="max-w-md text-lg leading-relaxed text-muted">{site.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects">Explore Our Work</Button>
              <Button href="#team" variant="secondary">
                Meet Our Team
              </Button>
            </div>
          </motion.div>

          <ul className="grid grid-cols-3 gap-3 sm:gap-5 lg:col-span-7">
            {members.map((m, i) => (
              <motion.li
                key={m.id}
                className={offsets[i]}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.55 + i * 0.1, ease }}
              >
                <a href="#team" className="group block">
                  <div className="overflow-hidden">
                    <Avatar member={m} index={i} className="transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-3 text-sm font-medium leading-tight">{m.name}</p>
                  <p className="mt-0.5 text-xs leading-tight text-muted sm:text-sm">{m.role}</p>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
