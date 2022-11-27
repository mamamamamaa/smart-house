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
      this._isBoiled = true;
      console.log("Yep-yep, i'm boiled :C");
      this._volume -= this._volume / 10;
      this._isTurnOn = false;
    }, 10000);
  } else {
    console.log('hey buddy, i need more water xd');
  }

  if (this._isBoiled) {
    setTimeout(function () {
      console.log("hey, sorry, i'm coled down :(");
      this._coledDown();
    }, 10000);
  }
};

Kettle.prototype.getVolume = function () {
  return this._volume;
};

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
