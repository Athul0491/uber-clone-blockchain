import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

const style = {
  wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken =
  process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ||
  "pk.eyJ1IjoiYXRodWwwNDkxIiwiYSI6ImNsMWpieWJzOTExcjgzZXF1Mm1uYnI0ejUifQ.9pYx3prSS4bWr9w77OXpxA";
console.log(mapboxgl.accessToken);
const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [78.9629, 20.5937],
      zoom: 3,
    });
  }, []);
  return <div className={style.wrapper} id="map" />;
};

export default Map;
