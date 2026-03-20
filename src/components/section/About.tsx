import Button from "../ui/Button"
import { AnimatedItem, AnimatedSection } from "../ui/AnimatedContent"

export default function About() {
    const downloadResume = () => {
        const resumeUrl = new URL(
            `${import.meta.env.BASE_URL}alexander-reyes-resume.pdf`,
            window.location.origin
        ).toString()

        const link = document.createElement("a")
        link.href = resumeUrl
        link.download = "Alexander_Reyes_Resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="about" className="w-full bg-[#8899BB] px-8 pt-20 pb-20 min-[960px]:px-14 lg:px-24 min-[960px]:pt-24 min-[960px]:pb-24 min-[960px]:mb-0">
            <AnimatedSection className="mx-auto w-full max-w-5xl" amount={0.18}>
                <AnimatedItem>
                    <h2 className="text-center text-4xl md:text-5xl font-bold tracking-wider min-[960px]:hidden mb-8]">About Me</h2>
                </AnimatedItem>

                <div className="grid grid-cols-1 items-start gap-8 min-[960px]:grid-cols-[15rem_minmax(0,1fr)] min-[960px]:gap-18">
                    <AnimatedItem className="left-container flex flex-col items-center gap-4 text-center min-[960px]:items-start min-[960px]:text-left">
                        <div className="mt-10 [960px]:mt-0 image-container w-64 h-84 overflow-hidden rounded-2xl border">
                            <img src="#" alt="Alexander Reyes" className="h-full w-full object-cover" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg md:text-xl font-semibold tracking-normal"> Hey, there! 👋</h3>
                        </div>
                    </AnimatedItem>

                    <AnimatedItem className="right-container flex flex-col gap-6">
                        <h2 className="text-center text-4xl md:text-5xl font-bold hidden min-[960px]:block tracking-wide">About Me</h2>
                        <div className="space-y-5 tracking-wide font-light leading-relaxed min-[960px]:px-6 min-[960px]:py-4">
                            <p>
                                Hello! I&apos;m Alexander, AKA Alex, an aspiring <span className="text-[#E8A020] font-extrabold">Software Engineer</span> in Plattsburgh, New York. I enjoy creating high-quality web and Android applications and love working on projects that challenge me and allow me to learn new things.
                            </p>
                            <p>
                                Currently, I&apos;m a student at SUNY Plattsburgh pursuing a Computer Science degree and seeking real-world experience in software engineering. Beyond coding, I&apos;m interested in Software Architecture, video games, and fitness. Feel free to reach out or check my resume.
                            </p>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Button onClick={downloadResume} text="Resume" className="px-9 py-3.5 text-base rounded-2xl" />
                        </div>
                    </AnimatedItem>
                </div>
            </AnimatedSection>
        </section>
    )
}