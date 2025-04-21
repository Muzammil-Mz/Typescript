//arrow function

let names=(name:string)=>{
console.log("hello",`${name}`);
}
names("mz")


// return

let addition =(num1:number,num2:number)=>{
    return num1+num2
}

console.log(addition(2,5));


let greet=()=>{return "hello"}
console.log(greet());


let namess=(a:number=10)=>{
    console.log(a);
}
namess()