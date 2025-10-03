"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter()
    return (
        <Image onClick={()=> router.push("/")}
        height="50"
        width="50"
        alt="Logo"
        className="hidden md:block cursor pointer"
        src="/logo.png"/>
    )
}

export default Logo