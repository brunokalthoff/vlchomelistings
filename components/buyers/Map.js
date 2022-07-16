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
        try {
            const marks = [];

            for (const item of searchResults) {
                const result = await getGeocode({ address: item.adres });
                const { lat, lng } = await getLatLng(result[0]);
                const newMarker = { title: item.adres, position: { lat: lat, lng: lng } }
                marks.push(newMarker);
            }

            setMarkers(marks);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
    })

    if (!isLoaded) return <div>Loading...</div>

    return <GoogleMap zoom={10} center={{ lat: 43.5, lng: -81 }} mapContainerClassName={styles.container}>
        {markers && markers.map((marker, key) => <MarkerF key={key} icon={{
            path:
                "M44 47H7V21.2187L3.09202 24.4322L0 20.6719L9 13.2713V6H14V9.15992L25.1396 5.94738e-06L50.172 20.7599L47.0668 24.5093L44 21.7322V47Z",
            fillColor: "#5fbffb",
            fillOpacity: 0.9,
            scale: .8,
            strokeColor: "#162D3B",
            strokeWeight: 2,
        }}
            title={marker.title} position={marker.position}></MarkerF>)}
    </GoogleMap>
}

export default Map;

