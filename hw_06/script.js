// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = "hello world";
let str2 = "lorem ipsum";
let str3 = "javascript is cool";
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(str2.toUpperCase().toLowerCase());
console.log(str1.toUpperCase().toLowerCase());
console.log(str3.toUpperCase().toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
str = 'Ревуть воли як ясла повні';
const stringToarray = (str) => (str.split(" "));
console.log(stringToarray(str));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arr.map(item => item.toString()));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
const sortNums = (arr, direction) => {
    if (direction === "ascending") return arr.sort((a, b) => a - b);
    if (direction === "descending") return arr.sort((a, b) => b - a);
}
console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(i => i.monthDuration > 5));
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((item, i) => ({id: i, title: item.title, monthDuration: item.monthDuration})));
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const cardSuitColor = [{suit: "spade", color: "black"}, {suit: "diamond", color: "red"},
    {suit: "heart", color: "red"}, {suit: "clubs", color: "black"}];
const cardValue = ["6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
const cardsGenerator = (cardValue, cardSuitColor) => {
    let result = [];
    cardValue.forEach(v => {
        cardSuitColor.forEach(sc => {
            result.push({cardValue: v, ...sc})
        })
    })
    return result;
}
const cards = cardsGenerator(cardValue, cardSuitColor);

// - знайти піковий туз
console.log(cards.filter(v => v.cardValue === "ace" && v.suit === "spade"));
// - всі шістки
console.log(cards.filter(v => v.cardValue === "6"));
// - всі червоні карти
console.log(cards.filter(v => v.color === "red"));
// - всі буби
console.log(cards.filter(v => v.suit === "diamond"));
// - всі трефи від 9 та більше
console.log(cards.filter(v => v.suit === "clubs" && v.cardValue >= "9" || Number(v.cardValue)>=9));

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(cards.reduce((acc, item) => {
        switch (item.suit) {
            case "spade":
                acc.spades.push(item);
                break;
            case "diamond":
                acc.diamonds.push(item);
                break;
            case "heart":
                acc.hearts.push(item);
                break;
            case "clubs":
                acc.clubs.push(item);
                break;
        }
        return acc;
    }
    , {spades: [], diamonds: [], hearts: [], clubs: []}));


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(item => item.modules.includes("sass")));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(item => item.modules.includes("docker")));
