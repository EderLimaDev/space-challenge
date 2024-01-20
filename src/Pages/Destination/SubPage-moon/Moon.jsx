import imageMoon from "../../../assets/destination/image-moon.png";

export const Moon = () => {
  return (
    <div>
      <ul>
        <li>
          <img src={imageMoon} alt="" />
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
          <h5>Avg. distance</h5>
        </li>
        <li>
          <h2>384,400 km</h2>
        </li>
        <li>
          <h5>Est. travel time</h5>
        </li>
        <li>
          <h2>3 days</h2>
        </li>
      </ul>

      <ul />
    </div>
  );
};
