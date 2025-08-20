exports.config = {
  appName: "DemoApp",
  db: { host: "localhost", port: 5432 },
};

exports.math = {
  add(a, b) { return a + b; },
  mul(a, b) { return a * b; }
};

exports.sayHello = (name) => `Hello, ${name}!`;
