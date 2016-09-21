/**
 * Created by joshua on 2016/9/21.
 */
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection successful.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
};

// Bind the connection event with the handler
eventEmitter.on('connection',connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received',function () {
    console.log('data received successfully.')
});

// Fire the connection event 由这个调用开始执行对应操作，先触发该事件之后一次调用对应输出
eventEmitter.emit('connection');

console.log('Program Ended');