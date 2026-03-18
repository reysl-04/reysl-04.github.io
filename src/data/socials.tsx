import { socials } from "../data/socials"

export default function Socials() {
    return (
        <div className="flex items-center justify-center gap-5">
            {socials.map((social) => (
                <div 
                key = {social.name}
                className="img-container group w-10 h-10 transition-transform duration-500 ease-in-out delay-100 hover:delay-100 hover:scale-150"
                >
                <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex w-full h-full items-center justify-center rounded-xl bg-white p-1 transition-colors duration-500 ease-in-out delay-0 hover:bg-black"
                >
                    <img
                        src={social.link}
                        alt={social.name}
                        className="w-full h-full object-contain origin-center transition-[filter] duration-500 ease-in-out delay-0 group-hover:delay-100 group-hover:invert"
                    />
                </a>
                </div>
            ))}
        </div>
    )
}