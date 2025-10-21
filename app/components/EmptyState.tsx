"use client"

import { useRouter } from "next/navigation";
import Heading from "./Heading";

interface EmptyStateProps {
    title? : string;
    subtitle? : string;
    showReset? : boolean
}

const EmptyState = ({title,subtitle,showReset}:EmptyStateProps) => {

    const router = useRouter()

    return (
        <div className="h-[60vh] flex flex-col gap-2 justify-center itmes-center">
            <Heading title={title ?? "No exact matches"} subtitle={subtitle ?? "Try changing or removing few of your filters"}/>
        </div>
    )
}

export default EmptyState