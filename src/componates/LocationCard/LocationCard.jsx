import "./LocationCard.css";

function LocationCard({ name, phone, lat, lon }) {
  return (
    <div className="locationcard">
      <div className="locationcard__title">
        <h3 className="locationcard__name">{name}</h3>
      </div>
      <div className="locationcard__imgbox">
        <img src="#" alt="Location image" className="locationcard__img" />
      </div>
      <div className="locationcard__info">
        <a href={`tel:${phone}`} className="locationcard__number">
          Call location
        </a>
        {/* hours */}
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </a>
        {/* ^ takes you to a google maps link */}
      </div>
    </div>
  );
}

export default LocationCard;
