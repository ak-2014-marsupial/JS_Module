// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a,b){
    return a*b;
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r){
    return Math.PI*r*r/4;
}
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cilinderArea(h,r){
    return 2*Math.PI*r*h;
}
// - створити функцію яка приймає масив та виводить кожен його елемент
function printArr(arr){
    for(let item of arr){
        document.write(item);
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(str){
    return `<p>${str}</p>`
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUL_1(str){
    let innerStr="";
    for(let i=0;i<3;i++){
        innerStr+=`<li>${str}</li>`
    }
    document.write( `<ul>${innerStr}</ul>`);
}
createUL_1("LOREM")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUL_2(str,index){
    let innerStr="";
    for(let i=0;i<index;i++){
        innerStr+=`<li>${str}</li>`
    }
    document.write( `<ul>${innerStr}</ul>`);
}
createUL_2("Lorem",4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createUL_3(arr){
    let innerStr="";
    for(let item of arr){
        innerStr+=`<li>${item}</li>`
    }
    document.write( `<ul>${innerStr}</ul>`)
}
createUL_3([1,2.5, null, NaN, undefined,"Lorem"])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function printObj(arr){
    let result="";
    for(let item of arr){
        result+=`<div>id:${item.id} name:${item.name} age:${item.age}</div>`
    }
    document.write( result)
}
printObj([
    {id:1,name:"Ivan", age:25},
    {id:2,name:"Alex", age:41},
    {id:3,name:"Nikolay", age:55},])
// - створити функцію яка повертає найменьше число з масиву
function minArr(arr){
    let min=arr[0];
    for(let i=1;i<arr.length; i++){
        if(arr[i]< min) min=arr[i]
    }
    return min
}
document.write(`Min = ${minArr([1,5,-2,4,6,10])}`)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let result =0;
    for(let e of arr){
        result+=e;
    }
    return result;
}
console.log(sum([1,3,4,8,10]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, a,b){
    let tmp =arr[a];
    arr[a]=arr[b];
    arr[b]=tmp
    return arr;
}
console.log(swap([11,22,33,44],0,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for(let item of currencyValues){
        console.log(item)
        if(item.currency === exchangeCurrency) {
            return Math.floor(sumUAH / item.value*100)/100;
        }
    }

}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))