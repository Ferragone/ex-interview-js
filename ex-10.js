/*10. Обмеження паралельності (Concurrency limit)

Складна, але дуже популярна задача. Ми створюємо фіксовану кількість "робітників" (workers), які беруть завдання з черги. 
Як тільки робітник закінчує своє завдання, він бере наступне, поки всі завдання не завершаться.*/

async function runTasks(tasks, limit) {
  const results = [];
  let index = 0; // Вказівник на поточне завдання

  // Функція-"робітник", яка постійно бере наступне завдання, поки вони є
  async function worker() {
    while (index < tasks.length) {
      const currentIndex = index++; // Зберігаємо індекс і одразу збільшуємо його
      try {
        // Виконуємо завдання і зберігаємо результат на потрібній позиції
        results[currentIndex] = await tasks[currentIndex]();
      } catch (error) {
        results[currentIndex] = error;
      }
    }
  }

  const workers = [];
  // Створюємо обмежену кількість робітників
  for (let i = 0; i < Math.min(limit, tasks.length); i++) {
    workers.push(worker());
  }

  // Чекаємо, поки ВСІ робітники завершать роботу
  await Promise.all(workers);

  return results;
}

// Приклад використання:
const fakeTask = (id, delay) => () =>
  new Promise((res) =>
    setTimeout(() => {
      console.log(`Таск ${id} виконано`);
      res(id);
    }, delay),
  );

const tasksList = [
  fakeTask(1, 1000),
  fakeTask(2, 500),
  fakeTask(3, 800),
  fakeTask(4, 300),
  fakeTask(5, 1200),
];

// Виконає 5 завдань, але одночасно працюватиме не більше 2-х
// runTasks(tasksList, 2).then(res => console.log('Всі результати:', res));
