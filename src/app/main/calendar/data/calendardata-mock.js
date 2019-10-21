export const eventData = [{
  id: 1,
  text: 'His Girl Friday',
  director: 'Howard Hawks',
  year: 1940,
  image: 'images/movies/HisGirlFriday.jpg',
  duration: 92,
  color: '#cb6bb2'
}, {
  id: 2,
  text: 'Royal Wedding',
  director: 'Stanley Donen',
  year: 1951,
  image: 'images/movies/RoyalWedding.jpg',
  duration: 93,
  color: '#56ca85'
}, {
  id: 3,
  text: 'A Star Is Born',
  director: 'William A. Wellman',
  year: 1937,
  image: 'images/movies/AStartIsBorn.jpg',
  duration: 111,
  color: '#1e90ff'
}, {
  id: 4,
  text: 'The Screaming Skull',
  director: 'Alex Nicol',
  year: 1958,
  image: 'images/movies/ScreamingSkull.jpg',
  duration: 68,
  color: '#ff9747'
}, {
  id: 5,
  text: 'It\'s a Wonderful Life',
  director: 'Frank Capra',
  year: 1946,
  image: 'images/movies/ItsAWonderfulLife.jpg',
  duration: 130,
  color: '#f05797'
}, {
  id: 6,
  text: 'City Lights',
  director: 'Charlie Chaplin',
  year: 1931,
  image: 'images/movies/CityLights.jpg',
  duration: 87,
  color: '#2a9010'
}];

export const staffData = [{
  text: 'Roan Hennig',
  id: 0
}, {
  text: 'Madre Swart',
  id: 1
}
];


const data = [
    {
      staffMemberId:0,
      text: 'Website Re-Design Plan',
      startDate: new Date(2017, 5, 25, 9, 30),
      endDate: new Date(2017, 5, 25, 11, 30)
    }, 
    {
      staffMemberId:0,
      text: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date(2017, 5, 25, 12, 0),
      endDate: new Date(2017, 5, 25, 13, 0),
      allDay: true
    },
    {
      staffMemberId:1,
      text: 'Hair Coloring',
      startDate: new Date(2017, 5, 25, 13, 0),
      endDate: new Date(2017, 5, 25, 14, 0)
    },
  ];
  
  export default {
    getMockCalendarEvents() {
      return data;
    },

    getMockStaffData() {
      return staffData;
    }
  };
  