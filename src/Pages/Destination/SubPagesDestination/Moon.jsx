import imageMoon from "../../../assets/destination/image-moon.png";

export default function Moon() {
  return (
    <div>
      <ul className="destination-card">
        <li>
          <img className="destination-image" src={imageMoon} alt="" />
        </li>
        <li>
          <h1>MOON</h1>
        </li>
        <li>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </li>
        <li>
          <hr />
        </li>

        <li>
          <div className="destination-information-card">
            <div>
              <li>
                <h5>Avg. DISTANCE</h5>
              </li>
              <li>
                <h2>384,400 KM</h2>
              </li>
            </div>

            <div>
              <li>
                <h5>EST. TRAVEL TIME</h5>
              </li>
              <li>
                <h2>3 DAYS</h2>
              </li>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
