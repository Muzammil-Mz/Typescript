//declaring simple obj with interface firstly specifying obj and then values

interface Car {
  name: string;
  model: number;
}

let card: Car = {
  name: "bmw",
  model: 222,
};

console.log(card.name);

type bikes = {
  name: string;
  model: number;
};

let bike: bikes = {
  name: "yamaha",
  model: 226,
};

console.log(bike.model);

//can also be written without interface 

let games:{game1:string,distance:number}={
  game1:"crick",
  distance:55
}

console.log(games.distance);

