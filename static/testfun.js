function testfun(){
const date = new Date(Date.now());
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let x = axios.post('https://prod-74.eastus.logic.azure.com:443/workflows/c10c14e05ec44366a5ae4e9d89270845/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=T14cQAso1_Od0w7xWSQXF69NK5mNCC1UFjNGP6-Xtb0', {
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
