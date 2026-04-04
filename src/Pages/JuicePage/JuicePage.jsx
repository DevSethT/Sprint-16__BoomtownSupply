import "./JuicePage.css";

import Header from "../../componates/Header/Header";
import JuiceCard from "../../componates/JuiceCard/JuiceCard";
import Juices from "../../Utils/Juice";

function JuicePage() {
  return (
    <>
      <h1>Juice Page</h1>
      {/* map out all of the juices in cards onto this page */}

      <div className="juicepage__list">
        {Juices.map((juice) => (
          <JuiceCard
            key={juice.id}
            name={juice.name}
            flavor={juice.flavor}
            mg={juice.mg}
          />
        ))}
      </div>
    </>
  );
}

export default JuicePage;
