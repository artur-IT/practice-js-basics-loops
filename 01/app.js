const randomNumber = Math.round(Math.random() * 20);
console.log("Wylosowano: ", randomNumber);

if (randomNumber > 5) {
  for (let i = 5; i <= randomNumber; i++) console.log(i);
} else console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli");
