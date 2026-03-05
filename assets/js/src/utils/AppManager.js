import { Render } from "../render/Render.js";
import { Mascota } from "../Models/mascota.js";

export class AppManager {
  static agregarMascota(veterinarioActual) {
    const inputNombreMascota = document.querySelector("#petNombre");
    const inputTutorMascota = document.querySelector("#petTutor");
    const inputEvolucionMedica = document.querySelector("#petEvolucion");

    const mascota = new Mascota(
      inputNombreMascota.value,
      inputTutorMascota.value,
      inputEvolucionMedica.value,
    );

    veterinarioActual.registrarMascota(mascota);

    Render.mostrarMascotas(veterinarioActual.mascotasRegistradas);

    document.querySelector("#addPetForm").reset();

    const modalMascota = document.querySelector("#addPetModal");
    const modal =
      bootstrap.Modal.getInstance(modalMascota) ||
      new bootstrap.Modal(modalMascota);
    modal.hide();
  }

  static buscarMascota(veterinarioActual, criterioBusqueda) {
    if (!veterinarioActual) return;
    const mascotas = veterinarioActual.buscarMascota(criterioBusqueda);
    Render.mostrarMascotas(mascotas);
  }
}
