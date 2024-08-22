abstract class User {
    constructor(
        protected firstName:string,
        protected lastName:string,
        protected nickname:string
    ){}
    abstract getNickName():void
     
     getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


class Player extends User{
    getNickName(){
        console.log(this.nickname)
    }
}

cosnt nico = new Player("nico","las","니꼬");

nico.getFullName() 
nico.firstName()





