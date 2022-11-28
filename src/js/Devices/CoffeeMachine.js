import { Device } from '../Device';

var COFFEE = { am: 'americano', cap: 'cappuccino', lat: 'latte' };
var MAX_MILK = 2000;
var MAX_WATER = 5000;
var MAX_GRAINS = 1000;

export function CoffeeMachine(name, color) {
  Device.call(this, name);
  this._color = color;
  this._typesOfCoffee = COFFEE;
  this._isStarted = false;
  this._isReady = false;
  this._milk = 0;
  this._water = 0;
  this._grains = 0;
}

CoffeeMachine.prototype = Object.create(Device.prototype);
CoffeeMachine.prototype.constructor = Device;

CoffeeMachine.prototype.getColor = function () {
  return this._color;
};

CoffeeMachine.prototype.setColor = function (newColor) {
  this._color = newColor;
};

CoffeeMachine.prototype.isStarted = function () {
  return this._isStarted;
};

CoffeeMachine.prototype.isReady = function () {
  return this._isReady;
};

CoffeeMachine.prototype.getTypesOfCoffee = function () {
  return this._typesOfCoffee;
};

//////////////////////////
CoffeeMachine.prototype.getMilk = function () {
  return this._milk;
};
CoffeeMachine.prototype.setMilk = function (volume) {
  if (this.getMilk() + volume > MAX_MILK) {
    this._milk = MAX_MILK;
  } else {
    this._milk += volume;
  }
};
//////////////////////////
CoffeeMachine.prototype.getWater = function () {
  return this._water;
};
CoffeeMachine.prototype.setWater = function (volume) {
  if (this.getWater() + volume > MAX_WATER) {
    this._water = MAX_WATER;
  } else {
    this._water += volume;
  }
};
/////////////////////////
CoffeeMachine.prototype.getGrains = function () {
  return this._grains;
};
CoffeeMachine.prototype.setGrains = function (volume) {
  if (this.getGrains() + volume > MAX_GRAINS) {
    this._grains = MAX_GRAINS;
  } else {
    this._grains += volume;
  }
};
/////////////////

CoffeeMachine.prototype.start = function (type) {
  switch (type) {
    case COFFEE.am: {
      if (this.getGrains() >= 100 && this.getWater() >= 500) {
        this._grains -= 100;
        this._water -= 500;
        this._isStarted = true;
        console.log("Start making " + COFFEE.am);
        setTimeout(function () {
          this._isReady = true;
          this._isStarted = false;

          console.log("Dude, take your "+COFFEE.am+"!");
        }, 10000);
      } else {
        console.log('I need more ingredients!\n\t> grains - 100g\n\t> water - 500g\n');
        return false;
      }
      break;
    }
    case COFFEE.cap: {
      if (
        this.getGrains() >= 100 &&
        this.getWater() >= 300 &&
        this.getMilk() >= 200
      ) {
        this._grains -= 100;
        this._water -= 300;
        this._milk -= 200;
        this._isStarted = true;
        console.log("Start making " + COFFEE.cap);
        setTimeout(function () {
          this._isReady = true;
          this._isStarted = false;
          console.log("Dude, take your "+COFFEE.cap+"!");
        }, 10000);
      } else {
        console.log('I need more ingredients!\n\t> grains - 100g\n\t> water - 300g\n\t> milk - 200g\n');
        return false;
      }
      break;
    }
    case COFFEE.lat: {
      if (
        this.getGrains() >= 100 &&
        this.getWater() >= 100 &&
        this.getMilk() >= 400
      ) {
        this._grains -= 100;
        this._water -= 100;
        this._milk -= 400;
        this._isStarted = true;
        console.log("Start making " + COFFEE.lat);
        setTimeout(function () {
          this._isReady = true;
          this._isStarted = false;
          console.log("Dude, take your " + COFFEE.lat+"!");
        }, 10000);
      } else {
        console.log('I need more ingredients!\n\t> grains - 100g\n\t> water - 100g\n\t> milk - 400g\n');
        return false;
      }
      break;
    }
    default: {
      console.log('I don`t know this recipe :(')
      return false;
    }
  }
};
