

export function App (user) {
  this._user = user;
  this._isOpen = false;
  this._devices = [];
}

App.prototype.getUserName = function(){
  return this._user;
}

App.prototype.renameUser = function(newUser){
  this._user = newUser;
}

App.prototype.getListOfDevices = function(){
  return this._devices.toString();
}

App.prototype.addDevice = function(device){
  this._devices.push(device)
}

App.prototype.isOpen = function(){
  return this._isOpen;
}

App.prototype.open = function(){
  this._isOpen = true;
}
App.prototype.close = function(){
  this._isOpen = false;
}