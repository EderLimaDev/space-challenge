import imageMars from "../../../assets/destination/image-mars.png";

export default function Mars() {
  return (
    <div>
      <ul className="destination-card">
        <li>
          <img className="destination-image" src={imageMars} alt="" />
        </li>
        <li>
          <h1>MARS</h1>
        </li>
        <li>
          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
        </li>
        <li>
          <hr />
        </li>
        <li>
          <h5>Avg. DISTANCE</h5>
        </li>
        <li>
          <h2>225 MIL. KM</h2>
        </li>
        <li>
          <h5>EST. TRAVEL TIME</h5>
        </li>
        <li>
          <h2>9 MONTHS</h2>
        </li>
      </ul>
    </div>
  );
};
