function fact(a:number):number{
if (a==0){
    return 1
}
else{
    return a*fact (a-1)
}
}

console.log(fact("hee")); //not acceptable as we already assigned that we are gonna passs number as argumetn
