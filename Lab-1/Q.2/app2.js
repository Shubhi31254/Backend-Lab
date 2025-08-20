const { config, math, sayHello } = require("./lib");

console.log("DB Host:", config.db.host);
console.log("2 + 3 =", math.add(2, 3));
console.log(sayHello("Suhani"));
