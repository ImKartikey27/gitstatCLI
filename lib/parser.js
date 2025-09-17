const obj = {
  name: "Kartikey",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

setTimeout(obj.greet.call(), 1000); 
// After 1s: "Hello, undefined"
// Because `this` is lost (function called without object)
