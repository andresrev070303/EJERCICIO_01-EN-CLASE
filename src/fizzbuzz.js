function generarFizzbuzz (n){
   
    //return n + "";
    if (n % 3 === 0){
        return "Fizz";
    }
    else{
        return n + "";
    }
}
export default generarFizzbuzz;