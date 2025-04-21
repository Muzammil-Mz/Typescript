// let x:number=1
// do {
//   console.log(x);
//   x++
// }

// while(x<=10)

function addNumbers(...nums: number[]) {
  let a;
  let sum: number = 0;

  for (a = 0; a < nums.length; a++) {
    sum = sum + nums[a];
  }
  console.log(sum);
}

addNumbers(1, 2, 3);
