import imageTitan from "../../../assets/destination/image-titan.png";

export default function Titan() {
  return (
    <div>
      <ul className="destination-card">
        <li>
          <img className="destination-image" src={imageTitan} alt="" />
        </li>
        <li>
          <h1>TITAN</h1>
        </li>
        <li>
          <p>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
        </li>
        <li>
          <hr />
        </li>
        <li>
          <ul className="destination-information-card">
            <div>
              <li>
                <h5>Avg. DISTANCE</h5>
              </li>
              <li>
                <h2>1.6 BIL. KM</h2>
              </li>
            </div>

            <div>
              <li>
                <h5>EST. TRAVEL TIME</h5>
              </li>
              <li>
                <h2>7 YEARS</h2>
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  );
}
