let isActive = true;

if (isActive) {
  console.log("Active");
}

const namesArray = ["Omar", "Snow", "Shino"];

for (let i = 0; i > namesArray.length; i++) {
  console.log(namesArray[i]);
}

for (const name of namesArray) {
  console.log(name);
}

const user = { id: 1, name: "Alice" };
for (const key in user) {
  console.log(`${key}: ${user[key as keyof typeof user]}`);
}

while (isActive) {
  console.log("Esta activo");

  isActive = false;
}

do {
  console.log("No esta activo");

  isActive = true;
} while (!isActive);

const method: string = "POST";

switch (method) {
  case "GET":
    console.log("Obtener recurso");
    break;
  case "POST":
    console.log("Crear recurso");
    break;
  default:
    console.log("Método no soportado");
}

try {
  const data = JSON.parse('{"valid": true}');
  console.log(data.valid);
} catch (err) {
  console.error("Error de parsing:", err);
} finally {
  console.log("Este bloque siempre se ejecuta");
}