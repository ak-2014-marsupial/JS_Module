
const block = document.querySelector(".container")
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(users=>{
    users.map(user=>{
        const card = document.createElement("div");
        card.classList.add("card","flex-jc-sb","w-40");
        const userId=document.createElement("div");
        const userName=document.createElement("div");
        const button =document.createElement("input")
        userId.innerText=user.id;
        userId.className="badge"
        userName.innerText=user.name;
        userName.classList.add("w-70","text-center")
        button.type="button";
        button.classList.add("btn", "w-50");
        button.value="Details";
        button.onclick=function(){
            location.href=`user-details.html?id=${user.id}`;
        }
        card.append(userId,userName,button);
        block.appendChild(card)

    })
})