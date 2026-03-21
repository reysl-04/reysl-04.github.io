import NavCard from "../NavCard"
import { experiences, projects } from "../../data/Work"
import ParticlesBackground from "../ui/ParticlesBackground"
import { AnimatedItem, AnimatedSection } from "../ui/AnimatedContent"

export default function Work() {

  const experienceItems = experiences.map((item) => ({
    heading: item.title,
    subheading: item.company,
    date: item.date,
    description: item.description,
    tags: item.tags,
    url: item.url,
    urlLabel: "Visit company",
  }))
 
  const projectItems = projects.map((item) => ({
    heading: item.title,
    subheading: item.company,
    date: item.date,
    description: item.description,
    tags: item.tags,
    url: item.url,
    urlLabel: "View project",
  }))
 
  return (
    <section id="experience" className="relative overflow-hidden w-full bg-[#0F1521] px-8 pt-6 pb-32 min-[960px]:min-h-screen min-[960px]:px-10 min-[960px]:pt-6 lg:px-16">
      <ParticlesBackground id="experience-particles" />

      <AnimatedSection className="relative z-10 mx-auto w-full max-w-6xl" amount={0.18}>
        <AnimatedItem>
          <h2 className="text-[#EDF2FF]! text-4xl text-center md:text-5xl font-bold tracking-widest mt-16 mb-16">Experience & Projects</h2>
        </AnimatedItem>

        <div className="grid grid-cols-1 gap-8 justify-items-center min-[1220px]:grid-cols-2 min-[1220px]:gap-10">
          <AnimatedItem>
            <NavCard label="Experience" items={experienceItems} />
          </AnimatedItem>
          <AnimatedItem>
            <NavCard label="Projects" items={projectItems} />
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </section>
  )
}