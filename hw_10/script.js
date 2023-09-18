// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок
// з вашим об'єктом

document.form1.onsubmit = function (e) {
    e.preventDefault();
    let user = {
        firstName: this.firstname.value,
        surName: this.surname.value,
        age: this.age.value
    }
    let divUser = document.getElementById("user") || document.createElement("div")
    divUser.innerText = JSON.stringify(user);
    divUser.style.background = "silver";
    divUser.style.color = "red";
    divUser.id = "user";
    divUser.classList = "container border-red";
    divUser.style.margin = "10px auto 5px ";
    document.body.insertBefore(divUser, this.nextSibling)
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1
let counter = document.getElementById("counter");
let divLabel = document.createElement("div");
divLabel.className = "label";
divLabel.innerText = "2";
let num = JSON.parse(localStorage.getItem("adder")) || 0;
let result = 1 + num;
counter.innerText = result;
counter.appendChild(divLabel)
localStorage.setItem("adder", JSON.stringify(result))
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається  інформація про дату та час відвідування сторінки.
// "DOMContentLoaded", "loaded","onunload"
window.addEventListener("DOMContentLoaded", function () {
    let date = new Date(Date.now());
    let sessions = JSON.parse(localStorage.getItem("session")) || [];
    sessions.push(date)
    localStorage.setItem("session", JSON.stringify(sessions))
})


// Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
//
//
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let arrMock = Array.from({length: 100}, (_, index) => `number ${index + 1}`)
let divContainer = document.getElementById("arrMock");
let current = 0;
view10items(current);

function view10items() {
    let divItems = document.getElementById("items");
    divItems.innerHTML = "";
    for (let i = current; i < current + 10; i++) {
        let div = document.createElement("div");
        div.classList = "px-1 w-50 border-blue  f-a-center f-j-center";
        div.innerText = arrMock[i];
        divItems.appendChild(div)
    }
}

function next10items() {
    if (current < arrMock.length - 11) {
        current += 10;
        view10items();
    }
}

function prev10items() {
    if (current > 0) {
        current -= 10;
        view10items()
    }
}

//
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".
//
function hideText() {
    let text = document.getElementById("text");
    text.classList.toggle("hidden")
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати  інформацію з інпуту та перевірити
//     вік чи меньше він ніж 18, та повідомити про це користувача
//
let age18=document.getElementById("age18");
age18.addEventListener("focus", function () {
    this.select()
})

function checkOutAge() {
    mes = document.getElementById("message")
    let age = document.getElementById("age18");
    if (+age.value >= 18) {
        mes.innerText = "Ваш вік дозволяє займатись цим"
    } else mes.innerText = "Вибачте, але Ваш вік не дозволяє займатись цим";
    age.select();
}

//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
function createTable() {
    let rows = +document.getElementById("rowCount").value
    let colums = +document.getElementById("colCount").value
    let content = document.getElementById("context").value
    let table = document.getElementById("table");
    table.innerHTML = "";
    console.log(colums, rows, content);
    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < colums; j++) {
            let cell = row.insertCell();
            cell.innerText = content;
            cell.classList = "cell"
        }
    }
}

// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого
// є значення "100грн"  при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let oneHundred = document.getElementById("onehundred");
let wallet = +JSON.parse(sessionStorage.getItem("wallet")) ||100;
let currentTime = +new Date().getTime();
let lastReboot = +JSON.parse(sessionStorage.getItem("lastReboot")) || 0;
sessionStorage.setItem("lastReboot", JSON.stringify(currentTime));
if ((currentTime - lastReboot) > 10000 && lastReboot !==0) {
    sessionStorage.setItem("wallet", JSON.stringify(wallet + 10))
    oneHundred.innerText = `${wallet + 10} грн`
} else oneHundred.innerText = `${wallet} грн`

