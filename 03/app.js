const x = 10;
let iteration = 0;
let randomNumber = -1;

while (x != randomNumber) {
  randomNumber = (Math.random() * 10).toFixed();
  console.log("wylosowanna to ", randomNumber);
  iteration++;
}
console.log(`zgadłem za ${iteration} razem!`);
