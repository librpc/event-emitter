'use strict';

/**
 * @callback listener
 * @param {*} data Any data could be passed to event listener
 */

var Emitter = function Emitter () {
  this.events = Object.create(null);
};

/**
 * Add listener to event. No context provided, use Function.prototype.bind(), arrow function or closure instead.
 * @param{string} event  Event name
 * @param{listener} listener Event listener
 * @return {Emitter}         Return self
 * @example
 *
 * function listener (data) {
 *console.log(data)
 * }
 *
 * emitter.on('event', listener)
 */
Emitter.prototype.on = function on (event, listener) {
  var listeners = this.events[event];

  if (!listeners) {
    listeners = [];
    this.events[event] = listeners;
  }

  listeners.push(listener);

  return this
};

/**
 * Remove listener from event.
 * @param{string} event  Event name
 * @param{listener} listener Event listener
 * @return {Emitter}         Return self
 * @example
 *
 * emitter.off('event', listener)
 */
Emitter.prototype.off = function off (event, listener) {
  var listeners = this.events[event];

  if (listeners) {
    var idx = listeners.indexOf(listener);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  }

  return this
};

/**
 * Trigger an event. Multiple arguments not supported, use destructuring instead.
 * @param{string}event Event name
 * @param{*}     dataEvent data
 * @return {Emitter}     Return self
 * @example
 *
 * emitter.emit('event', { foo: 'bar' })
 */
Emitter.prototype.emit = function emit (event, data) {
  var listeners = this.events[event];

  if (listeners) {
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](data);
    }
  }

  return this
};

module.exports = Emitter;
