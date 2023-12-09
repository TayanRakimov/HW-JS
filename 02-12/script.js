const user_date = {
    name:'Tayan',
    age:29
}
console.log(user_date);

if(user_date.age > 18){
    user_date.verification = true;
}
const result = "name" in user_date;


console.log(result);

