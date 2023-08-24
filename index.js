// Follow along with the examples here

function sayHello() {
    console.log("Hello!")
}

sayHello()

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}

say("Julio", "hello")
  
function add(x, y) {
    return x + y
}

console.log(add(1, 2))