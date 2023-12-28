import { useState, useEffect, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Form, Input } from 'antd';

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
  } = usePlacesAutocomplete();
  
  return <></>
}


const MapBox = () => {
  const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      libraries: ["places"],
    });

    if (!isLoaded) return <div>"Loading..."</div>;
    return <Map />
  };


function Map() {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* <Form.Item
      name="location"
      rules={[
        {
          required: false,
          message: 'Please input your location!',
        },
      ]}>
        <Input.Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
    </Form.Item> */}
    <div className="places-container">
      <PlacesAutocomplete setSelected={setSelected} />
    </div>

    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName='map-container'
    >
      {selected && <Marker position={selected} />}
    </GoogleMap>
    </>
  )
}

export default MapBox;