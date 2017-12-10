(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Emitter = factory());
}(this, (function () { 'use strict';

var Events = function Events () {
  this.map = Object.create(null);
};

Events.prototype.get = function get (event) {
  return this.map[event]
};

Events.prototype.set = function set (event, listeners) {
  this.map[event] = listeners;
};

Events.prototype.has = function has (event) {
  return this.map[event]
};

var Listeners = function Listeners () {
  this.list = [];
  this.map = new Map();
  this.idx = 0;
};

Listeners.prototype.add = function add (listener) {
  var idx = this.map.get(listener) || this.idx++;
  this.list[idx] = listener;
  this.map.set(listener, idx);
};

Listeners.prototype.remove = function remove (listener) {
  var idx = this.map.get(listener);
  if (idx) {
    this.list.splice(idx, 1);
    this.map.delete(listener);
    this.idx--;
  }
};

Listeners.prototype.toArray = function toArray () {
  return this.list.concat()
};

var Emitter = function Emitter () {
  this.events = new Events();
};

Emitter.prototype.on = function on (event, listener) {
  var listeners = this.events.get(event);

  if (!listeners) {
    listeners = new Listeners();
    this.events.set(event, listeners);
  }

  listeners.add(listener);
};

Emitter.prototype.off = function off (event, listener) {
  var listeners = this.events.get(event);

  if (listeners) {
    listeners.remove(listener);
  }
};

Emitter.prototype.emit = function emit (event, data) {
  var listeners = this.events.get(event);

  if (listeners) {
    var list = listeners.toArray();
    for (var i = 0; i < list.length; i++) {
      list[i](data);
    }
  }
};

return Emitter;

})));
