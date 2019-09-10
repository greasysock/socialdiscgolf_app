
const TEST_COURSES = [
    {
      name: "Centennial Campus Disc Golf Course",
      address: "185 Sutter St, San Francisco, CA 94109",
      image: { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
      baskets: 9,
      par: 18,
      rating: 4.5
    },
    {
      name: "Kentwood Park Disc Golf Course",
      address: "527 Broome St, New York, NY 10013",
      image: { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      baskets: 12,
      par: 24,
      rating: 3
    },
    {
      name: "Buckhorn Disc Golf Course",
      address: "225 Mulberry St, New York, NY 10012",
      image: { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
      baskets: 3,
      par: 6,
      rating: 5
    },
    {
      name: "UNC Disc Golf Course",
      address: "1900 Warner Ave. Unit A Santa Ana, CA",
      image: { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
      baskets: 21,
      par: 42,
      rating: 2.2
    }
  ]

export default (courses = TEST_COURSES, action ) => {
    return courses
}