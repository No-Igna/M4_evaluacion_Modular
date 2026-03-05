import { Render } from "../render/Render.js";

export class Auth {
  static veterinarios = [];
  static veterinarioActual = null;

  static procesarLogin(nombreUsuario, password) {
    const veterinario = Auth.veterinarios.find((veterinario) =>
      veterinario.verificarCredenciales(nombreUsuario, password),
    );
    if (veterinario) {
      Auth.veterinarioActual = veterinario;
      alert(`Bienvenido, Dr. ${veterinario.nombre} ${veterinario.apellido}`);
      Render.mostrarDashboard(Auth.veterinarioActual);
      Render.mostrarMascotas(Auth.veterinarioActual.mascotasRegistradas);
      return Auth.veterinarioActual;
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  }
  static registrarVeterinario(nuevoVeterinario) {
    const existeVeterinario = Auth.veterinarios.some(
      (veterinario) => veterinario.id === nuevoVeterinario.id,
    );
    if (existeVeterinario) {
      alert("Ya existe un veterinario registrado con ese ID.");
    }
    Auth.veterinarios.push(nuevoVeterinario);
    console.log(
      `Veterinario ${nuevoVeterinario.nombre} ${nuevoVeterinario.apellido} registrado exitosamente.`,
    );
  }
  static mostrarVeterinarios() {
    return Auth.veterinarios;
  }
}
