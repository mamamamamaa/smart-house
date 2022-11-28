export function Device(name){
  this._name = name;
  this._isAdded = false;
}

Device.prototype.getName = function(){
  return this._name;
}

Device.prototype.setName = function(name){
 this._name = name;
}

Device.prototype.isAdded = function(){
  return this._isAdded;
}

Device.prototype.add = function() {
  this._isAdded = true;
}

Device.prototype.remove = function() {
  this._isAdded = false;
}