/*9. Обробка гігантських файлів (Node.js Streams)

Щоб не забити оперативну пам'ять, ми читаємо файл частинами (потоками) за допомогою модуля readline.*/

// Код для виконання у середовищі Node.js
const fs = require('fs');
const readline = require('readline');

async function extractErrors(inputFile, outputFile) {
  // Створюємо потік для читання
  const fileStream = fs.createReadStream(inputFile);
  // Створюємо потік для запису
  const outStream = fs.createWriteStream(outputFile);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // Обробка розривів рядків (Windows/Linux)
  });

  // Читаємо файл рядок за рядком
  for await (const line of rl) {
    if (line.includes('ERROR')) {
      outStream.write(line + '\n'); // Пишемо в новий файл, якщо є помилка
    }
  }

  console.log('Помилки успішно записано у файл!');
}

// Виклик: extractErrors('server.log', 'errors.log');
