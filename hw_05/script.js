// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const areaRectangle =(a,b)=>a*b;
console.log("area of rectangle =>>>>>",areaRectangle(5,10));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const areaCircle=(r)=>Math.PI*r*r;
console.log("area of circle =>>>>>>",areaCircle(10))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const areaCilinder = (h,r)=>2*Math.PI*r*h;
// - створити функцію яка приймає масив та виводить кожен його елемент
const printArrItem =(arr)=> {
    for (let item of arr) {
        document.write(`<div>${item}</div>`)
    }
}
printArrItem(["ssss","ddddd","ffffff"])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const createP=(str)=>{
    document.write(`<p>${str}</p>`)
}
createP("Lorem")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createUl_1=(str)=>{
    let innerStr="";
    for(let i=0;i<3;i++){
        innerStr+=`<li>${str}</li>`
    }
    document.write( `<ul>${innerStr}</ul>`);
}
createUl_1("Lorem UL-1")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createUl_2 = (str,num) =>{
    let innerStr="";
    for(let i=0;i<num;i++){
        innerStr+=`<li>${str}</li>`
    }
    document.write( `<ul>${innerStr}</ul>`);
}
createUl_2("Lorem UL-2",4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const createUl_3 =(arr)=>{
    let innerStr="";
    for(let item of arr){
        innerStr+=`<li>${item}</li>`
    }
    document.write( `<ul>${innerStr}</ul>`)
}
createUl_3([1,2.5, null, NaN, undefined,"Lorem_3"])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const printObj=(arr) =>{
    let result="";
    for(let item of arr){
        result+=`<div>id:${item.id}  age:${item.age}</div>`
    }
    document.write( result)
}
printObj([
    {id:1,name:"Ivan", age:25},
    {id:2,name:"Alex", age:41},
    {id:3,name:"Nikolay", age:55},])
// - створити функцію яка повертає найменьше число з масиву
const minArr =(arr)=>{
    let min=arr[0];
    for(let i=1;i<arr.length; i++){
        if(arr[i]< min) min=arr[i]
    }
    return min
}
document.write(`Min = ${minArr([1,5,-2,4,6,10])}`)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sumItemArr =(arr)=>{
    let result =0;
    for(let e of arr){
        result+=e;
    }
    return result;
}
console.log(sumItemArr([1,3,4,8,10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap= (arr,a,b)=>{
    [arr[b],arr[a]]=[arr[a],arr[b]];
    return arr;
}
console.log(swap([11,22,33,44],0,1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    for(let item of currencyValues){
        console.log(item)
        if(item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }

}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'))