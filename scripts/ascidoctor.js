const Asciidoctor = require('asciidoctor')

const asciidoctor = Asciidoctor();
let html = asciidoctor.convert('Hello, _Asciidoctor_')
console.log(html)