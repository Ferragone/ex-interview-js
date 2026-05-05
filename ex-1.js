/*1. Групування та агрегація даних (Data Processing)

Умова: Дано масив об'єктів (наприклад, список працівників з полями name, department, salary, age). 
Напишіть функцію, яка повертає новий об'єкт, де ключами є назви відділів, а значеннями
— сумарна зарплата працівників цього відділу, але тільки тих, кому більше 25 років.
Що перевіряє: Вміння працювати з методами масивів (filter, reduce), деструктуризацію об'єктів,
розуміння того, як динамічно створювати ключі в об'єкті.*/

const employees = [
  { name: 'Іван', department: 'IT', salary: 1000, age: 26 },
  { name: 'Олег', department: 'Sales', salary: 800, age: 30 },
  { name: 'Анна', department: 'IT', salary: 1200, age: 22 }, // не пройде фільтр за віком
  { name: 'Марія', department: 'Sales', salary: 900, age: 28 },
];

const salaryByDepartment = employees
  .filter((emp) => emp.age > 25)
  .reduce((acc, emp) => {
    // Якщо відділу ще немає в об'єкті acc, ініціалізуємо його нулем
    acc[emp.department] = (acc[emp.department] || 0) + emp.salary;
    return acc;
  }, {});

console.log(salaryByDepartment);
// Результат: { IT: 1000, Sales: 1700 }
