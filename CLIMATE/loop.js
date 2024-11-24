//1.COUNTING NUMBERS FROM 1 -10 USING A FOR LOOP.

    console.log("Counting From 1-10:");
    for (let i = 0; i <= 100; i++) {
        console.log (i); 
    }


//2.CALCULATING THE SUM USING WHILE LOOP.
console.log("Calculating ")
let sum = 0;
let number = 1;
while (number <= 10) {
    sum += number;  //add the current num to sum.
    number++;  //move to the next num
    

}
console.log("Sum:", sum);


//3.USING FOR OF LOOPS TO LIST LETTERS IN A WORD.
let word = "Shirley";
for (let letter of word) {
    console.log(letter);
}


//4.PRINTING PROPERTIES OF AN OBJECT USING FOR IN.
let person = {
    name: "Alexis",
    age: 100,
    hobby: "Swimming",
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}






