const entities = [
  {
    time: '08:00 - 09:00',
    summary: 'Madre has an appointment for a Mens Hair Cut',
    labels: [{
      title:'Mens Cut',
      color:'blue'
    }]
  },
  {
    time: '11:00 - 11:30',
    summary: 'Jacob Peterson has an appointment for a Hair Coloring - Full - Yellow',
    labels: [{
      title:'Coloring',
      color:'blue'
    },
    {
      title:'Yellow',
      color:'blue'
    },
    {
      title:'Full',
      color:'blue'
    }]
  },
  
  {
    time: '12:00 - 13:30',
    summary: 'Sally Robertson has an appointment for a Consultation regarding a Hair Coloring',
    labels: [{
      title:'Consulatation',
      color:'blue'
    },
    {
      title:'Coloring',
      color:'blue'
    }]
  },
  {
    time: '14:00 - 15:00',
    summary: 'Francois has an appointment for a Mens Hair Cut',
    labels: [{
      title:'Mens Cut',
      color:'blue'
    },
    {
      title:'New Customer',
      color:'blue'
    }]
  },
]
  export default {
    getmockappointments() {
      return entities;
    }
  };
  