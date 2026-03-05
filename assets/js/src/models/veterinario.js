import { Validator } from "../utils/validador.js";
import { REGEX_NAME, REGEX_PASSWORD } from "../utils/constants.js";

export class Veterinario {
  #id;
  #nombre;
  #apellido;
  #nombreUsuario;
  #password;
  #mascotasRegistradas = [];
  constructor(nombre, apellido, password) {
    this.#id = crypto.randomUUID();
    this.#nombre = Validator.nombre(
      nombre,
      REGEX_NAME,
      "El nombre no es válido",
    );
    this.#apellido = Validator.nombre(
      apellido,
      REGEX_NAME,
      "El apellido no es válido",
    );
    this.#password = Validator.password(
      password,
      REGEX_PASSWORD,
      "La contraseña no es válida",
    );
    this.#nombreUsuario = this.#generarNombreUsuario();
  }
  #generarNombreUsuario() {
    const inicialNombre = this.#nombre.charAt(0).toLowerCase();
    const inicialApellido = this.#apellido.charAt(0).toLowerCase();
    const numeroAleatorio = Math.floor(Math.random() * 90000) + 10000;

    return `${inicialNombre}${inicialApellido}${numeroAleatorio}`;
  }
  // Getters
  get id() {
    return `${this.#id}`;
  }
  get nombre() {
    return `${this.#nombre}`;
  }
  get apellido() {
    return `${this.#apellido}`;
  }
  get nombreCompleto() {
    return `${this.#nombre} ${this.#apellido}`;
  }
  get nombreUsuario() {
    return `${this.#nombreUsuario}`;
  }
  get password() {
    return `${this.#password}`;
  }
  get mascotasRegistradas() {
    return [...this.#mascotasRegistradas];
  }
  // setter
  setPassword(nuevaPassword) {
    this.#password = Validator.password(
      nuevaPassword,
      REGEX_PASSWORD,
      "La contraseña no es válida",
    );
  }
  setNombre(nuevoNombre) {
    this.#nombre = Validator.nombre(
      nuevoNombre,
      REGEX_NAME,
      "El nombre no es válido",
    );
    this.#nombre = nuevoNombre;
    this.#nombreUsuario = this.#generarNombreUsuario();
  }
  setApellido(nuevoApellido) {
    this.#apellido = Validator.nombre(
      nuevoApellido,
      REGEX_NAME,
      "El apellido no es válido",
    );
    this.#apellido = nuevoApellido;
  }
  registrarMascota(nuevaMascota) {
    const existeMascota = this.#mascotasRegistradas.some(
      (mascotaRegistrada) => mascotaRegistrada.id === nuevaMascota.id,
    );
    if (existeMascota) {
      throw new Error("La mascota ya está registrada");
    }
    this.#mascotasRegistradas.push(nuevaMascota);
  }
  buscarMascota(nombreMascota) {
    if (!nombreMascota || nombreMascota.trim() === "") {
      return this.#mascotasRegistradas;
    }
    const nombreBuscado = nombreMascota.toLowerCase();
    return this.#mascotasRegistradas.filter((mascota) =>
      mascota.nombre.toLowerCase().includes(nombreBuscado),
    );
  }
  cantidadMascotasRegistradas() {
    return this.#mascotasRegistradas.length;
  }
  verificarCredenciales(nombreUsuario, password) {
    return this.#nombreUsuario === nombreUsuario && this.#password === password;
  }
  toFullObject() {
    return {
      id: this.#id,
      nombre: this.#nombre,
      apellido: this.#apellido,
      nombreUsuario: this.#nombreUsuario,
      password: this.#password,
      mascotasRegistradas: this.#mascotasRegistradas,
    };
  }
  getInfo() {
    return {
      id: this.#id,
      nombre: this.#nombre,
      apellido: this.#apellido,
      nombreUsuario: this.#nombreUsuario,
      cantidadMascotasRegistradas: this.cantidadMascotasRegistradas(),
    };
  }
}
