let postID = new URL(location.href).searchParams.get("id");
let post = JSON.parse(new URL(location.href).searchParams.get("post"));

const info = document.getElementById("post__info");
let card = document.createElement("div");
card.classList.add("card", "w-90", "fz-08", "fz-1");

info.appendChild(renderEntries(card, post, "w-22"));

const comments = document.getElementById("post__comments");
fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    .then(res => res.json())
    .then(data => {
        data.map(obj => {
            let card = document.createElement("div");
            card.classList.add("card", "w-22", "fz-08");
            comments.appendChild(renderEntries(card, obj));
        })
    })

function renderEntries(element, object, widthKey = "w-18") {
    for (let key in object) {
        let entry = document.createElement("div");
        entry.classList.add("entry","w-90");
        let entryKey = document.createElement("div");
        entryKey.innerText = `${key}:  `;
        entryKey.classList.add("entry__key", widthKey);
        let entryVal = document.createElement("div");
        entryVal.innerText = (typeof object[key]) === "string" ? object[key].replaceAll("\n", "") : object[key];
        entryVal.classList.add("entry__val");
        entry.append(entryKey, entryVal);
        element.appendChild(entry);
    }
    return element;
}
