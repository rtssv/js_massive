const users = ["Tom", "Sam", "Bill"];
console.log(users);     //  ["Tom", "Sam", "Bill"]
const people = users;       //  неглубокое копирование
 
people[1] = "Mike";     //  изменяем второй элемент
console.log(users);     //  ["Tom", "Mike", "Bill"]
