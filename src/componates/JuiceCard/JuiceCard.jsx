import "./JuiceCard.css";

function JuiceCard({ name, flavor, mg, featured, img }) {
  return (
    <div className={featured ? "juicecard juicecard__featuered" : "juicecard"}>
      <div className="juicecard__title">
        <h3 className="juicecard__name">{name}</h3>
      </div>
      <div className="juicecard__imgbox">
        <img src={img} alt={name} className="juicecard__img" />
      </div>
      <div className="juicecard__info">
        <p className="juicecard__FT">Flavor Profile:</p>
        <p className="juicecard__flavor">{flavor}</p>
        <p className="juicecard__mg">Strength: {mg}mg</p>
      </div>
    </div>
  );
}

export default JuiceCard;
