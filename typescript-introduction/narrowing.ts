function fn(value: string | number) {
  if (typeof value === "string") {
    return value;
  }

  return value + 1;
}

fn("82");
