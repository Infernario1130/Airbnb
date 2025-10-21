import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface FavoritesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const FavoritesClient = ({listings,currentUser}: FavoritesClientProps) => {
    return (
        <Container>
            <Heading 
            title="Favorites"
            subtitle="List of places you have favourites"/>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 text-black">
                {listings.map((listing) => {
                    const formattedUser = currentUser
                    ? {
                    ...currentUser,
                        createdAt: new Date(currentUser.createdAt),
                        updatedAt: new Date(currentUser.updatedAt),
                        emailVerified: currentUser.emailVerified
                        ? new Date(currentUser.emailVerified)
                        : null,
                    }
                    : null;
                    return (
                        <ListingCard
                    currentUser={formattedUser}
                    key={listing.id}
                    data={listing}/>
                    )
                })}
            </div>
        </Container>
    )
}

export default FavoritesClient;