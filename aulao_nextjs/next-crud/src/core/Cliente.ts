export default class Cliente {
  #nome: string;
  #idade: number;
  #id: string;

  constructor(nome: string, idade: number, id: string = null) {
    this.#nome = nome;
    this.#idade = idade;
    this.#id = id || this.#gerarId();
  }

  static vazio() {
    return new Cliente("", 0);
  }

  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }

  get idade() {
    return this.#idade;
  }

  #gerarId() {
    return new Date().getTime().toString();
  }
}
