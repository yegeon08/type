type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
    static hello(){
        return "hello"
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(
    public readonly term: string, 
    public readonly def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
type Food=string;
const kimchi:Food="delicious"
Dict.hello()


type Nickname=string
type Health=number
type Friends=Array<string>

type Team="red"|"blue"|"yellow"
type Health=1|5|10



type Player = {
    nickname:string,
    team:Team
    health: Health
}

const nico:Player={
    nickname:"nico",
    team:"yellow",
    health:10
}
