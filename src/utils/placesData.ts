import Place from "../types/Place";

const placesData: Place[] = [
  {
    title: "Darwin International Airport",
    place: "Darwin",
    country: "Australia",
    image: {
      source: new URL("https://live.staticflickr.com/65535/40941088373_a17f8a28c8_b.jpg"),
      description: "An Embraer 120 small propellor aircraft taking off in a backdrop of tropical trees"
    },
    link: new URL("https://goo.gl/maps/V5HRMcnG7Q4Z7vVp7"),
    description: "A great place to learn flying!",
  },
  {
    title: "Bristol University",
    place: "Bristol",
    country: "United Kingdom",
    image: {
      source: new URL("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.icpp-conf.org%2F2017%2Fimg%2Fwills-memorial-building.jpg&f=1&nofb=1"),
      description: "Uphill view of Gothic Will's Memorial Building from Park Street"
    },
    link: new URL("https://goo.gl/maps/4FEnMiD13J2vCDP28"),
    description: "The Library inside is wonderful and but it's all uphill!",
  }
];

export default placesData;
