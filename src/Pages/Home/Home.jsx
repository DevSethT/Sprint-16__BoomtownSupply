import Header from "../../componates/Header/Header";
import JuiceCard from "../../componates/JuiceCard/JuiceCard";
import LocationCard from "../../componates/LocationCard/LocationCard";

function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* closest location should be the first card */}
      <div className="Home__location">
        <LocationCard />
      </div>
      {/* Juice of the Week Card */}
      <div className="home__jow">
        <p className="home__jowTitle">Juice Of The Week</p>
        <JuiceCard />
      </div>

      {/* small about and or contact and apply button */}
      <div className="home__contact">
        <p className="home__about">Small about us</p>
        <button className="home__email">Contact Us</button>
        <button className="home__applay">Apply Here</button>
      </div>
    </>
  );
}

export default Home;
