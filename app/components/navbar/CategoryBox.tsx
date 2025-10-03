"use client"

import { useSearchParams,useRouter } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string"

interface CategoryProps {
    icon: IconType;
    label: string;
    description?: string;
    selected?: boolean
}



const CategoryBox = ({icon : Icon ,label,selected}: CategoryProps) => {
    const router = useRouter();
    const params = useSearchParams()

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        let updatedQuery : Record<string,string> = {
            ...currentQuery,
            category: label
        }

        if(params?.get("category") === label) {
            const {category, ...rest} = updatedQuery;
            updatedQuery  = rest
        }

        const url = qs.stringifyUrl({
            url: "/",
            query: updatedQuery
        }, {skipNull: true})

        router.push(url)

    },[label,params,router])

    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? "border-b-neutral-800" : null }
        ${selected ? "text-neutral-800": "text-neutral-500"}`}>
            <Icon size={26}/>

            <div className="font-medium text-sm"> 
                {label} 
            </div>

        </div>
    )
}

export default CategoryBox