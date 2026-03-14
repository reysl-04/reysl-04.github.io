import { skills } from "../../data/skills"

export default function Skills() {
    return (
        <section className="w-full bg-white px-8 pt-20 pb-20 md:px-14 lg:px-24 md:pt-24 md:pb-24">
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-center text-4xl font-bold tracking-widest mb-12">Skills</h2>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
                    {skills.map((skill) => (
                        <div key={skill.category}>
                            <h3 className="text-base font-semibold mb-4">{skill.category}</h3>
                            <ul className="flex flex-col gap-2">
                                {skill.items.map((item) => (
                                    <li key={item} className="rounded-full border border-black/15 bg-white px-3 py-1.5 text-sm font-medium text-center">
                                        {item}
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