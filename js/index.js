const inputBox = document.getElementById("inputbox");
const list = document.getElementById("list");
const button = document.getElementById("button");

button.addEventListener('click', () => {
    if (inputBox.value === "") {
        alert("You mush write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        list.appendChild(li);

        let exit = document.createElement("i");
        exit.setAttribute("id", "exit");
        exit.classList.add("fa-solid", "fa-circle-xmark")
        li.appendChild(exit);
    }
    inputBox.value = "";
    saveTask();
})

list.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();

    } else if (e.target.id === "exit") {
        e.target.parentElement.remove();
        e.classList.add("fade-out");
        saveTask();
    }
}, false);

function saveTask() {
    localStorage.setItem("data", list.innerHTML);
}


function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();