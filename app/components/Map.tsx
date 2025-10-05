"use client"

import { LatLngExpression } from "leaflet";
import { MapContainer, Marker } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"

interface MapProps {
    center? : LatLngExpression
}

const Map = ({center} : MapProps) => {
    return (
       <MapContainer center={center || [51.505, -0.09]} className="h-[35vh] rounded-lg" zoom={10} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={center || [51.505, -0.09]}></Marker>
       </MapContainer>
    )
}

export default Map