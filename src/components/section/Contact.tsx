import Button from "../ui/Button"

export default function Contact() {
    return (
        <section id="contact" className="w-full bg-[#D9E1F8] px-8 py-20 md:px-14 lg:px-24 md:py-24">
            <div className="mx-auto w-full max-w-4xl text-center">
                <h2 className="text-4xl font-bold tracking-widest mb-20 md:mb-24">Let&apos;s build something together!</h2>

                <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-[#3c3c3c] bg-[#1e1e1e] text-left shadow-sm">
                    <div className="flex items-center justify-between border-b border-[#2a2a2a] bg-[#252526] px-4 py-2">
                        <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <p className="text-xs text-[#cccccc]">contact.js</p>
                        <span className="w-14" />
                    </div>

                    <pre className="overflow-x-auto p-4 text-sm leading-7 font-mono md:p-5">
                        <code>
<span className="text-[#858585]">1</span>{"  "}<span className="text-[#569cd6]">const</span>{" "}<span className="text-[#9cdcfe]">you</span>{" = "}<span className="text-[#dcdcaa]">window</span>.<span className="text-[#dcdcaa]">prompt</span>(<span className="text-[#ce9178]">"Type: hire me"</span>)<span className="text-[#858585]">;</span>
{"\n"}
<span className="text-[#858585]">2</span>
{"\n"}
<span className="text-[#858585]">3</span>{"  "}<span className="text-[#569cd6]">const</span>{" "}<span className="text-[#dcdcaa]">contactMe</span><span className="text-[#858585]">{" = ("}</span><span className="text-[#9cdcfe]">you</span><span className="text-[#858585]">{") => "}</span><span className="text-[#858585]">&#123;</span>
{"\n"}
<span className="text-[#858585]">4</span>{"    "}<span className="text-[#569cd6]">if</span><span className="text-[#858585]">{" ("}</span><span className="text-[#9cdcfe]">you</span><span className="text-[#858585]">{" === "}</span><span className="text-[#ce9178]">"hire me"</span><span className="text-[#858585]">{") "}</span><span className="text-[#858585]">&#123;</span>
{"\n"}
<span className="text-[#858585]">5</span>{"      "}<span className="text-[#569cd6]">return</span><span className="text-[#858585]">{" "}</span><span className="text-[#ce9178]">"Let's connect"</span><span className="text-[#858585]">;</span>
{"\n"}
<span className="text-[#858585]">6</span>{"    "}<span className="text-[#858585]">&#125;</span>
{"\n"}
<span className="text-[#858585]">7</span>{"    "}<span className="text-[#569cd6]">return</span>{" "}<span className="text-[#ce9178]">"Still open to talk"</span><span className="text-[#858585]">;</span>
{"\n"}
<span className="text-[#858585]">8</span>{"  "}<span className="text-[#858585]">&#125;&#59;</span>
{"\n"}
<span className="text-[#858585]">9</span>
{"\n"}
<span className="text-[#858585]">10</span>{" "}<span className="text-[#dcdcaa]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#dcdcaa]">contactMe</span>(<span className="text-[#9cdcfe]">you</span>))<span className="text-[#858585]">;</span>
                        </code>
                    </pre>
                </div>

                <p className="mt-8 text-black/80">
                    I am currently looking for new opportunities to grow as a great Software Engineer.
                </p>
                <p className="mt-2 text-black/80">
                    Feel free to reach out! I always have time to work on new challenges.
                </p>

                <div className="mt-18 flex justify-center">
                    <Button text="Contact Me" className="px-9 py-3.5 text-base rounded-2xl" />
                </div>
            </div>
        </section>
    )

}