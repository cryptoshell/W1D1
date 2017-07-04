for (var num = 100; num <= 200; num++) {
  var word = "";
  if (num % 3 === 0) {
    word += 'Loopy';
    console.log(word);
  }
  if (num % 4 === 0) {
    word += 'Lighthouse';
    console.log(word);
  }
  if(num % 4 !== 0 && num % 3 !== 0) {
    console.log(num);
  }
}