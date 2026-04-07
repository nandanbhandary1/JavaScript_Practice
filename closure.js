function outer_function() {
    let name = "Nandan"
    function inner_function() {
        console.log(name);
    }
    return inner_function
}

let inner = outer_function()
inner()

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer Variable: ' + outerVariable);
    console.log('Inner Variable: ' + innerVariable);
  };
}

const newFunction = outerFunction('outside');
newFunction('inside'); 
// Logs: 
// Outer Variable: outside
// Inner Variable: inside
// In this example, newFunction is a closure that still has access to outerVariable even though outerFunction has already finished executing. 