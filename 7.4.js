function ElectricalAppliances (name, power) { // Ф-ия конструктор.
    this.name = name;// this - это контекст, св-во которого можно будет передать новому созданному экземпляру.
    this.power = power; // name, on, power - общее для всех функции.
    this.on = false;
   }
  
   ElectricalAppliances.prototype.connected = function (power) { // Метод созданный через свойство .prototype
     console.log(this.name + " is on!"); // Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.
     this.on = true;
   };

   ElectricalAppliances.prototype.unconnected = function (power) { 
    console.log(this.name + " is off!");
    this.on = false;
  };


  
function Notebook (name, brand, processor, videoCard, power) {
    this.name = name; 
    this.brand = brand; // Пустой объект
    this.processor = processor; // Пустой объект
    this.videoCard = videoCard; // Пустой объект
    this.power = power;
    this.on = true;
}

Notebook.prototype = new ElectricalAppliances(); // Делегирующая связь

function Tv (name, type, processor, speakerType, power) {
    this.name = name;
    this.type = type; // Пустой объект
    this.processor = processor; // Пустой объект
    this.speakerType = speakerType; // Пустой объект
    this.power = power;
    this.on = false;
}

Tv.prototype = new ElectricalAppliances(); // Делегирующая связь


function HyperPc (name, brand, processor, videoCard, power) {
    this.name = name;
    this.brand = brand; // Пустой объект
    this.processor = processor; // Пустой объект
    this.videoCard = videoCard; // Пустой объект
    this.power = power;
    this.on = true;
}

HyperPc.prototype = new ElectricalAppliances(); // Делегирующая связь

const myNotebook = new Notebook("Notebook", "Asus ROG Flow X13", " AMD Ryzen 9 5900HS", "Nvidia GeForce GTX 1650 Max-Q", 54); // Новый экземпляр

const myTv = new Tv("Tv", "Samsung Smart QLED", "quantum processor 4K", "2 channels", 180); // Новый экземпляр

const myHyperPc = new HyperPc("HyperPc", "HyperPc Lumen Pro", "Intel Core i5-12400(F)", "NVIDIA GeForce RTX 3060 Ti", 750); // Новый экземпляр

myNotebook.unconnected(); // Экземпляр + метод
myTv.connected();
myHyperPc.connected();

console.log(myNotebook)
console.log(myTv)
console.log(myHyperPc)

