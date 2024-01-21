import imageEurope from "../../../assets/destination/image-europa.png";

export default function Europe() {
  return (
    <div>
      <ul className="destination-card">
        <li>
          <img className="destination-image" src={imageEurope} alt="" />
        </li>
        <li>
          <h1>EUROPE</h1>
        </li>
        <li>
          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
        </li>
        <li>
          <hr />
        </li>
        <li>
          <h5>Avg. DISTANCE</h5>
        </li>
        <li>
          <h2>628 MIL. KM</h2>
        </li>
        <li>
          <h5>EST. TRAVEL TIME</h5>
        </li>
        <li>
          <h2>3 YEARS</h2>
        </li>
      </ul>
    </div>
  );
};
