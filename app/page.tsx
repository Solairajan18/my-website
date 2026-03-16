import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Tools } from '@/components/sections/Tools'
import { Certifications } from '@/components/sections/Certifications'
import { WeekendProjects } from '@/components/sections/WeekendProjects'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Tools />
      <Certifications />
      <WeekendProjects />
      <Contact />
    </>
  )
}
