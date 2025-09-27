"use client"

interface MenuItemProps {
    onClick: () => void;
    label: string
}

const MenuItem = ({onClick,label}: MenuItemProps) => {
    return (
        <div onClick={onClick} className="p-1 hover:bg-gray-100 border-[1px] border-gray-200 rounded-lg mr-2 mt-1 hover:shadow-md transition-delay-50 duration-100">
            {label}
        </div>
    )
}

export default MenuItem