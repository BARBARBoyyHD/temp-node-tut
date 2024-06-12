// Modules - Encapsulated Code (only share minimum)
// CommonJS - every file is module (by default)

const name = require("./3-names");
const sayhi = require("./4-utils");
require("./5-addvalue");

sayhi("susan");
sayhi(name.peter);
sayhi(name.jhon);