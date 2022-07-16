import styles from '../../styles/buyers/Map.module.css'
import { useEffect, useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const icon = {
    path: "M44 47H7V21.2187L3.09202 24.4322L0 20.6719L9 13.2713V6H14V9.15992L25.1396 5.94738e-06L50.172 20.7599L47.0668 24.5093L44 21.7322V47Z",
    fillColor: "#2f5d7a",
    fillOpacity: 0.9,
    scale: .8,
    strokeColor: "#162D3B",
    strokeWeight: 2,
}

function Map({ searchResults }) {
    const center = useMemo(() => ({ lat: 43.5, lng: -81 }), [])
    const [selected, setSelected] = useState(null);

    const [markers, setMarkers] = useState(null);

    useEffect(() => {
        makeMarkers();
    }, [searchResults]);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
        libraries: process.env.NEXT_PUBLIC_GOOGLE_MAPS_LIBRARIES,
    })

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

    if (!isLoaded) return <div>Loading...</div>

    return (
        <>
            

            <GoogleMap zoom={10} center={center} mapContainerClassName={styles.container}>
            <div className={styles.autocompleteContainer}>
                <PlacesAutocomplete setSelected={setSelected} />
            </div>
                {selected && <MarkerF position={selected} icon={icon} />}
                {markers && markers.map((marker, key) => <MarkerF key={key} icon={icon} title={marker.title} position={marker.position}></MarkerF>)}
            </GoogleMap>

        </>
    );
}

export default Map;

function PlacesAutocomplete({ setSelected }) {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    return (
        <Combobox>
            <ComboboxInput
                className={styles.comboboxInput}
                value={value}
                onChange={e => setValue(e.target.value)}
                disabled={!ready}
                placeholder='Search an address' />
            <ComboboxPopover>
                <ComboboxList>
                    {status === 'OK' && data.map(({ place_id, description }) => <ComboboxOption key={place_id} value={description} />)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
}
