export class Normalizer {
  static nombre(nombre) {
    return nombre
      .toLowerCase()
      .trim()
      .split(" ")
      .map(
        (letra) => letra.charAt(0).toUpperCase() + letra.slice(1).toLowerCase(),
      )
      .join(" ");
  }

  static toLowerCase(texto) {
    return texto.toLowerCase().trim();
  }
}
