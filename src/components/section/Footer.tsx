import Socials from "../socials";

export default function Footer() {
    return (
        <footer className="w-full bg-[#8899BB] px-8 py-8 md:px-14 lg:px-24 items-center mb-0 flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="footer-element">
                <p className="m-0 text-xl font-black tracking-tight text-(--text)">Alexander.</p>
            </div>
            <div className="footer-element">
                <p className="m-0 text-sm text-(--text-muted)">Made with ❤️ with ReactTS</p>
            </div>
            <div className="footer-element w-1/3">
                <Socials />
            </div>
        </footer>
    )
}