/*Валідатор дужок (Стек)

Ця задача ідеально вирішується через масив у ролі "стеку". Відкриваючі дужки ми складаємо у стек, а коли 
зустрічаємо закриваючу — дістаємо останню зі стеку і перевіряємо, чи утворюють вони пар.*/

function isValidParentheses(str) {
  const stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };

  for (let char of str) {
    if (pairs[char]) {
      // Якщо це відкриваюча дужка (є як ключ в об'єкті pairs), кладемо в стек
      stack.push(char);
    } else {
      // Якщо закриваюча — дістаємо останню зі стеку
      const lastOpened = stack.pop();
      // Перевіряємо, чи закриваюча дужка відповідає останній відкритій
      if (pairs[lastOpened] !== char) {
        return false;
      }
    }
  }
  // Якщо стек порожній, значить всі дужки закрилися правильно
  return stack.length === 0;
}

console.log(isValidParentheses('({[]})')); // true
console.log(isValidParentheses('([)]')); // false
