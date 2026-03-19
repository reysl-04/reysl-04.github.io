interface ButtonProps {
  text: string;
    onClick?: () => void;
    className?: string;
}

export default function Button({ text, onClick, className = "" }: ButtonProps) {
        const base = "bg-[#1A2336] border-[#3A5080] text-[#EDF2FF] hover:bg-[#EDF2FF] hover:text-[#3A5080] hover:border-[#3A5080] cursor-pointer rounded-2xl shadow-[0_10px_22px_rgba(0,0,0,0.22)] border px-16 py-4 text-sm font-semibold transition-all duration-300 box-border";

    return (
                <button className={`${base} ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}