import { App } from './js/App';
import { Iron } from './js/Devices/Iron';
import { Light } from './js/Devices/Light';
import { Kettle } from './js/Devices/Kettle';

// House part

var house = new App('smart-house');

console.log('App name: ' + house.getName());

console.error(house.getListOfDevices());

house.open();

house.renameApp('My house!');
console.log('App name: ' + house.getName());

//Iron part

var hotIron = new Iron('hot');

house.addDevice(hotIron);

console.log(house.getListOfDevices());

hotIron.setTemperature(90, 5000);

console.log('Is ready? -- ' + hotIron.getStatus());
console.log(hotIron.off());
console.log('Is ready? -- ' + hotIron.getStatus());

//Light part

var light = new Light('God light');

house.addDevice(light);
console.log(house.getListOfDevices());

console.log('Is turn on? -- ' + light.getStatus());
light.turnOn();
console.log('Is turn on? -- ' + light.getStatus());

//Kettle part

var kettle = new Kettle('boilboilboil');

house.addDevice(kettle);
console.log(house.getListOfDevices());

kettle.turnOn();
kettle.addVolume(2000);

kettle.turnOn();
