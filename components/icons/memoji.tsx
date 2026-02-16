import Image from "next/image"

export const Memoji = () => {
    return (
        <Image src="/memoji.png" className="w-15 h-15 rounded-full bg-[var(--primary)] object-cover p-2 transition-colors duration-300 group-hover:bg-[var(--secondary)]" alt="Icon Memoji" width={60} height={60} />
    )
}