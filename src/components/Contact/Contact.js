import React from 'react';
import useTitle from '../../hooks/useTitle';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Contact = () => {
    useTitle("Contact -Roberto ")
    return (
      <div>
            <div className='mx-auto'>
                <MapContainer center={[23.798919, 90.434168]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
      </div>
    );
};

export default Contact;