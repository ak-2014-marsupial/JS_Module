const id = new URL(location.href).searchParams.get("id");
const card = document.querySelector(".card");

function render(data, element) {
    for (let key in data) {
        if (typeof data[key] == "object") {
            let block = document.createElement("div");
            block.classList.add("flex-y", "flex-a-end", "w-95");
            let entry = document.createElement("div");
            entry.classList.add("entry", "w-100");
            let entryKey = document.createElement("div")
            entryKey.classList.add("entry__key", "w-18");
            entryKey.innerHTML = `${key}`;
            let entryVal = document.createElement("div")
            entryVal.classList.add("entry__key");
            entryVal.innerHTML = `&#9476&#9476&#9488`;
            entry.append(entryKey,entryVal);
            block.appendChild(entry)
            render(data[key], block)
            element.appendChild(block);
        } else {
            let entry = document.createElement("div");
            entry.classList.add("entry", "w-95")
            let entryKey = document.createElement("div");
            let entryVal = document.createElement("div");
            entryKey.innerText = `${key} :`;
            entryKey.classList.add("entry__key", "w-18");
            entryVal.innerText = data[key];
            entryVal.className = "entry__val"
            entry.append(entryKey, entryVal);
            element.appendChild(entry)
        }
    }
}
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => render(data, card))

function handleClick() {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(res => res.json())
        .then(posts => {
                const container = document.getElementById("list_posts");
                container.innerHTML = ""
                posts.map(post => {
                    const card = document.createElement("div")
                    card.classList.add("card", "flex-jc-sb", "w-18");
                    const title = document.createElement("div");
                    title.classList.add("w-90", "text-center")
                    title.innerText = post.title;
                    const btn = document.createElement("input");
                    btn.classList.add("btn", "w-50");
                    btn.value = "Post details";
                    btn.onclick = function () {
                        location.href = `post-details.html?id=${post.id}&post=${JSON.stringify(post)}`
                    }
                    card.append(title, btn);
                    container.appendChild(card)
                })
            }
        )
}

const btn = document.getElementById("get_posts");
btn.addEventListener("click", handleClick)
