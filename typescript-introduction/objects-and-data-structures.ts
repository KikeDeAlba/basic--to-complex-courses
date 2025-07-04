import { mutateObject } from "./src/fn-mutate-object";

// Objeto es = {}
const a = {};

// Los objetos se conforman por propiedades y valores encadanedas a travez de una coma, los tipos de datos que pueden manejar las keys de cada propiedad es string, number (aun que lo convierte automaticamente a string) y en values puede usar cualquier tipo de dato, tanto primitivos como complejos
const b = {
  property: '',
};

// Los objetos pueden reasignar su valor fuera de la declaracion de la constante
const c: { property?: string } = {};
c.property = "Asignacion luego de la declaracion";

// Cada key dentro de un objeto esta asociado a un valor en memoria
const d = {
  property1: "valor",
};

mutateObject(d);

console.log({
  a,
  b,
  c,
  d,
});
