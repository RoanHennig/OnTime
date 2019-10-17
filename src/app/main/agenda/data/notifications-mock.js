const entities = [
    {
      userId: 'auth0|5da6c12c379f840df8a55437',
      notifications: [
        {
          id: 10,
          title: 'Appointment Cancelled',
          summary: 'Madre Cancelled her appointment for Tomorrow 09:00 - 10:00',
          labels: []
        },
        {
          id: 20,
          title: 'First 100 clients!',
          summary: 'Congratulations on booking your first 100 clients!',
          labels: []
        }
      ]
    },
  
    {
      userId: 'auth0|5da6c12c379f840df8a55500',
      notifications: [
        {
          id: 50,
          title: 'You have a new review!',
          summary: 'Roan has left you a review',
          labels: [{
            id: 1,
            title: 'Mens Cut'
          }]
        }
      ]
    }];
  
  export default {
    getMockNotifications(user) {
      return entities.find(x => x.userId == user).notifications;
    }
  };
  