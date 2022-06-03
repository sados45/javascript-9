
let number =prompt("Please enter a number: ")
// console.log(typeof number) //burasi string
// console.log(Number (number))//burasi sayi
number= Number(number)
console.log(Number.isInteger(number)) //burasi true false olarak dönüyor. vigullu sayiya false diyor. normal sayi yazinca true
console.log(typeof number)//burasi number
if(number < 0 || Number.isInteger(number) == false || isNaN(number)) alert("Please enter a postive integer") //burada pozitif bir sayi girmemiz bizden isteniyor. pozitif harici olan tüm sayilar false olarak dönüyor. eher positif gireresek sayi ekrana yansiyor. 

function isPrime(num){
    if(num == 1 ){
        return '${num} is not a Prime Number'
   }else if (num == 2 ){
       return '${num} is a Prime Number'
   }else{
       for (let i = 2; i < num; i++){
           if(num % i == 0){
            return '${num} is not a Prime Number' 
           }
          
   }
        return '${num} is a Prime Number'
}
}
console.log(isPrime(number)) //burada sayi asal sayi ise yani kendisine ve sadece 1e bölünebiliyorsa prime number oluyor. degilse is not prime numberdir.