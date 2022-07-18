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
,
  {
    title: "Airbus Toulouse Factory",
    place: "Toulouse",
    country: "France",
    image: {
      source: new URL("https://www.airlive.net/wp-content/uploads/2020/01/AIRBUS-MOBILE-FINAL-ASSEMBLY-LINE-STATION-40-JET-BLUE-A321-4-1024x768.jpg"),
      description: "An A320 aircraft under construction, it is green to protect the delicate carbon composite"
    },
    link: new URL("https://goo.gl/maps/N79Wf2rJAdQYSziH9"),
    description: "Went there for a university trip and it was breathtaking. Toulouse has a such lovely mix of french and spanish vibes",
  },
  {
    title: "Mount Snowdon",
    place: "Scottish Highlands",
    country: "Scotland",
    image: {
      source: new URL("https://i.dailymail.co.uk/i/pix/2012/07/02/article-2167811-0A5798D1000005DC-106_1024x615_large.jpg"),
      description: "Mount Snowdon with a frozen white peak, clouds roll over the peak as it shines"
    },
    link: new URL("https://goo.gl/maps/FXo2G9mfsQ2vpz8NA"),
    description: "Climbed Mount Snowdon in 2020, it is an achievement I am pround of",
  }
];

export default placesData;
