export const dynamic = 'force-dynamic';

import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingParams } from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import { SafeUser } from "./types"; 

interface HomeProps {
  searchParams: Promise<IListingParams>;
}

const Home = async ({ searchParams }: HomeProps) => {
  const params = await searchParams;
  const listings = await getListings(params);

  let currentUser: SafeUser | null = null;
  try {
    currentUser = await getCurrentUser(); 
  } catch (error) {
    console.error("Error fetching current user in page:", error);
    currentUser = null; 
  }

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 text-black">
          {listings.map((listing) => (
            <ListingCard currentUser={currentUser} key={listing.id} data={listing} />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
