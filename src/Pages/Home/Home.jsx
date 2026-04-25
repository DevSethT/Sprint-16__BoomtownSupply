import "./Home.css";
import Header from "../../componates/Header/Header";
import JuiceCard from "../../componates/JuiceCard/JuiceCard";
import LocationCard from "../../componates/LocationCard/LocationCard";
import Juices from "../../Utils/Juice";

function Home() {
  const JuiceOfTheWeek = Juices.find((juice) => juice.featured);

  return (
    <div className="home__page">
      <h1>Home</h1>
      {/* closest location should be the first card */}
      <div className="home__location">
        <LocationCard />
      </div>
      {/* Juice of the Week Card */}
      <div className="home__jow">
        <p className="home__jowTitle">Juice Of The Week</p>
        <JuiceCard
          name={JuiceOfTheWeek.name}
          img={JuiceOfTheWeek.img}
          flavor={JuiceOfTheWeek.flavor}
        />
      </div>

      {/* small about and or contact and apply button */}
      <div className="home__contact">
        <p className="home__about">Small about us</p>
        <button className="home__email">Contact Us</button>
        <button className="home__applay">Apply Here</button>
      </div>
    </div>
  );
}

export default Home;
