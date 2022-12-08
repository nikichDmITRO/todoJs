const input = document.querySelector(".input-toDo");
const button = document.querySelector(".buttonAdd");

let data = document.querySelector(".data");
let sta
if (localStorage.getItem(data)) {
  sta = JSON.parse(localStorage.getItem(data));
}
else{
    sta=[]
}

console.log(sta);
data.innerHTML = sta
  .map(
    (el, ind) =>
      `<div class="data-item ">${
        ind + 1
      }<p>${el}</p><button class="deleteBtn" data-itemid=${ind}>Удалить</button></div>`
  )
  .join("");

button.addEventListener("click", () => {
  
  sta.push(input.value);
  localStorage.setItem(data, JSON.stringify(sta));
  input.value=""
  console.log(sta);
  data.innerHTML = sta
    .map(
      (el, ind) =>
        `<div class="data-item ">${
          ind + 1
        }<p>${el}</p><button class="deleteBtn" data-itemid=${ind}>Удалить</button></div>`
    )
    .join("");
});

data.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteBtn")) {
    
    console.log(event.target);
   
    sta.splice(event.target.dataset.itemid, 1);
    localStorage.setItem(data, JSON.stringify(sta));
    location. reload()
  }
});
