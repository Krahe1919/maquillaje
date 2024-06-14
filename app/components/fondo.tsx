import Image from "next/image"

interface FondoProps {
    className?: string;
    children?: React.ReactNode;
}

export const Fondo  = () => {
    return(
        <div className="flex items-end justify-end fixed">
            <div>
            <Image 
                src="/fondo.png"
                width={1700}
                height={0}
                alt="fondo"
                />
            </div>
        </div>
    )
}