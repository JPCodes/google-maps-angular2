export class Init{
  load(){
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
      console.log("No Markers found .... creating");

      var markers = [
        {
          name: 'Company 1',
          lat: 42.825588,
          lng: -71.018029,
          draggable: true
        },
        {
          name: 'Company 2',
          lat: 42.868164,
          lng: -70.889071,
          draggable: true
        },
        {
          name: 'Company 3',
          lat: 42.858279,
          lng: -70.930498,
          draggable: false
        }
      ];
      localStorage.setItem('markers', JSON.stringify(markers));
    } else {
      console.log('loading markers...');
    }
  }
}
