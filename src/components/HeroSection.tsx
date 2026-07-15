import { useState, useEffect } from 'react'
import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'
import FloatingLines from './FloatingLines'
import Shuffle from './Shuffle'
import FuzzyText from './FuzzyText'
import LogoLoop from './LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiFigma } from 'react-icons/si'

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return (
    <section id="home" className="h-screen flex flex-col relative overflow-x-clip" style={{ backgroundColor: '#0C0C0C' }}>
      <div className="absolute inset-0 z-0">
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          mixBlendMode="screen"
        />
      </div>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        {[
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="flex-1 flex flex-col justify-between relative overflow-hidden">
        <div className="overflow-hidden w-full">
          <Shuffle
            text="Hi, i&apos;m Ajo"
            tag="h1"
            className="text-white font-black uppercase tracking-[-0.12em] sm:tracking-tight leading-[1.3] sm:leading-none w-full max-w-full text-[11vw] min-[400px]:text-[13vw] sm:text-[18vw] md:text-[19vw] lg:text-[20vw] mt-6 sm:mt-4 md:-mt-5"
            style={{ fontFamily: 'inherit' }}
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={isMobile}
            loop={!isMobile}
            loopDelay={10}
            triggerOnHover={!isMobile}
            respectReducedMotion={true}
          />
        </div>

        <div className="w-full overflow-hidden px-6 md:px-10 py-2 sm:py-4 pt-[17.5rem] sm:pt-0">
          <FadeIn delay={0.2} y={20}>
            <LogoLoop
              logos={[
                { node: <span style={{ color: '#fff' }}><SiReact /></span>, title: 'React', href: 'https://react.dev' },
                { node: <span style={{ color: '#fff' }}><SiNextdotjs /></span>, title: 'Next.js', href: 'https://nextjs.org' },
                { node: <span style={{ color: '#fff' }}><SiTypescript /></span>, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
                { node: <span style={{ color: '#fff' }}><SiTailwindcss /></span>, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
                { node: <span style={{ color: '#fff' }}><SiNodedotjs /></span>, title: 'Node.js', href: 'https://nodejs.org' },
                { node: <span style={{ color: '#fff' }}><SiFigma /></span>, title: 'Figma', href: 'https://figma.com' },
              ]}
              speed={80}
              direction="left"
              logoHeight={90}
              gap={100}
              hoverSpeed={30}
              scaleOnHover
              fadeOut
              fadeOutColor="#0C0C0C"
              ariaLabel="Technologies I work with"
            />
          </FadeIn>
        </div>

        <div className="flex flex-wrap gap-y-3 justify-center sm:justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
          <FadeIn delay={0.35} y={20}>
            <div className="overflow-hidden whitespace-nowrap max-w-[55vw] sm:max-w-none">
              <FuzzyText
                fontSize="clamp(0.6rem, 4vw, 6rem)"
                fontWeight={500}
                color="#D7E2EA"
                baseIntensity={0.15}
                hoverIntensity={0.4}
                fuzzRange={12}
                enableHover={true}
                direction="horizontal"
              >
                Full Stack Developer
              </FuzzyText>
            </div>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>

        {/* <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Ajo portrait"
                className="w-full"
              />
            </Magnet>
          </FadeIn>
        </div> */}
      </div>
    </section>
  )
}
