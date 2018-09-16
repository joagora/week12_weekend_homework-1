// const PubSub = require('../helpers/pub_sub.js');
//
// const SearchBarView = function(searchContainer) {
//   this.searchContainer = searchContainer;
// }
//
// SearchBarView.prototype.bindEvents = function() {
//   console.log('anyone here???');
//   this.searchContainer.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const citySelected = event.target['#city-search'].value;
//     PubSub.publish('SearchBarView:request-submitted', citySelected);
//     this.searchContainer.reset();
//   });
// }
//
// module.exports = SearchBarView;
