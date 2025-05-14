const ExtractNumbers = require("./dist").default


const extractor = new ExtractNumbers({ string: false })

console.log(extractor.extractNumbers("300 of 900.9"));