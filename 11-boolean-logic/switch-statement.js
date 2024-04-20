const day = 'monday'

switch (day) {
  case 'monday':
    console.log('Plan course structure');    
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare teory videos');
    break;
  case 'wednesday':
  case 'thursay':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a Valid day');
}