const rows = [
  createData(1,'Roan Hennig', [{
    shiftStart:'08:00',
    shiftEnd:'13:00'
  }, {
    shiftStart:'13:00',
    shiftEnd:'17:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }]),
  createData(2,'Madre Hennig', [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }, {
    shiftStart:'13:00',
    shiftEnd:'17:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'12:00'
  }])
];

export default {
  createDataSet() {
    return rows;
  }
  };
  

  function createData(staffID,staffName, sunday, monday, tuesday, wednesday, thursday, friday, saturday) {
    return {staffID, staffName, sunday, monday, tuesday, wednesday, thursday, friday, saturday };
  }
  
