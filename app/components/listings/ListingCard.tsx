import { Listing } from "@prisma/client"

interface ListingCardProps {
    data: Listing
}

const ListingCard = ({data}:ListingCardProps) => {
    return (
        <div className="text-black">
            Listing card
        </div>
    )
}

export default ListingCard