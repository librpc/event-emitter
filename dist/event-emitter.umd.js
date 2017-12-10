(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Emitter = factory());
}(this, (function () { 'use strict';

var Emitter = function Emitter () {
  this.events = Object.create(null);
};

Emitter.prototype.on = function on (event, listener) {
  var listeners = this.events[event];

  if (!listeners) {
    listeners = [];
    this.events[event] = listeners;
  }

  listeners.push(listener);
};

Emitter.prototype.off = function off (event, listener) {
  var listeners = this.events[event];

  if (listeners) {
    var idx = listeners.indexOf(listener);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  }
};

Emitter.prototype.emit = function emit (event, data) {
  var listeners = this.events[event];

  if (listeners) {
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](data);
    }
  }
};

return Emitter;

})));
