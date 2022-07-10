import { homes } from "../../components/listings";
import { useRouter } from 'next/router'

function Listing() {
    const router = useRouter()
    const { msl } = router.query

    const fetchedListing = homes.find(listing => listing.msl == msl)
    console.log(fetchedListing)
    return (
        <div>
            {fetchedListing.adress}
            <img src={fetchedListing.img[0]} alt="" />
        </div>
    );
}

export default Listing;