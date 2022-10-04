const form = document.querySelector("form");
const input = document.querySelector("input");
const h3 = document.querySelector("h3");
const img = document.querySelector("img");
const hp = document.querySelector(".stat-hp");
const attack = document.querySelector(".stat-attack");
const defense = document.querySelector(".stat-defense");
const specialAtack = document.querySelector(".stat-spatack");
const specialDefense = document.querySelector(".stat-spdefense");
const speed = document.querySelector(".stat-speed");
const ability1 = document.querySelector(".ability1");
const ability2 = document.querySelector(".ability2");
const main = document.querySelector("main");
// form.addEventListener("submit", function(e){
//     e.preventDefault();
// })

form.addEventListener("submit", function (e) {
  e.preventDefault();
  (async function () {
    try {
      const inputValue = input.value.toLocaleLowerCase().trim();

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue}`
      );
      const data = await response.json();

      if (!input.value) {
        main.style.display = "none";
        alert("There's no input!");
        throw new Error("Please enter some value");
      }
      console.log(data);
      main.style.display = "block";
      h3.textContent = data.name.toUpperCase();
      img.src = data.sprites.front_default;
      hp.textContent = data.stats[0].base_stat;
      attack.textContent = data.stats[1].base_stat;
      defense.textContent = data.stats[2].base_stat;
      specialAtack.textContent = data.stats[3].base_stat;
      specialDefense.textContent = data.stats[4].base_stat;
      speed.textContent = data.stats[5].base_stat;

      ability1.textContent = data.abilities[0].ability.name;
      ability2.textContent = data.abilities[1].ability.name;
      input.value = "";
    } catch (error) {
      console.log("this is the error", error.message);
    }
  })();
});
