import { Validator } from "../utils/validador.js";
import { REGEX_NAME } from "../utils/constants.js";

export class Mascota {
  #id;
  #nombre;
  #tutor;
  #evolucionMedica;
  constructor(nombre, tutor, evolucionMedica) {
    this.#id = crypto.randomUUID();
    this.#nombre = Validator.nombre(
      nombre,
      REGEX_NAME,
      "El nombre de la mascota no es válido",
    );
    this.#tutor = Validator.nombre(
      tutor,
      REGEX_NAME,
      "El nombre del tutor no es válido",
    );
    this.#evolucionMedica = evolucionMedica;
  }
  // Getters
  get id() {
    return this.#id;
  }
  get nombre() {
    return this.#nombre;
  }
  get tutor() {
    return this.#tutor;
  }
  get evolucionMedica() {
    return this.#evolucionMedica;
  }
  // Setters
  setNombre(nuevoNombre) {
    const nombreValidado = Validator.nombre(
      nuevoNombre,
      REGEX_NAME,
      "El nombre de la mascota no es válido",
    );
    this.#nombre = nombreValidado;
  }
  setTutor(nuevoTutor) {
    const tutorValidado = Validator.nombre(
      nuevoTutor,
      REGEX_NAME,
      "El nombre del tutor no es válido",
    );
    this.#tutor = tutorValidado;
  }
  actualizarEvolucionMedica(nuevaEvolucion) {
    this.#evolucionMedica = nuevaEvolucion;
  }
  toFullObject() {
    return {
      id: this.#id,
      nombre: this.#nombre,
      tutor: this.#tutor,
      evolucionMedica: this.#evolucionMedica,
    };
  }
}
