// HOMEWORK 1 
let myDay = [
    "Stefan",
    "happy",
    "working"
]
function tellStory(myDay) {
    console.log(`This is ${myDay[0]}. ${myDay[0]} is a nice person. Today they are ${myDay[1]}. They are ${myDay[2]} all day. The End`);
}

tellStory(myDay);

//HOMEWORK 2
function numberSum(list) {
    sum = 0;
    for(let i = 0;i<list.length; i++) {
        if(validateNumber(list[i])) {
            return "Loso vnesen broj";
        } else{
            sum+=list[i];
        }
        
    }
    return sum;
}

function validateNumber(n) {
    if(typeof(n) != 'number'){
        return true;
    }
    return false;
}

list = [5, 1, 'a', 5, 4];
console.log(numberSum(list));

//HOMEWORK 3
function greetStudents(array) {
    let str = '';
    for(let i=0;i<array.length;i++){
        str += array[i] + " ";
    }
    return str;
}

let array = ["Hello", "there", "students", "of", "SEDC", "!"];
console.log(greetStudents(array));

//HOMEWORK 4
str = '';
for(let i=1;i<=20;i++){
    if(i%2==0){
        str+= i+ '\n'
    }
    else{str+= i + " "}

}
console.log(str);

//HOMEWORK 5
function maxNumber(list){
    let max 
    for(let i=0;i<list.length;i++){
        if(i === 0){
            max = list[i]
        }
        if(list[i]>max){
            max = list[i]
        }
    }
    return max
}
function minNumber(list){
    let min
    for(let i=0;i<list.length;i++){
        if(i === 0){
            min = list[i]
        }
        if(list[i]<min){
            min = list[i]
        }
    }
    return min
}

list = [6,5,4,3,2,1]
console.log(minNumber(list) + maxNumber(list));

//HOMEWORK 6
let names = ["Bob", "Jill"]
let surNames = ["Bobsky", "Jillsky"];

let fullNames = [];
for(let i = 0; i < names.length; i++) {
    result = i + ". " + names[i] + " " + surNames[i];
    fullNames[i] = result;
}

console.log(fullNames);

