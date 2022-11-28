import { Device } from '../Device';

var MAX_VOLUME = 3000;

export function Kettle(name, volume = 0) {
  Device.call(this, name);
  this._volume = volume;
  this._isTurnOn = false;
  this._isBoiled = false;
  this._boiling = null;
}

Kettle.prototype = Object.create(Device.prototype);

Kettle.prototype.constructor = Device;

Kettle.prototype.turnOn = function () {
  this._isTurnOn = true;

  if (this._volume > 200) {
    this._boiling = setTimeout(function () {
      console.log("Yep-yep, i'm boiled :C");
      this._isBoiled = true;
      this._volume -= this._volume / 10;
      this._isTurnOn = false;

      setTimeout(function () {
        console.log("hey, sorry, i'm cold down :(");
        this._isBoiled = false;
      }, 10000);
    }, 10000);
  } else {
      this._isTurnOn = false;
    console.log('hey buddy, i need more water xd');
  }
};

Kettle.prototype.getVolume = function () {
  return this._volume;
};

Kettle.prototype.isBoiled = function() {
  return this._isBoiled;
}

Kettle.prototype.addVolume = function (volume) {
  this._volume =
    volume + this._volume > MAX_VOLUME ? MAX_VOLUME : volume + this._volume;
};

Kettle.prototype.getStatus = function () {
  return this._isTurnOn;
};

Kettle.prototype._coledDown = function () {
  this._isBoiled = false;
};

Kettle.prototype.turnOff = function () {
  this._isTurnOn = false;
  clearTimeout(this._boiling);
};
