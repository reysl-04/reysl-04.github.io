// Importing States from React
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

// Defining interface of item of every navcard object 
interface NavCardItem {
    heading: string
    subheading: string
    date: string
    description: string[]
    tags: string[]
    url: string
    urlLabel: string
}

// Defining interface of navcard properties (for experience & projects)
interface NavCardProps {
    label: string
    items: NavCardItem[]
}

// NavCard components
export default function NavCard({ label, items }: NavCardProps) {
    // Navigate through items using index state
    const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    // State to check the dropdown menu
    const [menuOpen, setMenuOpen] = useState(false)

    // Current index
    const current = items[index]

    // Function to navigate to the next item
    // FUTURE FIX: IF INDEX OUT OF RANGE, GO BACK TO THE BEGINNING / END
    const goTo = (i: number, dir = 0) => {
      let nextIndex = i

      if (i >= items.length) {
        nextIndex = 0
      } else if (i < 0) {
        nextIndex = items.length - 1
      }

      if (dir === 0) {
        if (nextIndex === index) {
          dir = 0
        } else if (index === items.length - 1 && nextIndex === 0) {
          dir = 1
        } else if (index === 0 && nextIndex === items.length - 1) {
          dir = -1
        } else {
          dir = nextIndex > index ? 1 : -1
        }
      }

      setDirection(dir)
      setIndex(nextIndex)
    }

    const slideVariants = {
      enter: (dir: number) => ({
        x: dir > 0 ? 48 : dir < 0 ? -48 : 0,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (dir: number) => ({
        x: dir > 0 ? -48 : dir < 0 ? 48 : 0,
        opacity: 0,
      }),
    }

    // Card format
      return (
    <div className="relative flex h-180 w-136 max-w-full flex-col rounded-3xl border border-[#E8A020]/25 bg-linear-to-b from-[#0f1625]/95 to-[#0a0f1a]/95 p-7 shadow-[0_20px_55px_rgba(0,0,0,0.45)]">
 
      {/* Dropdown menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)", y: -6 }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0)", y: 0 }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)", y: -6 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 z-10 rounded-2xl border border-[#E8A020]/24 bg-[#070b14]/96 p-7 pb-5 backdrop-blur-sm"
          >
            <div className="mb-7 flex items-center justify-between">
              <p className="text-[0.65rem] tracking-[0.22em] uppercase text-[#edf2ff]/65">
                {label}
              </p>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-4 w-4 cursor-pointer items-center justify-center text-sm leading-none text-[#edf2ff]/65 transition-colors hover:text-[#edf2ff]"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {items.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => { 
                      goTo(i, i === index ? 0 : i > index ? 1 : -1)
                      setMenuOpen(false); 
                  }}
                    className={`w-full cursor-pointer rounded-lg px-3 py-2 text-left text-sm transition-colors duration-150 ${
                      i === index
                        ? "bg-[#edf2ff] text-[#0f1521]"
                        : "text-[#edf2ff]/75 hover:bg-[#edf2ff]/12 hover:text-[#edf2ff]"
                    }`}
                  >
                    {item.heading}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* Header row */}
      <div className="mb-7 flex items-center justify-between">
        <p className="text-[0.68rem] font-semibold tracking-[0.24em] uppercase text-[#edf2ff]/65">
          {label}
        </p>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="group flex cursor-pointer flex-col gap-1"
          aria-label="Open menu"
        >
          <span className="block h-px w-4 bg-[#edf2ff]/60 transition-colors group-hover:bg-[#edf2ff]" />
          <span className="block h-px w-4 bg-[#edf2ff]/60 transition-colors group-hover:bg-[#edf2ff]" />
          <span className="block h-px w-4 bg-[#edf2ff]/60 transition-colors group-hover:bg-[#edf2ff]" />
        </button>
      </div>
 
      <div className="min-h-0 flex-1 overflow-hidden">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.30, ease: [0.16, 0.5, 0.3, 1.5] }}
            className="h-full"
          >
            <div className="h-full overflow-y-auto pr-1">
              <h2 className="mb-2 text-3xl font-black leading-tight tracking-tight text-[#edf2ff]!">
                {current.heading}
              </h2>
              <p className="mb-1 text-[0.98rem] font-medium text-[#edf2ff]/82">{current.subheading}</p>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.13em] text-[#edf2ff]/55">{current.date}</p>
              <ul className="list-disc space-y-2 pl-5 text-[0.98rem] leading-relaxed text-[#edf2ff]/84 marker:text-[#E8A020]">
                {current.description.map((line, i) => (
                  <li key={i}>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#E8A020]/35 bg-[#0f1521]/55 px-3 py-1.5 text-xs font-medium tracking-wide text-[#edf2ff]/84"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 border-t border-[#edf2ff]/15 pt-5">
        <div className="mb-5 flex justify-center gap-2">
          {items.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                i === index ? "bg-[#E8A020]" : "bg-[#edf2ff]/35"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => goTo(index - 1, -1)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#edf2ff]/35 text-[#edf2ff]/78 transition-colors duration-200 hover:border-[#E8A020] hover:text-[#E8A020] disabled:cursor-not-allowed disabled:opacity-25"
          >
            ←
          </button>

          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#E8A020]/55 px-7 py-2.5 text-sm font-semibold tracking-wide text-[#edf2ff] transition-colors duration-200 hover:bg-[#E8A020] hover:text-[#0f1521]"
          >
            {current.urlLabel}
          </a>

          <button
            onClick={() => goTo(index + 1, 1)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#edf2ff]/35 text-[#edf2ff]/78 transition-colors duration-200 hover:border-[#E8A020] hover:text-[#E8A020] disabled:cursor-not-allowed disabled:opacity-25"
          >
            →
          </button>
        </div>
      </div>
 
    </div>
  )
}