export function mutateObject<
  T extends { property1?: string; property2?: string }
>(obj: T) {
  obj.property1 = "mutated";
  obj.property2 = "añadido";
}
