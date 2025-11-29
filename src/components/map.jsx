import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// ГОТОВЫЙ КОМПОНЕНТ КАРТЫ
// Использование:
// <UniversalMap lat={51.5194} lng={-0.0977} text="Лондон, офис" />

export default function UniversalMap({
  lat = 51.5194,
  lng = -0.0977,
  zoom = 14,
  text = 'Метка на карте',
}) {
  return (
    <div className="w-full h-full rounded-md overflow-hidden">
      <MapContainer
        center={[lat, lng]}
        zoom={zoom}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>{text}</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
