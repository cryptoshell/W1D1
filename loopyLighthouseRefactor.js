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

// Lighthouse
// 101cd ..
// Loopy
// 103
// Lighthouse
// Loopy
// 106
// 107
// LoopyLighthouse
// 109
// 110
// Loopy
// Lighthouse
// 113
// Loopy
