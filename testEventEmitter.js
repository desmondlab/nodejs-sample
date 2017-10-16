//load the built-in modules from node
var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

//use EventEmitter to create custom events and react the events when they are emitted
//Usage of util.inherits() is discouraged. Please use the ES6 class and extends keywords to get language level inheritance support. 
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    // emitter.on is a node method from EventEmitter class
    // addListener() is same as on()
    // event listening
    // https://nodejs.org/docs/latest/api/events.html#events_emitter_on_eventname_listener
    person.on('speak', function(msg){ 
        console.log(person.name + ' said ' + msg);
    });
});


// to trigger events
james.emit('speak', 'hey !!!!');
ryu.emit('speak', 'what\'s up');