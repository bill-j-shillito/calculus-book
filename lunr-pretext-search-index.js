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
  "id": "sec-welcome-what-is-calculus",
  "level": "1",
  "url": "sec-welcome-what-is-calculus.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is calculus?",
  "body": " What is calculus?  Put some things here.  "
},
{
  "id": "sec-welcome-differentials",
  "level": "1",
  "url": "sec-welcome-differentials.html",
  "type": "Section",
  "number": "1.2",
  "title": "Differentials",
  "body": " Differentials  Put some things here about differentials.  "
},
{
  "id": "sec-01-reading",
  "level": "1",
  "url": "sec-01-reading.html",
  "type": "Section",
  "number": "1.3",
  "title": "Reading questions",
  "body": " Reading questions  Reading questions go here.  "
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
