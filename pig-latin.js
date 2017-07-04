var data = process.argv.slice(2);
var string = "";
data.forEach(function(word) {
  var pigLatined = "";
  for (var i = 1; i < word.length; i++) {
    pigLatined += word[i];
  }
  pigLatined += word[0] + 'ay';
  string += pigLatined + ' ';
});
console.log(string);
