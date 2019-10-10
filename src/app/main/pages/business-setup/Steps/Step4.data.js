const rows = [
  createData(1,'Staff Member', [[
  ],
  [{
    shiftStart:'08:00',
    shiftEnd:'17:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'17:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'17:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'17:00'
  }],
  [{
    shiftStart:'08:00',
    shiftEnd:'17:00'
  }],
  []])
];

export default {
  createDefaultDataSet() {
    return rows;
  }
  };
  

  function createData(staffID,staffName, week) {
    return {staffID, staffName, week };
  }
  
