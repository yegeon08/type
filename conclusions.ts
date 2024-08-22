function superPrint<T>(a: T[]) {
  return a[0];
}

const a = superPrint([1, 2, 3, 4], "x");
const b = superPrint([true, false, true], 1);
const c = superPrint(["a", "b", "c"], false);
const d = superPrint([1, 2, true, false, "hello"], []);

type player<E> = {
  name: string;
  extraInfo: E;
};
type NicoExtra = {
  favFood: string;
};
type NicoPlayer = Player<NicoExtra>;
const nico: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};

function printAllNumbers(arr: Array<number>) {}
