// class inheritance example 


class Home{
    name:string
    constructor (a:string){
        this.name=a
    }

}

class Cicle extends Home{
    disp():void{
        console.log('Area of cirkke'+this.name);
    }
}

let objs=new Cicle("555")
console.log(objs);