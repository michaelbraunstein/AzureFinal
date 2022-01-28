function testfun(){
const date = new Date(Date.now());
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let x = axios.post(' https://prod-06.eastus.logic.azure.com:443/workflows/1adeb58c93574ff0ac7b674aec85010d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1vYKW12IORdiJlExQMZ5pQ3IfP6oqbYAwfoSwG5tzm8', {
    id: self.crypto.randomUUID(),
    month: months[date.getMonth()],
    day: date.getDate(),
    year: date.getFullYear(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  })
  .then(function (response) {
    console.log(response);
    return response.data
  });}

console.log(x);
