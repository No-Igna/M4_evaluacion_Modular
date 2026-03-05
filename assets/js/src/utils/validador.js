import { Normalizer } from "./normalizer.js";

export class Validator {
  static nombre(nombre, regex, error) {
    if (!regex.test(nombre)) {
      throw new Error(error || "El nombre no es válido");
    }
    return Normalizer.nombre(nombre);
  }
  static password(password, regex, error) {
    if (!regex.test(password)) {
      throw new Error(error || "La contraseña no es válida");
    }
    return password;
  }
}
