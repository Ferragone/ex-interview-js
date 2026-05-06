/* Глибоке розуміння ядра JavaScript (Core JS)
4. Власна реалізація myFilter

Вбудований filter просто проходить циклом по масиву, передає кожен елемент у вашу функцію-умову (callback) і,
якщо вона повертає true, додає елемент у новий масив.*/

function myFilter(array, callback) {
  const result = []; // Створюємо новий порожній масив

  for (let i = 0; i < array.length; i++) {
    // callback приймає 3 аргументи: поточний елемент, індекс, весь масив
    const isPassing = callback(array[i], i, array);

    if (isPassing) {
      result.push(array[i]);
    }
  }

  return result;
}

const nums = [1, 2, 3, 4, 5];
const evens = myFilter(nums, (num) => num % 2 === 0);
console.log(evens); // [2, 4]
