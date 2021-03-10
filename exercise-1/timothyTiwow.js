let people = ["Greg", "Mary", "Devon", "James"]

//1
console.log("\nUsing a for-loop, iterate through this array and console.log all of the people.")
for(let i=0; i<people.length; i++) {
    console.log(people[i])
}

//2
console.log("\nUsing a forEach(),  iterate through this array and console.log all of the people.")
people.forEach(el => console.log(el))

//3
console.log("\nWrite the command to remove \"Greg\" from the array.")
people = people.filter(el => el !== "Greg")
console.log(people)

//4
console.log("\nWrite the command to remove \"James\" from the array.")
people = people.filter(el => el !== "James")
console.log(people)

//5
console.log("\nWrite the command to add \"Matt\" to the front of the array.")
people.unshift("Matt")
console.log(people)

//6
console.log("\nWrite the command to add your name to the end of the array.")
people.push("Timothy")
console.log(people)

//7
console.log("\nUsing a for-loop, iterate through this array and after console.log-ing \"Mary\", exit from the loop. (hint: use break keyword to exit loop)")
for(let i=0; i<people.length; i++) {
    console.log(people[i])
    if(people[i] === "Mary") {
        break
    }
}

//8
console.log("\nWrite the command to make a copy of the array using slice. The copy should NOT include \"Mary\" or \"Matt\".")
console.log(people.slice(2))

//9
console.log("\nRedefine the people variable with the value you started with. Using the splice command, remove \"Devon\" from the array and add \"Elizabeth\" and \"Artie\". Your array should look like this when you are done [\"Greg\", \"Mary\", \"Elizabeth\", \"Artie\", \"James\"].")
people = ["Greg", "Mary", "Devon", "James"]
people.splice(2, 1, "Elizabeth", "Artie")
console.log(people)

//10
console.log("\nCreate a new variable called withBob and set it equal to the people array concatenated with the string of \"Bob\".")
let withBob = people.concat("Bob")
console.log(withBob)

//Object Exercises
let programming = {
    languages: ["Javascript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}
console.log("\nObject Excercise\n", programming)

//1
console.log("\nWrite the command to add the language \"Go\" to the end of the languages array.")
programming.languages.push("Go")
console.log(programming)

//2
console.log("\nBy using the bracket notation, change the difficulty to the value of 7.")
programming["difficulty"] = 7
console.log(programming)

//3
console.log("\nUsing the delete keyword, write the command to remove the jokes key from the programming object.")
delete programming.jokes
console.log(programming)

//4
console.log("\nBy using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.")
programming.isFun = true
console.log(programming)

//5
console.log("\nUsing a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, … ”, where 0 represents the index of the array, and console.log the output.")
programming.languages = programming.languages.map((el, idx) => `${idx} - ${el}`)
console.log(programming)
