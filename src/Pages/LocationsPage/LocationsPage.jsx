import Header from "../../componates/Header/Header";
import LocationCard from "../../componates/LocationCard/LocationCard";
import Locations from "../../Utils/Locations";
import Map from "../../componates/Map/Map";

function LocationsPage() {
  return (
    <>
      <h1>Locations</h1>

      <Map />

      <div className="locations__container">
        <div className="locations__cards">
          {Locations.map((location) => (
            <LocationCard
              key={location.id}
              name={location.name}
              phone={location.phone}
              lat={location.lat}
              lon={location.lon}
              img={location.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default LocationsPage;

{
  /* embedded map with locations showns as bubbles on the map */
}

{
  /* locations maped from the data onto locations cards desplaying below the map */
}
