var password = process.argv[2];

function obfuscate(password) {
  var array = password.split("");
  var string = "";
  for (i = 0; i < array.length; i++) {
    switch(array[i]) {
      case 'a':
        string += "4";
        break;
      case 'e':
        string += "3";
        break;
      case 'o':
        string += "0";
        break;
      case 'l':
        string += "1";
        break;
      default:
        string += array[i];
        break;
    }
  }
  return string;
}

console.log(obfuscate(password));