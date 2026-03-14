import Button from "../ui/Button"
import Socials from "../socials"

// Function that scrolls to the about section.
export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
      <div className="w-full max-w-2xl tracking-[0.2rem]">
        <p className="text-xs uppercase mb-2 tracking-widest font-light">Hello I&apos;m</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest">Alexander Reyes</h1>
        <hr className="my-4 border-black/70" />
        <h2 className="mb-0 text-2xl">Software Engineer</h2>
      </div>

      <div className="w-full max-w-3xl mt-8 flex flex-col items-center gap-8 font-light tracking-wide">
        <p>
          A SOFTWARE ENGINEER AND A GAME ENJOYER BASED IN PLATTSBURGH, NEW YORK WHO ENJOYS
          CRAFTING CREATIVE AND HIGH QUALITY WEB AND ANDROID APPLICATIONS.
        </p>

        <div className="my-2">
          <Socials />
        </div>

        <Button text="Get to know me" onClick={scrollToAbout} />
      </div>
    </section>
  )
}