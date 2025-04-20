//diff between type and interface. 
//equal used in type not used in interface
interface Train{
    name:string;
    route:number
}

let trains:Train={
    name:"fast",
    route:22

}

console.log(trains.name);


type Car={
    name:string;
    model:number
}

let Cars:Car={
    name:"bmw",
    model:205
}
console.log(Cars.name);