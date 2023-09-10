// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone = "невідомо") {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
const users = [];
users.push(new User(10, "Иван", "Мазепа", "1687-1709@ukr.net", "1639-1709"))
users.push(new User(6, "Богдан", "Хмельницкий", "1648-1657@ukr.net", "1595-1657"))
users.push(new User(1, "Павел", "Тетеря", "1550-1553@ukr.net"))
users.push(new User(2, "Павел", "Полуботок", "1576-1582@ukr.net"))
users.push(new User(3, "Данило", "Апостол", "1600-1606@ukr.net"))
users.push(new User(5, "Петр", "Конашевич-Сагайдачный", "1610-1622@ukr.net"))
users.push(new User(7, "Петро", "Дорошенко", "1665-1676@ukr.net", "1627-1698"))
users.push(new User(8, "Иван", "Самойлович", "1676-1687@ukr.net"))
users.push(new User(9, "Иван", "Брюховецкий", "1687-1688@ukr.net"))
users.push(new User(12, "Иван", "Скоропадский", "1918@ukr.net", "1873-1945"))
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
console.log(users.filter(item => item.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
const clients = [
    new Client(1, "Apple", "Купертино, Калифорния, США", "12345", ['macOS', 'iOS', 'iPadOS', 'watchOS', 'iCloud']),
    new Client(2, "Google", "Маунтин-Вью, Калифорния, США", "12345", ['Android', 'Google Search', 'Google Maps', 'Google Drive']),
    new Client(3, "Microsoft", "Редмонд, Вашингтон, США", "12345", ['Windows', 'Microsoft Office', 'Azure', 'Xbox']),
    new Client(4, "Amazon", "Сиэтл, Вашингтон, США", "12345", ['Amazon Web Services (AWS)', 'Amazon Echo', 'Kindle']),
    new Client(5, "IBM", "Армонк, Нью-Йорк, США", "12345", ['IBM Watson', 'IBM Cloud', 'IBM Power Systems']),
    new Client(6, "Samsung", "Сеул, Южная Корея", "12345", ['Samsung Smart TVs', 'Samsung SSD', 'Samsung Knox']),
    new Client(7, "Intel", "Санта-Клара, Калифорния, США", "12345", ['Intel Core Processors', 'Intel Optane Memory', 'Intel Xeon']),
    new Client(8, "Facebook", "Менло-Парк, Калифорния, США", "12345", ['Facebook', 'Instagram', 'WhatsApp', 'Oculus VR']),
    new Client(9, "Oracle", "Редвуд-Сити, Калифорния, США", "12345", ['Oracle Database', 'Oracle Cloud', 'Java']),
    new Client(10, "Cisco Systems", "Сан-Хосе, Калифорния, США", "12345", ['Cisco Networking Equipment', 'Cisco Webex', 'Cisco Meraki']),
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
console.log(clients.sort((a, b) => a.order.length - b.order.length));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
const Car = function (model, vendor, year, maxSpeed, volume) {
    this.model = model;
    this.vendor = vendor;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        Object.entries(this).forEach(([key, value]) => {
            if (typeof this[key] !== "function") {
                console.log(`${key} : ${value}`);
            }
        })
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = +this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        Object.entries(driver).forEach(([key, value]) => {
            this[key] = value;
        })
    }

}
const car_Audi = new Car("100", "Audi", "1998", "152", "2");
car_Audi.drive()
car_Audi.info();
console.log('===============Edit car Audi:=====>>>>>>>');
car_Audi.increaseMaxSpeed(10);
car_Audi.changeYear(2020);
car_Audi.addDriver({driverName: "Peter", driverDB: "1985", driverWife: "Masha", driverWifeDB: "1984"})
car_Audi.info();

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
class Car_1 {
    constructor(model, vendor, year, maxSpeed, volume) {
        this.model = model;
        this.vendor = vendor;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;

    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        Object.entries(this).forEach(([key, value]) => {
            if (typeof this[key] !== "function") {
                console.log(`${key} : ${value}`);
            }
        })
    };
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = +this.maxSpeed + newSpeed;
    };
    changeYear (newValue){
        this.year=newValue;
    };
    addDriver(driver){
        Object.entries(driver).forEach(([key,value])=>( this[key]=value)
        )
    }
}

console.log('=======Class Car=================');
const car_BMW = new Car_1("X7", "BMW", "2020", "192", "2.8");
car_BMW.drive()
car_BMW.info();
console.log('===============Edit car BMW:=====>>>>>>>');
car_BMW.increaseMaxSpeed(30);
car_BMW.changeYear(2023);
car_BMW.addDriver({driverName: "Alex", driverDB: "2000", driverWife: "Masha", driverWifeDB: "2001"})
car_BMW.info();

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella{
    constructor(name,age,size) {
        this.name=name;
        this.age=age;
        this.size=size;
    }
}
const cinderellas =[
    new Cinderella("Dasha",20,42),
    new Cinderella("Sasha",18,38),
    new Cinderella("Masha",19,39),
    new Cinderella("Nadia",22,34),
    new Cinderella("Ira",21,32),
    new Cinderella("Lera",21,32),
    new Cinderella("Sveta",21,32),
    new Cinderella("Kate",16,31),
    new Cinderella("Elez",18,32),
    new Cinderella("Elza",21,32),
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name,age,size){
        this.name=name;
        this.age=age;
        this.size=size;
    }
}
const prince1 =new Prince("George","28",32)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for(let cinderella of cinderellas){
    if(cinderella.size===prince1.size){
        console.log(cinderella);
        break;
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(cinderellas.find(cinderella => cinderella.size === prince1.size));