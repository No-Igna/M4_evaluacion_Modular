import { Componentes } from "../components/cardMascotas.js";

export class Render {
  static mostrarDashboard(veterinarioActual) {
    const loginSection = document.querySelector("#loginSection");
    const dashboardSection = document.querySelector("#dashboardSection");
    const navbar = document.querySelector("#navbar");
    const welcomeMessage = document.querySelector("#welcomeMessage");
    const medicoInfo = document.querySelector("#medicoInfo");

    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
    navbar.style.display = "block";
    welcomeMessage.textContent = `Bienvenido, Dr. ${veterinarioActual.nombre} ${veterinarioActual.apellido}`;
    medicoInfo.textContent = `Dr. ${veterinarioActual.nombre} ${veterinarioActual.apellido} - Usuario: ${veterinarioActual.nombreUsuario}`;
  }
  static mostrarMascotas(mascotas) {
    const listaMascotas = document.querySelector("#petList");
    const htmlCard = mascotas
      .map((mascota) => Componentes.crearTarjetaMascota(mascota))
      .join("");
    listaMascotas.innerHTML = htmlCard;
  }
}
