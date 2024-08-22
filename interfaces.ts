type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

interface Player  {
  nickname: string;
  team: Team;
  health: Health;
};

const nico: Player = {
  nickname: "nico",
  team: "yellow",
  health: 10,
};


type Player = User & {

}

type User = {
    name:string
}
const nico:Player={
    name:"nico"
}

interface User{
    name:string
}

interface User{
    lastName:string
}
interface User{
    health:number
}

cosnt nico: User={
    name:"nico",
    lastName:"n",
    health:10
}

type User={
    name:string
}

type User={
    lastName:string
}