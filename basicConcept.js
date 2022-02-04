const users = [
  { name: "lan", age: 30, job: "teacher" },
  { name: "leo", age: 60, job: "marketer" },
  { name: "que", age: 20, job: "housekeeper" },
  { name: "hana", age: 32, job: "developer" },
  { name: "jeje", age: 22, job: "teacher" },
];
function filter(list, predicate) {
  const new_list = [];
  for (let i = 0, len = list.length; i < length; i++) {
    if (predicate(list[i])) new_list.push(list[i]);
  }
  return new_list;
}

function map(list, iteratee) {
  let new_list = [];
  for (let i = 0, len = list.length; i < length; i++) {
    new_list.push(iteratee(list[i]));
  }
  return new_list;
}

//이게 바로 클로저!!!
function bvalue(key) {
  //key = a;
  return function (obj) {
    //obj = {a:"hi", b:"hello"}
    return obj[key];
  };
}

bvalue("a")({ a: "hi", b: "hello" });
map(
  filter(users, function (user) {
    return user.age < 30;
  }),
  bvalue("age")
);
