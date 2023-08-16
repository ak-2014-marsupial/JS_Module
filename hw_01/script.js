// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
//
//------------------------------------1------------------------------------------
{
    const greeting = "hello";
    let b = "own";
    const TLD_1 = "com";
    const TLD_2 = "ua";
    let e = 1;
    let f = 10;
    let g = -999;
    let h = 123;
    const PI = 3.14;
    let i = 2.7;
    let k = 16;
    let isTrue = true;
    let isFalse = false;
    console.log(greeting);
    console.log(b);
    console.log(TLD_1);
    console.log(TLD_2);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(PI);
    console.log(i);
    console.log(k);
    console.log(isTrue);
    console.log(isFalse);
}
// ------------------------------2----------------------------
{
    const firstName = "Taras";
    const middleName = "Grigorovich";
    const lastName = "Shevchenko";
    const person = firstName + " " + middleName + " " + lastName;
}
// ----------------------------3------------------------------
{
    let a = 100, b = '100', c = true;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
// --------------------------4-------------------------------
{
    let firstName = prompt("Type your first name")
    let middleName = prompt("Type your middle name")
    let age = prompt("How old are you?")
    console.log(`first name is ${firstName}, middle name is ${middleName}, age ${age}`)
}