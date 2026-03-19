const navLinks = ["About", "Experience", "Contact"]

export default function NavBar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center rounded-full bg-[#0F1521]/85 backdrop-blur-md border border-white/50 shadow-lg px-2 py-2">
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li
              key={link}
              className="nav-link"
            >
              {link}
            </li>
          ))}
        </ul>
    </nav>
  )
}