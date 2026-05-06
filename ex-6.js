/*6. Функція Debounce

Класичне замикання. Ми повертаємо нову функцію, яка "пам'ятає" змінну timeoutId. При кожному новому виклику старий таймер 
скидається, і створюється новий.*/

function debounce(func, delay) {
  let timeoutId; // Змінна в замиканні

  return function (...args) {
    // Очищаємо попередній таймер, якщо функція викликана знову
    clearTimeout(timeoutId);

    // Встановлюємо новий таймер
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Викликаємо оригінальну функцію з правильним контекстом
    }, delay);
  };
}

// Використання:
const logInput = debounce((text) => console.log(text), 1000);
logInput('А'); // Скасовано
logInput('Аб'); // Скасовано
logInput('Абв'); // Спрацює через 1 секунду після цього виклику
