"use client";

import Link from 'next/link';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from 'react-simple-maps';

// The URL to the world map data
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Your custom locations. Replace with your actual coordinates.
// You can find coordinates here: https://www.latlong.net/
const markers = [
  { name: "Her City", coordinates: [78.9629, 20.5937], text: "My heart lives here ❤️" }, // Example: India
  { name: "Your City", coordinates: [80.9462, 26.8467], text: "My home, waiting for you..." }, // Example: Lucknow, India
  { name: "Our Dream Trip", coordinates: [12.4964, 41.9028], text: "Our Roman Holiday Someday! 🛵" } // Example: Rome, Italy
];

export default function WorldMapPage() {
  return (
    <div className="w-screen h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <div className="absolute top-5 left-5 z-10">
          <Link href="/celebrate" className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
            ← Back
          </Link>
      </div>

      <h1 className="text-3xl md:text-5xl font-greatvibes text-blue-600 mb-4">Our World</h1>
      <p className="text-gray-600 mb-6 text-center">No matter the distance, we're always connected.</p>
      
      <div className="w-full max-w-4xl border-2 border-blue-300 rounded-lg shadow-xl overflow-hidden">
        <ComposableMap projectionConfig={{ scale: 155 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E9E3C8"
                  stroke="#FFFFFF"
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, text }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={8} fill="#F56565" stroke="#FFF" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={-15}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "14px", fontWeight: "bold" }}
              >
                {text}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
}