let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}

function hello() {
  console.log("x");
}

function hi(): never {
  return "X";
}

function hi2(): never {
  throw new Error("xxx");
}

function hello(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}
