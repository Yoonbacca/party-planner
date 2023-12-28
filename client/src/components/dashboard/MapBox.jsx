import { useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Form, Input } from 'antd';

const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: ["places"],
  });

const MapBox = () => {

    return (
        <>
      <Form.Item
        name="location"
        rules={[
          {
            required: false,
            message: 'Please input your location!',
          },
        ]}>
          <Input.Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
      </Form.Item>
        </>
            )
};

export default MapBox;