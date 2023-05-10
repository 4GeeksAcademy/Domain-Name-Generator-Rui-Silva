import "bootstrap";
import "./style.css";

let pronoun = ["the", "our", "your"];
let adj = ["great", "big", "worst"];
let noun = ["jogger", "racoon", "game"];
let extensions = [".com", ".pt", ".us"];
let aux = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extensions.length; l++) {
        aux.push(pronoun[i] + adj[j] + noun[k] + extensions[l]);
      }
    }
  }
}

let list = document.getElementById("domainGenerator");
for (let m = 0; m < aux.length; ++m) {
  let li = document.createElement("li");
  li.innerText = aux[m];
  list.appendChild(li);
}
