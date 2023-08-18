// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const arr = ["JS", "Type Script", "Java", "Spring Boot", true, 12, NaN, null, -22, 0];
arr.map(i => console.log(i))
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book1 = {
    title: "title-book-1",
    pageCount: 256,
    genre: "History"
}
const book2 = {
    title: "title-book-2",
    pageCount: 300,
    genre: "Memoir"
}
const book3 = {
    title: "title-book-3",
    pageCount: 200,
    genre: "Fiction"
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
//   масивом. Кожен автор має поля name та age.
const book4 = {
    title: "title-book-4",
    pageCount: 300,
    authors: [
        {
            author: "author1",
            age: 40,
        },
        {
            author: "author2",
            age: 60,
        }
    ]
};
const book5 = {
    title: "title-book-5",
    pageCount: 350,
    authors: [
        {
            author: "author2",
            age: 60,
        },
        {
            author: "author3",
            age: 44,
        }
    ]
};
const book6 = {
    title: "title-book-6",
    pageCount: 450,
    authors: [
        {
            author: "author4",
            age: 28,
        },
        {
            author: "author3",
            age: 44,
        }
    ]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
//   пароль кожного користувача
const users = [
    {
        name: "Zuckerberg",
        username: "zuck",
        password: "meta"
    },
    {
        name: "Gates",
        username: "trey",
        password: "windowsXP"
    },
    {
        name: "name3",
        username: "userName3",
        password: "pass3"
    },
    {
        name: "name4",
        username: "userName4",
        password: "pass4"
    },
    {
        name: "name5",
        username: "userName5",
        password: "pass5"
    },
    {
        name: "name6",
        username: "userName6",
        password: "pass6"
    },
    {
        name: "name7",
        username: "userName7",
        password: "pass7"
    },
    {
        name: "name8",
        username: "userName8",
        password: "pass8"
    },
    {
        name: "name9",
        username: "userName9",
        password: "pass9"
    },
    {
        name: "name10",
        username: "userName10",
        password: "pass10"
    },
]
users.map(i => console.log(i.password))

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x;
x = 1;
console.log(x, " =>>>>>", (x !== 0 ? "Вірно" : "Невірно"));
x = 0;
console.log(`x:${x} =>>>> ${x !== 0 ? "Вірно" : "Невірно"}`);
x = -3;
console.log(x !== 0 ? "Вірно" : "Невірно");

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let minutes = 14;

if (minutes >= 0 && minutes < 15) {
    console.log("Перша чверть")
} else if (minutes >= 15 && minutes < 30) {
    console.log("Друга чверть")
} else if (minutes >= 30 && minutes < 45) {
    console.log("Третя чверть")
} else if (minutes >= 45 && minutes < 60) {
    console.log("Четверта чверть")
} else console.log("?????????????")


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
let day = 31;
if (day >= 1 && day < 11) {
    console.log("Перша декада");
} else if (day >= 11 && day < 21) {
    console.log("Друга декада")
} else if (day >= 21 && day <= 31) {
    console.log("Третя декада")
} else console.log("???????????")
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayIndex = 7;
switch (dayIndex) {
    case 1 :
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("?????????????")

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let firstNum = +prompt("Enter the first number");
let secondNum = +prompt("Enter the second number");
if (firstNum === secondNum) {
    console.log("These numbers are same");
} else console.log(`${firstNum > secondNum ? firstNum : secondNum} is maximum number`);

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподібні, тобто приводиться до false)
{
    let x =NaN ;
    x = x || "default";
    console.log(x)
}

//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.map(i=>{if(i.monthDuration>5) return console.log("Супер")})

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
}
