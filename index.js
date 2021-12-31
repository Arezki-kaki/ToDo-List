const form = document.querySelector("form");
const liste = document.querySelector("ul");
const input = document.querySelector("form input");

let toutesLesTaches = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim(); //supprime les espaces et tab en debut et fin de saisie !

  if (text !== "") {
    rajouterUneTache(text);
    input.value = "";
  }
});

function rajouterUneTache(text) {
  const todo = {
    text,
    id: Date.now(),
  };
  afficherListe(todo);
}

function afficherListe(todo) {
  const item = document.createElement("li"); //Crée la liste de la tache ajoutée !
  item.setAttribute("data-key", todo.id);

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.addEventListener("click", tacheFaite);
  item.appendChild(input);

  const txt = document.createElement("span");
  txt.innerText = todo.text;
  item.appendChild(txt);

  // Btn et img supprimer la tache créée
  const btn = document.createElement("button");
  btn.addEventListener("click", supprimerTache);
  const img = document.createElement("img");
  img.setAttribute("src", "./fermer.svg");
  btn.appendChild(img);
  item.appendChild(btn);

  liste.appendChild(item);
  toutesLesTaches.push(item);
  console.log(toutesLesTaches);
}

function tacheFaite(e) {
  e.target.parentNode.classList.toggle("finDeTache");
}

function supprimerTache(e) {
  toutesLesTaches.forEach((el) => {
    if (
      e.target.parentNode.getAttribute("data-key") ===
      el.getAttribute("data-key")
    ) {
      el.remove();
      toutesLesTaches = toutesLesTaches.filter(
        (li) => li.dataset.key !== el.dataset.key
      );
    }
  });
}
