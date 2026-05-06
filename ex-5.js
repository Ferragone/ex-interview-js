/*5. Глибоке копіювання об'єкта (Deep Clone)

Тут використовується рекурсія (функція викликає сама себе). Вона перевіряє кожен елемент: якщо це простий тип
(число, рядок) — просто повертає його. Якщо об'єкт або масив — заходить всередину і копіює його властивості.*/

function deepClone(obj) {
  // Базовий випадок: якщо це не об'єкт або null, повертаємо як є
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Якщо це масив, створюємо новий масив і рекурсивно копіюємо елементи
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Якщо це об'єкт, створюємо новий і рекурсивно копіюємо поля
  const clone = {};
  for (let key in obj) {
    if (Object.hasOwn(obj, key)) {
      // Перевірка, що властивість належить самому об'єкту
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const original = { a: 1, b: { c: 2 } };
const copied = deepClone(original);
copied.b.c = 99;
console.log(original.b.c); // 2 (оригінал не змінився!)
