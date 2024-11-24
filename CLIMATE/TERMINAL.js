// define variables

var shir

shir=11

const unchangin_shir=23

let changing_shir = 12

//define function 

function calculate(num1, num2, operator){


    validateInput(num1,num2)

    answer= operationNums(num1, num2, operator)
}


function calculate(num1,num2, operator){

    validateNums(num1,num2)

    switch (operator){
        
        case 'plus':
            return addNums ( num1+num2)

        case 'minus':
            return subtractNums ( num1-num2)

        case 'divide':
            return divideNums ( num1/num2)

        default:
            return 'Invalid number'
    }



}


function validateNums (num1,num2){
    if(
        isNaN(num1) ||
        isNaN(num2) ||
        num1 === "",
        num2 === ""
    ){
        alert('What?')
    }
}



//fuction for summation

function addNums(num1,num2){
    return num1+num2
}


function divideNums(num1,num2){

    if (num2 ===0){
        alert ('You cant divide by 0')
    }

    return num1/num2
}

function subtractNums(num1,num2){
    return num1-num2
}










