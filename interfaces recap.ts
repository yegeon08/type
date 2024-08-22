type = {
  name: string,
};
type PlayerAA = {
  lastName: string;
};
const playerA: PlayerA = {
  name: "nico",
};

interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
}
interface PlayerBB {
  health: number;
}
const playerB: PlayerB = {
  name: "nico",
};

type PlayerA = {
  firstName: string;
};
interface PlayerB {
  firstName: string;
}
class User implements PlayerB {
  constructor(public firstName: string) {}
}
