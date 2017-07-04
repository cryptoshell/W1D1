// bring in data
// loop through each array elements

var data = process.argv.slice(2);

data.forEach(function(word) {
  var reversed = "";
  for (var i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  console.log(reversed);
});