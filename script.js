const laList = document.getElementById("list");
const listContainer = document.getElementById("ulist");
function addTask() {
  if (laList.value === "") {
    alert("Il faut ecrire quelque chose!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = laList.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  laList.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //Majuscule pcq cest comme ca
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function reset() {
  localStorage.clear();
  document.getElementById("ulist").innerHTML = "";
  laList.value = "";
}
