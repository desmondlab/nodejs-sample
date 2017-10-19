var emitter = require('events').EventEmitter;
var util = require('util');
 
function LoopProcessor(num) {
    // this = LoopProcessor inherits emitter
    var me = this;
 
    setTimeout(function () {
 
        for (var i = 1; i <= num; i++) {
            me.emit('BeforeProcess', i);
 
            console.log('Processing number:' + i);
 
            me.emit('AfterProcess', i);
        }
    }
    , 2000)
 
    return this;
}

// LoopProcessor inherits emitter
util.inherits(LoopProcessor, emitter);
 
var lp = new LoopProcessor(3);
 
lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});
 
lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});