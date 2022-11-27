import { Device } from '../Device';

export function Iron(name) {
  Device.call(this, name);
  this._temperature = 0;
  this._isReady = false;
  this._temperatureId = null;
}

Iron.prototype = Object.create(Device.prototype);

Iron.prototype.constructor = Device;

Iron.prototype.getTemperature = function () {
  return this._temperature;
};

Iron.prototype.getStatus = function () {
  return this._isReady;
};

Iron.prototype.off = function () {
  clearTimeout(this._temperatureId);
  this._temperature = 0;
  this._isReady = false;
  return "Hmm... I'm have stopped";
};

Iron.prototype.setTemperature = function (temperature, delay) {
  this._temperature = temperature;

  this._temperatureId = setTimeout(function () {
    this._isReady = true;
    console.log("Yep-yep? i'm ready");
  }, delay);
};
