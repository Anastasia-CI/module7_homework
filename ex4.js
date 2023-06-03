function Device (name, status = "off", power) {
    this.name = name;
    this.status = status;
    this.power = power;
    this.getStatus = function() {
    if (status == "on") {
        console.log(`Прибор ${name} включен, потребляемая энергия ${power} Вт.`);
    }
    else {
        console.log(`Прибор ${name} отключен.`);
    }
    };
};    
function ChargingMode(name, status) {
    this.name = name;
    this.status = status;
    this.getChargingMode = function() {
        if (status =="on") {
        console.log(`Для ${name} включен режим защиты аккумулятора.`)
        };
    }
}
function СonnectСharger(name, level) {
    this.name = name;
    this.level = level;
    this.getLevel = function() {  
        if (level <=15) {
            console.log(`Заряд аккумулятора ${name} ${level} %, подключите зарядное устройство.`)
        }
        else {
            console.log(`Заряд аккумулятора ${name} ${level} %`)
        }
    }
}
ChargingMode.prototype = new Device;
СonnectСharger.prototype = new Device;
const computer = new ChargingMode("компьютер", "on");
computer.brand = "MSI";
const lamp = new Device("лампа", "on", 60);
lamp.type = "energy-saving";
const phone = new  СonnectСharger("телефон", 8);
phone.brand = "samsung";
computer.getChargingMode();
lamp.getStatus();
phone.getLevel();
