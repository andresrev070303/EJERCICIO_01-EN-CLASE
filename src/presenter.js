import generarFizzbuzz from "./fizzbuzz";

const limite = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const limiteNumber = Number.parseInt(limite.value);
  let resultado = "";
  for (let i = 1; i <= limiteNumber; i++) {
    resultado += generarFizzbuzz(i) + " ";
  }
  div.innerHTML = resultado;
  console.log(resultado);
  div.innerHTML = "<p>" + resultado + "</p>";
});

