//
// - створити блок,
let div = document.createElement("div");
//     - додати йому класи wrap, collapse, alpha, beta
div.classList="wrap collaps alpha beta";
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background="blue";
div.style.color="red";
div.style.width ="600px";
div.style.height ="150px";
div.style.display="flex";
div.style.alignItems="center";
div.style.justifyContent="center";
div.style.fontSize="30px"
div.innerText="div"
// - додати цей блок в body.
document.body.appendChild(div)
// - клонувати його повністю, та додати клон в body.
const divClone =div.cloneNode(true);
divClone.innerText="Clone div";
divClone.style.background="green"
document.body.appendChild(divClone);
// - Є масив:
    const arrNav=['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const ul = document.createElement("ul")
arrNav.map(item=>{
    const li = document.createElement("li");
    li.innerText=item;
    ul.appendChild(li)
})
document.body.appendChild(ul)
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
div=document.createElement("div");
let result=""
for(let item of coursesAndDurationArray){
    result+=`<div><span>${item.title}</span> - <span>${item.monthDuration} month</span></div>`
}
div.innerHTML = result;
document.body.appendChild(div)

//
// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for(let item of coursesAndDurationArray){
    div=document.createElement("div");

    div.innerHTML=`<div class='item'>
        <h1 class='heading'>${item.title}</h1>
        <p class='description'>${item.monthDuration}</p>
     </div>`
    document.body.appendChild(div)
}
//
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
simpsons.map(member=>{
    let div = document.createElement('div');
    let str=`<div class='member'>
                        <h2>${member.name}</h2>
                        <h2>${member.surname}</h2>
                        <h3>${member.age}</h3>
                        <h5>${member.info}</h5>
                        <img src="${member.photo}">
                    </div>`
    div.innerHTML=str;
    document.body.appendChild(div)
})
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами

for(let element of coursesArray){

    let container = document.createElement("div");
    container.classList="container mb-5 p-5";
    let title = document.createElement("div");
    title.classList="border-blue mb-5 p-5 fz-30";
    title.innerText= element.title;
    container.appendChild(title)
    let divFlex = document.createElement("div");
    divFlex.classList = "flex mb-5";
    let mothDuration = document.createElement("div")
    mothDuration.innerText =element.monthDuration;
    mothDuration.classList="border-blue width-30 p-5 fz-30";
    let hourDuration = document.createElement("div");
    hourDuration.classList="border-blue width-70 p-5 fz-30";
    hourDuration.innerText=element.hourDuration;
    divFlex.appendChild(mothDuration);
    divFlex.appendChild(hourDuration);
    let wrap = document.createElement("ul");
    wrap.classList="border-blue p-5";
    wrap.style.listStyleType="none"
    element.modules.map(i=>{
        let li = document.createElement("li");
        li.classList="border-blue p-5 mb-5";
        li.innerText=i;
        wrap.appendChild(li)
    })
    container.appendChild(divFlex);
    container.appendChild(wrap);
    document.body.appendChild(container);
}
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------


// parcing    https://mixkit.co/free-stock-music/
let listItems= document.querySelectorAll(".item-grid__item");
let result =[];
for(let item of listItems){
    result.push({
        title:item.querySelector(".item-grid-card__title").textContent.trim(),
        author:item.querySelector(".item-grid-music-preview__author").textContent.trim().replace("by ",""),
        mp3:item.querySelector("audio").src,
    })
}
console.log(result);