const inputBox = document.getElementById("inputbox");
const list = document.getElementById("list");
const button = document.getElementById("button");

button.addEventListener('click', () => {
    if (inputBox.value === "") {
        alert("You mush write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        let exit = document.createElement("button");
        exit.setAttribute("id", "exit");
        exit.innerHTML = "X";
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