// const PubSub = require('../helpers/pub_sub.js');
// const SearchBarView = require('../views/search_bar_view.js');
// const Request = require('../helpers/request.js');
// const Weather = function (){
//   this.weatherData = null;
// };
//
// Weather.prototype.getAllData = function (preparedInput) {
//   const request = new Request (`api.openweathermap.org/data/2.5/forecast?q=${preparedInput}`);
// console.log(`api.openweathermap.org/data/2.5/forecast?q=${preparedInput}`);
// 
//   request.get((data) => {
//     this.weatherData = data;
//     PubSub.publish('Weather:', this.weatherData);
//   });
//
//   Weather.prototype.bindEvents = function() {
//     console.log("????");
//     PubSub.subscribe('SearchBarView:request-submitted', (event) => {
//       const citySelected = event.detail;
//       const preparedInput = this.prepareInput(citySelected);
//       this.getAllData(preparedInput);
//     });
//   }
//
//   Weather.prototype.prepareInput = (input) => {
//     const preparedInput = input.replace(' ', '');
//     console.log(preparedInput);
//   };
// }
//
// module.exports = Weather;
