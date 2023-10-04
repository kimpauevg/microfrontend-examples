import React from "react";
import styles from "./mars-weather.module.scss";

export function MarsWeather() {
  return (
    <div className={styles.container}>
      <img
        src="https://cdn.pixabay.com/photo/2012/04/05/00/54/mars-25461_1280.png"
        alt="mars"
      />
      <div>
        <h1>MARS WEATHER</h1>
        <h2>
          Martian day (sol): <span>345</span>
        </h2>
        <h2>
          Temperature: <span>-60°C</span>
        </h2>
      </div>
    </div>
  );
}

// export the app as default because dynamic imports returns the default export
export default MarsWeather;
