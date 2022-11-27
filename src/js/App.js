export function App(name) {
  this._name = name;
  this._isOpen = false;
  this._devices = [];
}

App.prototype.getName = function () {
  return this._name;
};

App.prototype.renameApp = function (newUser) {
  if (!this.isOpen()) {
    return "You have to open application '" + this.getName() + "'";
  }
  this._name = newUser;
};

App.prototype.getListOfDevices = function () {
  if (!this.isOpen()) {
    return "You have to open application '" + this.getName() + "'";
  }
  return this._devices;
};

App.prototype.addDevice = function (device) {
  if (!this.isOpen()) {
    return "You have to open application '" + this.getName() + "'";
  }
  this._devices.push(device);
};

App.prototype.isOpen = function () {
  return this._isOpen;
};

App.prototype.open = function () {
  this._isOpen = true;
};
App.prototype.close = function () {
  this._isOpen = false;
};
