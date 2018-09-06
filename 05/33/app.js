var Emitter = require('./emitter');
var eventsConfig = require('./config');

var emtr = new Emitter();

emtr.on(eventsConfig.GREET, function() {
  console.log('Somewhere, someone said hello');
});

emtr.on(eventsConfig.GREET, function() {
  console.log('A greeting occured');
});