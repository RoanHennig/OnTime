const rows = [
  createData(1,'Roan Hennig', [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }, {
    shiftStart:'13:00',
    shiftEnd:'17:00'
  }], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00']),
  createData(2,'Madre Hennig', ['08:00 - 12:00', '13:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'])
];

export default {
  createDataSet() {
    return rows;
  }
  };
  

  function createData(staffID,staffName, sunday, monday, tuesday, wednesday, thursday, friday, saturday) {
    return {staffID, staffName, sunday, monday, tuesday, wednesday, thursday, friday, saturday };
  }
  
