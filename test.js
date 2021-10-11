// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

function task11(arr) {
  arr = arr.map((item) => {
    let count = 0;
    arr.forEach((element) => {
      if (item > element) {
        count++;
      }
    });
    return count;
  });
  return arr;
}

console.log(task11([8, 1, 2, 2, 3]));
console.log(task11([6, 5, 4, 8]));

// Задание №10
// 	Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

function task10(arr) {
  let currCount = 0;
  let maxCount = 0;

  arr = arr.sort((a, b) => b - a);
  console.log(arr);

  arr.forEach((item, index) => {
    if (index > 0) {
      if (item === arr[index - 1]) {
        currCount++;
      } else {
        if (currCount > maxCount) {
          maxCount = currCount;
        }
        currCount = 0;
      }
    } else {
      currCount++;
    }
  });
  return maxCount;
}

console.log(task10([4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4]));

let aboutUs = [
  ["name", "Makers"],
  ["type", "Bootcamp"],
  ["place", "Bishkek"],
  ["languages", "JavaScript, Python"],
  ["simply", "the best!"],
];

// Вывод:
// name: Makers
// type: Bootcamp
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!

function task3(arr) {
  arr.forEach((item) => {
    console.log(`${item[0]}: ${item[1]}`);
  });
}

task3(aboutUs);
