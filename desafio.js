const randomNumbers = [12, 432, 32, 6452, 67, 241, 14, 124, 573, 64, 73, 943, 7, 24, 4435, 52, 6, 3, 2, 964, 432, 566, 323]

let numbers = randomNumbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;

    return 0
});

// Criando uma função de comparação para poder colocar todos os números em ordem crescente e organizada

numbersOdd = []
numbersPair = []

for (var i = 0; i < numbers.length; i++) {
    let number = numbers[i]
    if ((number % 2) != 0) {
        numbersOdd.push(number)
    } else {
        numbersPair.push(number)
    }
}
console.log(numbers)
console.log(`A quantidade de números ímpares é ${numbersOdd.length}`)
console.log(`A quantidade de números Pares é ${numbersPair.length}`)