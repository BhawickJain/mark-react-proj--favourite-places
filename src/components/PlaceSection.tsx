import "../css/placeSection.css";
import Place from "../types/Place";

function PlaceSection({
  title,
  place,
  country,
  image,
  link,
  description,
}: Place): JSX.Element {
  return (
    <section>
      <h3>
        <span>{title}</span>[<a href={link.toString()}>map link</a>]
      </h3>
      <h4>
        <span>{place}</span>,<span>{country}</span>
      </h4>
      <img
        src={image.source.toString()}
        alt={image.description}
      />
      <p>{description}</p>
    </section>
  );
}

export default PlaceSection;
