let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

// multiplyNumeric(menu, 3)
// menu = {
//  width: 600,
//  height: 900,
//  title: 'My menu'
// };

function multiplyNumeric(obj, num) {
  for (let key in obj) {
    if (typeof obj[key] !== "number") continue;
    obj[key] *= num;
  }
}

multiplyNumeric(menu, 3);
console.log(menu);
