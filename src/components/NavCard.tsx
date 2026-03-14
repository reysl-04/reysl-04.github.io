// Importing States from React
import { useState } from "react"

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
    // State to check the dropdown menu
    const [menuOpen, setMenuOpen] = useState(false)

    // Current index
    const current = items[index]

    // Function to navigate to the next item
    // FUTURE FIX: IF INDEX OUT OF RANGE, GO BACK TO THE BEGINNING / END
    const goTo = (i: number) => {
        if (i >= 0 && i < items.length) {
            setIndex(i)
        } else if (i >= items.length) {
            setIndex(0)
        } else {
            setIndex(items.length - 1)
        }
    }

    // Card format
      return (
    <div className="relative flex flex-col bg-black rounded-2xl p-7 w-full max-w-120 min-h-136 overflow-hidden border border-white/20">
 
      {/* Dropdown menu overlay */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-0 z-10 bg-black rounded-t-2xl border-b border-white/20 p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs tracking-widest uppercase text-white/60">
              {label}
            </p>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-white transition-colors cursor-pointer text-lg leading-none"
            >
              ✕
            </button>
          </div>
          <ul className="flex flex-col gap-1">
            {items.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => { 
                    goTo(i);
                    setMenuOpen(false); 
                }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-150 cursor-pointer ${
                    i === index
                      ? "bg-white text-black"
                      : "text-white/75 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {item.heading}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
 
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs tracking-widest uppercase text-white/60">
          {label}
        </p>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col gap-1 cursor-pointer group"
          aria-label="Open menu"
        >
          <span className="block w-4 h-px bg-white/60 group-hover:bg-white transition-colors" />
          <span className="block w-4 h-px bg-white/60 group-hover:bg-white transition-colors" />
          <span className="block w-4 h-px bg-white/60 group-hover:bg-white transition-colors" />
        </button>
      </div>
 
      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <h2 className="text-3xl font-bold text-white mb-2 truncate">
          {current.heading}
        </h2>
        <p className="text-base text-white/75 mb-1">{current.subheading}</p>
        <p className="text-sm text-white/60 mb-5">{current.date}</p>
        <p className="text-base text-white/85 leading-relaxed line-clamp-5">
          {current.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {current.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1.5 rounded-full border border-white/30 text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
 
      {/* Footer */}
      <div className="mt-6 pt-5 border-t border-white/20">
        <div className="flex justify-center gap-2 mb-5">
          {items.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                i === index ? "bg-white" : "bg-white/35"
              }`}
            />
          ))}
        </div>
 
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => goTo(index - 1)}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/30 text-white/70 hover:border-white hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
          >
            ←
          </button>
 
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-2.5 rounded-lg border border-white/40 text-white text-sm hover:bg-white hover:text-black transition-colors duration-200"
          >
            {current.urlLabel}
          </a>
 
          <button
            onClick={() => goTo(index + 1)}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/30 text-white/70 hover:border-white hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
 
    </div>
  )
}