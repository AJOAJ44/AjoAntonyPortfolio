import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiveProjectButton from './LiveProjectButton'

const projects = [
  {
    number: '01',
    category: 'Client',
    name: 'Pizza Project',
    link: 'https://pizzaproject-seven.vercel.app/',
    col1img1: '/image/pizza/Screenshot 2026-07-15 165751.png',
    col1img2: '/image/pizza/Screenshot 2026-07-15 165751.png',
    col2img: '/image/pizza/Screenshot 2026-07-15 170828.png',
  },
  {
    number: '02',
    category: 'Client',
    name: 'Dental Project',
    link: 'https://astasmiledentalclinic.vercel.app/',
    col1img1: '/image/dental/Screenshot 2026-07-15 171658.png',
    col1img2: '/image/dental/Screenshot 2026-07-15 171605.png',
    col2img: '/image/dental/Screenshot 2026-07-15 171605.png',
  },
  {
    number: '03',
    category: 'Client',
    name: 'Editor Portfolio',
    link: 'https://framestudio-delta.vercel.app/',
    col1img1: '/image/edit/Screenshot 2026-07-15 172554.png',
    col1img2: '/image/edit/Screenshot 2026-07-15 172952.png',
    col2img: '/image/edit/Screenshot 2026-07-15 172714.png',
  },
]

function ProjectCard({ project, index, total }: { project: (typeof projects)[0]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const targetScale = 1 - (total - 1 - index) * 0.03

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.15'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={ref} className="h-[85vh] flex items-center justify-center">
      <motion.div
        className="sticky rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 w-full max-w-5xl"
        style={{
          scale,
          top: `${index * 28 + 96}px`,
          backgroundColor: '#0C0C0C',
        }}
      >
        <div className="flex justify-between items-start mb-4 sm:mb-6 md:mb-8">
          <span
            className="font-black text-[#D7E2EA] leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm">
              {project.category}
            </span>
            <h3
              className="text-[#D7E2EA] font-medium uppercase leading-tight text-right"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
            >
              {project.name}
            </h3>
          </div>
          <LiveProjectButton href={project.link} className="hidden sm:inline-flex" />
        </div>

        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-[40%]">
            <img
              src={project.col1img1}
              alt=""
              loading="lazy"
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1img2}
              alt=""
              loading="lazy"
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.col2img}
              alt=""
              loading="lazy"
              className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
            />
          </div>
        </div>

        <LiveProjectButton href={project.link} className="mt-4 sm:mt-6 inline-flex sm:hidden" />
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] pt-16 sm:pt-20 md:pt-24 pb-40 sm:pb-48 md:pb-56" style={{ backgroundColor: '#0C0C0C' }}>
      <h2
        className="hero-heading font-black uppercase text-center leading-none mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  )
}
