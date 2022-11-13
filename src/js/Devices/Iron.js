import { Device } from '../Device';

function Iron(name) {
  Device.call(this, name);
  this._temperature = 0;
  this._isReady = false;
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
  this._temperature = 0;
  this._isReady = false;
};

Iron.prototype.setTemperature = function (temperature, delay) {
  this._temperature = temperature;

  setTimeout(function () {
    this._isReady = true;
  }, delay);
};
