const items = require("./items.json");
console.log(items.map(item => item.content).join(""));