/*
var password = process.argv[2];

function obfuscate(password) {
  var array = [];
  for (var i = 0; i < password.length; i++) {
    array.push(password.charAt(i));
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] === "a") {
      array[i] = "4";
    }
    if (array[i] === "e") {
      array[i] = "3";
    }
    if (array[i] === "o") {
      array[i] = "0";
    }
    if (array[i] === "l") {
      array[i] = "1";
    }
  }
  var string = "";
  for (i = 0; i < array.length; i++) {
    string += array[i];
  }
  return string;
}

console.log(obfuscate(password));
*/

var password = process.argv[2];

function obfuscate(password) {
  var array = password.split("");
  var string = "";
  for (i = 0; i < array.length; i++) {
    if (array[i] === "a") {
      string += "4";
    } else if (array[i] === "e") {
      string += "3";
    } else if (array[i] === "o") {
      string += "0";;
    } else if (array[i] === "l") {
      string += "1";
    } else {
      string += array[i];
    }
  }
  return string;
}
console.log(obfuscate(password));