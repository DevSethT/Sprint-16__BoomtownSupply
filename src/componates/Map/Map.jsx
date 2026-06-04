import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";
import Locations from "../../Utils/Locations";

function Map() {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGVhdGhzZGV2IiwiYSI6ImNtbmYyMDRyejA1cmMyb3BwejZmZGNhbDcifQ.YF4w7BBw7wbaAIcvCI2-qg";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-94.384246, 29.824509],
      zoom: 8,
    });

    Locations.forEach((location) => {
      new mapboxgl.Marker()
        .setLngLat([location.lon, location.lat])
        .addTo(mapRef.current);
    });

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <section className="map__container">
      <p className="map__title">Boomtown Supply Locations</p>
      <div id="map" className="map__map" ref={mapContainerRef}></div>
    </section>
  );
}

export default Map;
