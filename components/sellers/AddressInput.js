import styles from '../../styles/sellers/Offer.module.css'
import { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
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
} from "@reach/combobox";
import "@reach/combobox/styles.css";


const libraries = ["places"]

function AddressInput({ setSelected }) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
        libraries: libraries,
    })

    if (!isLoaded) return <div>Loading...</div>

    return (
        <div className={styles.autocompleteContainer}>
            <PlacesAutocomplete setSelected={setSelected} />
        </div>
    );
}

export default AddressInput;


function PlacesAutocomplete({ setSelected }) {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async address => {
        setValue(address, false);
        clearSuggestions();
        const results = await getGeocode({ address });
        setSelected(results[0].formatted_address);
    }

    const handleChange = e => {
        setValue(e.target.value);
        setSelected(e.target.value);
    }

    return (
        <Combobox onChange={handleChange} onSelect={handleSelect}>
            <ComboboxInput
                className={styles.comboboxInput}
                value={value}
                onChange={handleChange}
                disabled={!ready}
                required
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === 'OK' && data.map(({ place_id, description }) => <ComboboxOption key={place_id} value={description} />)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
}