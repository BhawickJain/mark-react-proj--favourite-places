import "../css/FavouritePlaces.css";
import placesData from "../utils/placesData";
import PlaceSection from "./PlaceSection";

function FavouritePlaces(): JSX.Element {
  return (
    <>
      <div>
        <h3>The following are my favourite places!</h3>
      </div>
      {placesData.map((pl, index) => (
        <PlaceSection
          key={index}
          title={pl.title}
          place={pl.place}
          country={pl.country}
          image={pl.image}
          link={pl.link}
          description={pl.description}
        />
      ))}
    </>
  );
}

export default FavouritePlaces;
