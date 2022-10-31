export default function noteConstructor() {
 const noteCard = document.createElement("div");
 noteCard.classList.add("note-card");
 const title = document.createElement("h1");
 title.innerHTML = "I am title";
 noteCard.appendChild(title);


 return noteCard

}