import { AppManager } from "./src/utils/AppManager.js";
import { Veterinario } from "./src/Models/veterinario.js";
import { Mascota } from "./src/Models/mascota.js";
import { Auth } from "./src/utils/Auth.js";

let veterinarioActual = null;

const nombreUsuario = document.querySelector("#usuario");
const password = document.querySelector("#password");
const loginForm = document.querySelector("#loginForm");

const formularioMascota = document.querySelector("#addPetForm");
const buscadorMascotas = document.querySelector("#searchPet");

console.log(window.bootstrap);

const veterinario = new Veterinario("Ignacio", "Gonzalez", "Ab12345678.");
const mascota1 = new Mascota("Firulais", "Juan Perez", "Evolución: Mejorando");
const mascota2 = new Mascota("Michi", "Ana Gomez", "Evolución: Estable");
console.log("mascota 1:", mascota1);
console.log("mascota 2:", mascota2);
veterinario.registrarMascota(mascota1);
veterinario.registrarMascota(mascota2);
console.log(veterinario.nombreUsuario);
Auth.registrarVeterinario(veterinario);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  veterinarioActual = Auth.procesarLogin(nombreUsuario.value, password.value);
});

formularioMascota.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(veterinarioActual);
  AppManager.agregarMascota(veterinarioActual);
});

buscadorMascotas.addEventListener("input", (e) => {
  const criterioBusqueda = buscadorMascotas.value;
  AppManager.buscarMascota(veterinarioActual, criterioBusqueda);
});
