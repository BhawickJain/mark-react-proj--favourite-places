import PlaceImage from "./PlaceImage";


interface Place {
  title: string;
  place: string;
  country: string;
  image: PlaceImage;
  link: URL;
  description: string;
}

export default Place;
