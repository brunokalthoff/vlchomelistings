import { motion } from 'framer-motion';
import styles from '../../styles/buyers/Map.module.css'
import { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

function Map({ searchResults }) {

    const [markers, setMarkers] = useState(null);

    useEffect(() => {
        makeMarkers();
    }, [searchResults]);

    const makeMarkers = async () => {
        const marks = [];
        for (let i = 0; i < searchResults.length; i++) {
            const result = searchResults[i].adress;
            console.log('result:', result)
            const geoCode = await getGeocode({ adress: result });
            console.log('geocode: ', geoCode)
            const { lat, lng } = await getLatLng(geoCode);
            const newMarker = { title: searchResults[i].title, position: { lat: lat, lng: lng } }
            marks.push(newMarker);
        }
        setMarkers(marks);
    }

    // const markers = [
    //     { title: 'fist', position: { lat: 43, lng: -80 } },
    //     { title: 'second', position: { lat: 43.5, lng: -81 } },
    //     { title: 'third', position: { lat: 43, lng: -82 } },
    // ]

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
    })

    if (!isLoaded) return <div>Loading...</div>

    return <GoogleMap zoom={10} center={{ lat: 43.5, lng: -81 }} mapContainerClassName={styles.container}>
        {markers && markers.map((marker, key) => <MarkerF key={key} title={marker.title} position={marker.position} />)}
    </GoogleMap>
}

export default Map;