import { Device } from '../Device';

function Kettle(name, volume = 0) {
  Device.call(this, name);
  this._volume = volume;
  this._isTurnOn = false;
  this._isBoiled = false;
}

Kettle.prototype = Object.create(Device.prototype);

Kettle.prototype.constructor = Device;

Kettle.prototype.getVolume = function () {
  return this._volume;
};

Kettle.prototype.setVolume = function (volume) {
  this._volume = volume;
};

Kettle.prototype.getStatus = function () {
  return this._isTurnOn;
};

Kettle.prototype._boiled = function () {
  this._isBoiled = true;
};

Kettle.prototype._coledDown = function () {
  this._isBoiled = false;
};

Kettle.prototype.turnOn = function () {
  this._isTurnOn = true;

  setTimeout(function () {
    this._boiled();
    this._volume -= this._volume / 10;
    this.turnOff();
  }, 10000);

  if (this._isBoiled) {
    setTimeout(function () {
      this._coledDown();
    }, 10000);
  }
};

Kettle.prototype.turnOff = function () {
  this._isTurnOn = false;
};
