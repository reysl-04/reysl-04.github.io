import Button from "../ui/Button"

export default function About() {
    return (
        <section id="about" className="w-full bg-zinc-100 px-8 pt-20 pb-20 min-[960px]:px-14 lg:px-24 min-[960px]:pt-24 min-[960px]:pb-24">
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-center text-4xl font-bold tracking-widest min-[960px]:hidden mb-6">About Me</h2>
                <div className="grid grid-cols-1 items-start gap-8 min-[960px]:grid-cols-[15rem_minmax(0,1fr)] min-[960px]:gap-18">
                    <div className="left-container flex flex-col items-center gap-4 text-center min-[960px]:items-start min-[960px]:text-left">
                        <div className="image-container w-72 h-92 overflow-hidden rounded-2xl bg-black/5">
                            <img src="#" alt="Alexander Reyes" className="h-full w-full object-cover" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl"> Hey, there! 👋</h3>
                        </div>
                    </div>

                    <div className="right-container flex flex-col gap-6">
                        <h2 className="text-center text-4xl font-bold tracking-widest hidden min-[960px]:block">About Me</h2>
                        <div className="space-y-4 tracking-wide font-light leading-relaxed text-black/80 min-[960px]:px-6 min-[960px]:py-4">
                            <p>
                                Hello! I&apos;m Alexander, AKA Alex, an aspiring Software Engineer in Plattsburgh, New York who enjoys creating high-quality
                                web and android applications for fun and, hopefully, for living. I love working on projects that challenge me and allow me
                                to learn new things.
                            </p>
                            <p>
                                Currently I&apos;m a student at SUNY Plattsburgh, pursuing a Computer Science degree and looking for real-world experience
                                in the software engineering field. Aside from coding, I am interested learning about Software Architecture, I like playing
                                video games and going to the gym. Feel free to reach out to me, or check my resume.
                            </p>
                        </div>
                        <div className="flex justify-center mt-6">
                            <Button text="Resume" className="px-9 py-3.5 text-base rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}