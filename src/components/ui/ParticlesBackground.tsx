import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { ISourceOptions } from "@tsparticles/engine"

interface ParticlesBackgroundProps {
  id?: string
  className?: string
}

export default function ParticlesBackground({
  id = "particles-background",
  className = "pointer-events-auto absolute inset-0 z-0 opacity-80",
}: ParticlesBackgroundProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    void initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setReady(true)
    })
  }, [])

  const options = useMemo<ISourceOptions>(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    return {
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 60,
      particles: {
        number: {
          value: 240,
          density: { enable: true, area: 900 },
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.06, max: 0.22 },
        },
        size: {
          value: { min: 1.2, max: 4.2 },
        },
        move: {
          enable: !prefersReducedMotion,
          direction: "none",
          speed: 1,
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        links: {
          enable: false,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: !prefersReducedMotion, mode: "bubble" },
          onClick: { enable: false, mode: "push" },
          resize: { enable: true },
        },
        modes: {
          bubble: {
            distance: 120,
            duration: 1.4,
            opacity: 0.35,
            size: 5,
          },
        },
      },
    }
  }, [])

  if (!ready) return null

  return (
    <div className={className} aria-hidden="true">
      <Particles id={id} options={options} className="h-full w-full" />
    </div>
  )
}