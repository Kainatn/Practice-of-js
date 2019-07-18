//functions
function addNumber(numb1, numb2, numb3) {
    return numb1 + numb2 + numb3
}
function paisaDouble(paisa) {
    return paisa * 2;
}
function sayEidMurak(getName) {
    return "Eid Mubarak  " + getName;

}
// another way of declaring function 
// when we have to assign a varible 
let  giveLength= function (letter) {
    return letter.length;

}
function makeItCApital(letter) {
    return letter.toUpperCase();

}
function splitIt(letter) {
    return letter.split();
}
//Json
let human = {
    name:"Sara",
    age:55,
    isHappy:false,
    eat: function(food){
        console.log("Eating "+food+"");
    },
    address:{
        street:"House no 1, Lane 5",
        city:"KArchi",
        province:"Sindh",
        country:"Pakistan",
    },
    hobbies:["watching movies","Playin games"]

}

