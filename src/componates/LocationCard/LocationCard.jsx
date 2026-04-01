import "./LocationCard.css";

function LocationCard() {
  return (
    <div className="locationCard">
      <img src="#" alt="Location image" className="locationcard__img" />
      <h3 className="locationcard__name">Name</h3>
      <p className="location__number">1 123-456-7890</p>
      {/* hours */}
      <button>get Directions</button>
      {/* ^ takes you to a google maps link */}
    </div>
  );
}

export default LocationCard;
