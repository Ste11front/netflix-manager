

// DBService.getAllShows().then(shows => console.log(shows))

// const show1 = {
//    "title": "Breaking Bad",
//    "author": "Vince Gilligan",
//    "imageUrl": "https://www.orientaserie.it/wp-content/uploads/2022/09/A1pkVxm26RL._AC_SL1500_.jpg",
//    "isOver": true,
//    "upVotes": 0,
//    "downVotes": 0,
//    "id": "1"
// }

// DBService.upvote(show1).then(show => console.log(show));


const app = new AppController();

app.init();

const showButton = document.getElementById("showDialog");
const newShowDialog = document.getElementById("newShowDialog");

const outputBox = document.querySelector("output");
const selectEl = newShowDialog.querySelector("select");
const confirmBtn = newShowDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
  newShowDialog.showModal();
});

selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

newShowDialog.addEventListener("close", (e) => {
  outputBox.value =
    newShowDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${newShowDialog.returnValue}.`;
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  newShowDialog.close();
});
