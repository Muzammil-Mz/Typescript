//interface and extends,super
//simple interface
interface Person{
    name:string
}

interface Girls extends Person{
    age:number
}


let dreamer=<Girls>{}
dreamer.age=22
console.log(dreamer.age);



