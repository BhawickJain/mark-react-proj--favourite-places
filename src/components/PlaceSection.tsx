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
    <section className="pad, pad-top-bottom">
      <div>
        <h3>
          <span>{title}</span>[<a href={link.toString()}>map link</a>]
        </h3>
        <h4>
          <span>{place}</span>,<span>{country}</span>
        </h4>
      </div>
      <img src={image.source.toString()} alt={image.description} />
      <div className="pad">
        <p>{description}</p>
      </div>
    </section>
  );
}

export default PlaceSection;
