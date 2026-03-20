import Button from "../ui/Button"
import Socials from "../socials"
import { scrollToSection } from "../../utilities/scroll"
import { createContainerVariants, createItemVariants } from "../../utilities/animations"

import ParticlesBackground from "../ui/ParticlesBackground"
import { motion, useReducedMotion } from "framer-motion"

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const reduceMotion = shouldReduceMotion ?? false
  const containerVariants = createContainerVariants(reduceMotion)
  const itemVariants = createItemVariants(reduceMotion)

  return (
    <section className="relative overflow-hidden bg-[#0F1521] w-full min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center">
      <ParticlesBackground />

      <motion.div
        className="relative z-10 w-full max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="mb-3 text-xs uppercase tracking-[0.28em] font-medium text-[#EDF2FF]/60">Hello I&apos;m</motion.p>
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wide leading-[0.95] text-[#EDF2FF]/85!">
          Alexander Reyes
        </motion.h1>
        <motion.hr variants={itemVariants} className="my-6 w-[min(46rem,96%)] mx-auto border-[#EDF2FF]/65" />
        <motion.h2 variants={itemVariants} className="mb-0 text-sm md:text-base uppercase tracking-[0.24em] font-semibold text-[#E8A020]!">
          Software Engineer | Back End Developer
        </motion.h2>
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-3xl mt-10 flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: reduceMotion ? 0 : 0.25 }}
      >
        <motion.p variants={itemVariants} className="max-w-[62ch] text-base md:text-lg leading-relaxed font-normal tracking-normal text-[#EDF2FF]/80">
          A software engineer and game enjoyer based in Plattsburgh, New York who enjoys
          crafting creative and high-quality web and Android applications.
        </motion.p>

        <motion.div variants={itemVariants} className="my-2">
          <Socials />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            text="Get to know me"
            onClick={() => scrollToSection("about")}
            className="mt-10 text-base md:text-lg rounded-2xl shadow-[0_10px_22px_rgba(0,0,0,0.22)]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}