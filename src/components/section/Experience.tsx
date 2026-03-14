import NavCard from "../NavCard"
import { experiences, projects } from "../../data/Work"

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
    <section className="w-full bg-zinc-100 px-8 pt-6 pb-16 min-[960px]:w-screen min-[960px]:h-screen min-[960px]:pt-0 min-[960px]:pb-0 min-[960px]:flex min-[960px]:items-center min-[960px]:justify-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-center text-4xl font-bold tracking-widest mb-20 min-[960px]:mb-12 mt-12 sm:mt-12 md:mt-12 md:mb-20 lg:-mt-20">Experience & Projects</h2>
        <div className="grid grid-cols-1 gap-8 justify-items-center min-[960px]:grid-cols-2 min-[960px]:gap-12">
          <NavCard label="Experience" items={experienceItems} />
          <NavCard label="Projects" items={projectItems} />
        </div>
      </div>
    </section>
  )
}