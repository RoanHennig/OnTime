const staffData = 
    {
        businessId: 1,
        staffMembers: [{
            text: 'Roan Hennig',
            businessRole: 'owner',
            id: 'auth0|5da6c12c379f840df8a55437',
            active: true
        },
        {
            text: 'Madre Swart',
            businessRole: 'staff',
            id: 'auth0|5da6c12c379f840df8a55500',
            active: true
        }]
    };

    const eventTypes = [
        {
          id: 1
        }, {
          id: 2,
          color: '#78909c'
        }
      ];

const data = [
    {
        staffMember: 'auth0|5da6c12c379f840df8a55437',
        text: 'Cut & Blow dry',
        startDate: new Date(2017, 5, 25, 9, 30),
        endDate: new Date(2017, 5, 25, 11, 30),
        type: 1
    },
    {
        staffMember: 'auth0|5da6c12c379f840df8a55437',
        text: 'Hair Cut',
        startDate: new Date(2017, 5, 25, 12, 0),
        endDate: new Date(2017, 5, 25, 13, 0),
        type: 1,
        allDay: true
    },
    {
        staffMember: 'auth0|5da6c12c379f840df8a55500',
        text: 'Hair Coloring',
        startDate: new Date(2017, 5, 25, 13, 0),
        endDate: new Date(2017, 5, 25, 14, 0),
        type: 2,
    },
];

export default {
    getMockCalendarEvents() {
        return data;
    },

    getMockStaffData() {
        return staffData;
    },

    getMockEventTypes() {
        return eventTypes;
    }
};
