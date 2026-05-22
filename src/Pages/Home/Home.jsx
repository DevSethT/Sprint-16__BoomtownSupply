import "./Home.css";
import Header from "../../componates/Header/Header";
import JuiceCard from "../../componates/JuiceCard/JuiceCard";
import LocationCard from "../../componates/LocationCard/LocationCard";
import Juices from "../../Utils/Juice";
import Locations from "../../Utils/Locations";

function Home() {
  const JuiceOfTheWeek = Juices.find((juice) => juice.featured);
  const featuredLocation = Locations.find((location) => location.featured);

  return (
    <div className="home__page">
      <h1>Home</h1>
      {/* closest location should be the first card */}
      <div className="home__location">
        <LocationCard
          name={featuredLocation.name}
          lat={featuredLocation.lat}
          lon={featuredLocation.lon}
          phone={featuredLocation.phone}
          img={featuredLocation.image}
        />
      </div>
      {/* Juice of the Week Card */}
      <div className="home__jow">
        <p className="home__jowTitle">Juice Of The Week</p>
        <JuiceCard
          name={JuiceOfTheWeek.name}
          img={JuiceOfTheWeek.img}
          flavor={JuiceOfTheWeek.flavor}
          mg={JuiceOfTheWeek.mg}
        />
      </div>

      {/* small about and or contact and apply button */}
      <div className="home__contact">
        <p className="home__about">
          Family Owned and Operated, Established in 2014
        </p>
        <p className="home__about">Supporting Texans' Freedom Since Day One</p>
        <div className="home__contact-btns">
          <button className="home__email home__btn">Contact Us</button>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSckyBSAuK7SzmjNDqNjtrDm9KSOqcATtrtW1kdavFrTycB1Ow/viewform?c=0&w=1">
          <button  className="home__apply home__btn">Apply Here</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
