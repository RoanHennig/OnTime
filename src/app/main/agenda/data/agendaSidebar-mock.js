const staff = [
    {
      businessId: 1,
      staffMembers: [{
          name:'Roan Hennig',
          businessRole:'owner',
          userId: 'auth0|5da6c12c379f840df8a55437'
      },
      {
        name:'Madre Swart',
        businessRole:'staff',
        userId: 'auth0|5da6c12c379f840df8a55500'
      }]
    }
  ]
    export default {
      getMockStaffMembers(businessId) {
        return staff[0].staffMembers;
      }
    };
    