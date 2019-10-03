const businessTypes = [{
    'ID': 1,
    'Name': 'Hair Salon'
  }, {
    'ID': 2,
    'Name': 'Beauty Salon'
  }, {
    'ID': 3,
    'Name': 'Health Spa'
  }];

  const businessSize = [{
    'ID': 1,
    'Name': 'I fly solo'
  }, {
    'ID': 2,
    'Name': 'Me and some staff members'
  }, {
    'ID': 3,
    'Name': 'Mutiple Business Locations'
  }];

  export default {
    getBusinessTypes() {
      return businessTypes;
    },

    getBusinessSize() {
        return businessSize;
      }
};
  