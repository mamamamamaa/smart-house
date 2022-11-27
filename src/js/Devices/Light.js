import { Device } from '../Device';

export function Light(name) {
  Device.call(this, name);
  this._isTurnOn = false;
}

Light.prototype = Object.create(Device.prototype);

Light.prototype.constructor = Device;

Light.prototype.turnOn = function () {
  this._isTurnOn = true;
};

Light.prototype.turnOff = function () {
  this._isTurnOn = false;
};

Light.prototype.getStatus = function () {
  return this._isTurnOn;
};
