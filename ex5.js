class Device1 {
    constructor (name, status="off", power) {
    this.name = name;
    this.status = status;
    this.power=power;
    };
    getStatus() {
    if (this.status == "on") {
        console.log(`Прибор ${this.name} включен, потребляемая энергия ${this.power} Вт.`);
    }
    else {
        console.log(`Прибор ${this.name} отключен.`);
    }
    }
};    
class ChargingMode1 extends Device1 {
    constructor (name, status){
    super(name);
    this.status = status;
    }
    getChargingMode() {
        if (this.status="on") {
        console.log(`Для ${this.name} включен режим защиты аккумулятора.`)
        };
    }
};
class ConnectСharger1 extends Device1{
    constructor (name, level) {
    super(name);
    this.level = level;
    }
    getLevel() {  
        if (this.level <=15) {
            console.log(`Заряд аккумулятора ${this.name} ${this.level} %, подключите зарядное устройство.`)
        }
        else {
            console.log(`Заряд аккумулятора ${this.name} ${this.level} %`)
        }
    }
    
};
const computer1 = new ChargingMode1("компьютер", "on");
computer1.brand = "MSI";
const lamp1 = new Device1("лампа", "on", 60);
lamp1.type = "energy-saving";
const phone1 = new  ConnectСharger1("телефон", 18);
phone.brand = "samsung";
computer1.getChargingMode();
lamp1.getStatus();
phone1.getLevel();