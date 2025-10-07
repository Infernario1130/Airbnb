"use client"

import React, { useState, useEffect} from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
    fallback?: React.ReactNode
}

const ClientOnly = ({children,fallback} : ClientOnlyProps) => {
    const [isMounted,setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted) {
        return (
            <>
            {fallback}
            </>
        )
    }
    return (
        <>
        {children}
        </>
    )
}

export default ClientOnly