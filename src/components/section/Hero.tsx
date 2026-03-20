import Button from "../ui/Button"
import Socials from "../socials"
import { scrollToSection } from "../../utilities/scroll"

export default function Hero() {
  return (
    <section className="bg-[#0F1521] w-full min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
      <div className="w-full max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-[0.28em] font-medium text-[#0F1521]/60">Hello I&apos;m</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wide leading-[0.95] text-[#1A2336]">
          Alexander Reyes
        </h1>
        <hr className="my-6 w-[min(46rem,96%)] mx-auto border-[#000000]/65" />
        <h2 className="mb-0 text-sm md:text-base uppercase tracking-[0.24em] font-semibold text-[#E8A020]!">
          Software Engineer | Back End Developer
        </h2>
      </div>

      <div className="w-full max-w-3xl mt-10 flex flex-col items-center gap-8">
        <p className="max-w-[62ch] text-base md:text-lg leading-relaxed font-normal tracking-normal text-[#0F1521]/80">
          A software engineer and game enjoyer based in Plattsburgh, New York who enjoys
          crafting creative and high-quality web and Android applications.
        </p>

        <div className="my-2">
          <Socials />
        </div>

        <Button
          text="Get to know me"
          onClick={() => scrollToSection("about")}
          className="mt-10 text-base md:text-lg rounded-2xl shadow-[0_10px_22px_rgba(0,0,0,0.22)]"
        />
      </div>
    </section>
  )
}