/*Асинхронність та Node.js
8. Паралельні запити до API (Promise.all)

Секрет успіху тут — метод масиву map, який створює масив промісів (запитів), і Promise.all, який чекає, 
поки вони всі виконаються одночасно.*/

async function fetchUsersAndPosts() {
  try {
    // 1. Отримуємо 10 користувачів
    const usersRes = await fetch(
      'https://jsonplaceholder.typicode.com/users?_limit=10',
    );
    const users = await usersRes.json();

    // 2. Створюємо масив запитів для постів (запити стартують, але ми не чекаємо їх тут по черзі)
    const promises = users.map(async (user) => {
      const postsRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
      );
      const posts = await postsRes.json();
      return { user: user.name, posts: posts };
    });

    // 3. Чекаємо виконання ВСІХ запитів паралельно
    const finalData = await Promise.all(promises);
    console.log(finalData);
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
}
