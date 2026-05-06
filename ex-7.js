/*Структури даних та алгоритми
7. Плоский масив у Дерево

Замість того, щоб постійно шукати батьків через find (що дуже повільно для великих масивів), ми спочатку складаємо всі 
елементи в об'єкт (словник) map, щоб мати до них миттєвий доступ за id.*/

const flatCategories = [
  { id: 1, parentId: null, name: 'Електроніка' },
  { id: 2, parentId: 1, name: 'Телефони' },
  { id: 3, parentId: 2, name: 'iPhone' },
  { id: 4, parentId: null, name: 'Одяг' },
];

function buildTree(items) {
  const map = {};
  const tree = [];

  // Крок 1: Копіюємо елементи в map, додаючи порожній масив children
  items.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });

  // Крок 2: Розподіляємо елементи по батьках
  items.forEach((item) => {
    if (item.parentId !== null) {
      // Якщо є батько, кладемо цей елемент йому в children
      map[item.parentId].children.push(map[item.id]);
    } else {
      // Якщо батька немає, це кореневий елемент
      tree.push(map[item.id]);
    }
  });

  return tree;
}

console.dir(buildTree(flatCategories), { depth: null });
