// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const url=new URL("http://jsonplaceholder.typicode.com/users")
// console.log(url.hostname);
// console.log(url.href);
// console.log(url.pathname);
let container =document.createElement("div");
container.className="container";
fetch(url)
.then(response=>(response.json()))
.then(data=> {
    data.map(item=>{
        const blockItem= document.createElement("div");
        const id= document.createElement("p");
        const name= document.createElement("p");
        const a = document.createElement("a")
        a.setAttribute("href",`user.html?id=${item.id}`)
        blockItem.className="item";
        id.innerText=item.id;
        name.innerText=item.name;
        a.append(id,name)

        blockItem.append(a)
        container.appendChild(blockItem)
    })

})

document.body.appendChild(container)
