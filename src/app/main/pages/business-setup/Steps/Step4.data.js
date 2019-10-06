const rows = [
  createData('Roan Hennig', ['08:00 - 12:00', '13:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00']),
  createData('Madre Hennig', ['08:00 - 12:00', '13:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'], ['08:00 - 17:00'])
];

export default {
  createDataSet() {
    return rows;
  }
  };
  

  function createData(staffName, sunday, monday, tuesday, wednesday, thursday, friday, saturday) {
    return { staffName, sunday, monday, tuesday, wednesday, thursday, friday, saturday };
  }
  
