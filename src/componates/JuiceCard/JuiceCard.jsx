import "./JuiceCard.css";

function JuiceCard({ name, flavor, mg }) {
  return (
    <div className="juicecard">
      <div className="juicecard__title">
        <h3 className="juicecard__name">{name}</h3>
      </div>
      <div className="juicecard__imgbox">
        <img src="#" alt="juice-image" className="juicecard__img" />
      </div>
      <div className="juicecard__info">
        <p className="juicecard__flavor">{flavor}</p>
        <p className="juicecard__mg">{mg}</p>
      </div>
    </div>
  );
}

export default LocationCard;
