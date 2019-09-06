//Simple Calculator

//Variables
const inptOne = document.getElementById("input-one");
const inptTwo = document.getElementById("input-two");
const dropdown = document.getElementById("dropdown");
const answBtn = document.getElementById("answer-button");
const answerList = document.getElementById("answer-list");
var answers = [];
var arrayCount = 0;

//Function to calculate two numbers depending on dropdown choice.
//Parse input to integers, calculate, push answer to array. 
answBtn.onclick = function(){
    var a = inptOne.value;
    var aParsed = parseInt(a, 10);
    var b = inptTwo.value;
    var bParsed = parseInt(b, 10);
    var count = dropdown.value;
    var summa = 0;
    
    switch(count){
        case "plus":
            summa = aParsed + bParsed;
            answers.push(summa);
            writeList(answers);
            arrayCount++;
            break;
        case "minus":
            summa = aParsed - bParsed;
            answers.push(summa);
            writeList(answers);
            arrayCount++
            break;
        case "gånger":
            summa = aParsed * bParsed;
            answers.push(summa);
            writeList(answers);
            arrayCount++;
            break;
        default:
            summa = aParsed / bParsed;
            answers.push(summa);
            writeList(answers);
            arrayCount++;
            break;        
    }
};

//Function to write the answers array out in a list.
//The last answer gets printed on top of the list.
function writeList(array){
    for(i = arrayCount; i < array.length; i++){
        let item1 = document.createElement("li");
        let t = document.createTextNode(array[i])
        item1.appendChild(t);
        answerList.insertBefore(item1, answerList.childNodes[0])
    }
    return array;
};