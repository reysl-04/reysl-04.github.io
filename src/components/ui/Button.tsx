interface ButtonProps {
  text: string;
    onClick?: () => void;
    className?: string;
}

export default function Button({ text, onClick, className = "" }: ButtonProps) {
        const base = "cursor-pointer rounded-xl border border-black px-4 py-2.5 text-sm font-semibold text-white bg-black hover:bg-white hover:text-black transition-all duration-300 box-border";

    return (
                <button className={`${base} ${className}`} onClick={onClick}>
            {text}
        </button>
    )
}