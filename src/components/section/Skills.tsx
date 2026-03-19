import { skills } from "../../data/skills"

export default function Skills() {
    return (
        <section className="w-full bg-[#D9E1F8] px-8 pt-20 pb-20 md:px-14 lg:px-24 md:pt-24 md:pb-24">
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-center text-4xl md:text-5xl font-bold tracking-widest mb-12">Skills</h2>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
                    {skills.map((skill) => (
                        <div key={skill.category}>
                            <h3 className="text-base font-semibold mb-4">{skill.category}</h3>
                            <ul className="flex flex-col gap-2">
                                {skill.items.map((item) => (
                                    <li
                                        key={item}
                                        className="group relative isolate overflow-hidden rounded-full border border-[#1A2336]/20 bg-[#3A5080] px-3 py-1.5 text-center text-sm font-medium text-[#EDF2FF]"
                                    >
                                        <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#1A2336] transition-transform duration-400 ease-out group-hover:scale-x-100" />
                                        <span className="relative z-10 transition-colors duration-600 ease-out group-hover:text-[#E8A020]">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}