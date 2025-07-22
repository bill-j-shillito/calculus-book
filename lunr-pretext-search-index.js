var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "welcome-sec-what-is-calculus",
  "level": "1",
  "url": "welcome-sec-what-is-calculus.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is calculus?",
  "body": " What is calculus?  Put some things here.  "
},
{
  "id": "welcome-sec-differentials",
  "level": "1",
  "url": "welcome-sec-differentials.html",
  "type": "Section",
  "number": "1.2",
  "title": "Differentials",
  "body": " Differentials  Put some things here about differentials.  "
},
{
  "id": "welcome-reading-questions",
  "level": "1",
  "url": "welcome-reading-questions.html",
  "type": "Reading Questions",
  "number": "1.3",
  "title": "Check your understanding",
  "body": " Check your understanding   What is calculus?  What is calculus? Why is it important?   Calculus is the mathematical study of continuous change. It is important because it provides tools for modeling and understanding dynamic systems.    "
},
{
  "id": "welcome-reading-questions-2",
  "level": "2",
  "url": "welcome-reading-questions.html#welcome-reading-questions-2",
  "type": "Reading Question",
  "number": "1.3.1",
  "title": "What is calculus?",
  "body": " What is calculus?  What is calculus? Why is it important?   Calculus is the mathematical study of continuous change. It is important because it provides tools for modeling and understanding dynamic systems.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
