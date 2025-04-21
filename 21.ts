//example using mobile

interface Product{
    name:string,
    model:number
}

interface Offer extends Product{
    price:number,
    discount:number
}

interface Reviews extends Product{
review:string[]
}

interface Interesed extends Offer,Reviews{
    interested:boolean
}

let Mobile:Interesed={
    name:"mi",
    model:222,
    price:111,
    discount:10,
    review:["recommended","go ahead"],
    interested:true
}
console.log(Mobile);
console.log(Mobile.discount);