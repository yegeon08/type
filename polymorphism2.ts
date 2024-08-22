interface Storage{
    [key:string]:T
}

class LocalStorage<T>{
    private storage:Storage<T>={}
    set(key:string, value:T){
        this.storage[key]=value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear({
        this.storage={}
    })
}

const stringstorage= new LocalStorage<string>()
stringstorage.get("key")
stringstorage.set("hello","now are you")

const booleanStorage=new LocalStorage<boolean>();
booleanStorage.get("xxx")
booleanStorage.set("hello",true)
