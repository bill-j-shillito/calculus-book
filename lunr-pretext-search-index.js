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
  "body": " What is calculus?  Much of the geometry you've studied before relies on straight lines and flat shapes. You can find the slope of a line, the perimeter of a polygon, or the area of a rectangle using simple, well-known formulas. But many of the shapes we encounter in the real world aren't straight they're curved. Calculus extends the tools of geometry and algebra to help us reason about these more complex, curved situations.  Here's how the ideas you already know begin to generalize when we introduce calculus:   Before calculus With calculus  Slope of a line Slope of a curve (derivative)  Length of a segment Length of a curve (arc length)  Area of a rectangle Area under a curve (definite integral)  Average rate of change Instantaneous rate of change  Summing a few terms Adding infinitely many tiny pieces   Consider the parabola given by from to . Unlike the perimeter of a rectangle or the length of a straight segment, there's no obvious formula to plug into. So how could we even begin?     f(x)=2*x-x^2  a = 1         One natural idea is to approximate the curve using straight lines. If we connect a few points on the graph with line segments, we can estimate the total length by adding up the lengths of those segments.     f(x)=2*x-x^2  a = 1              In the figure above, we connect the points , , and with line segments. The total length of these segments gives us an estimate of the arc length of the curve from to :   And if we use more points say, ten instead of three the estimate gets better. Each line segment becomes a closer approximation of the curve.  Now imagine continuing this process with more and more points, each one closer to the next. The curve starts to look like it's made up of infinitely many tiny pieces, each nearly straight. If we could somehow add up the lengths of all those infinitesimal segments, we'd get the exact arc length. But what does it mean to add up infinitely many infinitesimal pieces? That question is the starting point of calculus, which gives us the tools to reason precisely about these infinitesimal quantities.  "
},
{
  "id": "welcome-reading-questions",
  "level": "1",
  "url": "welcome-reading-questions.html",
  "type": "Reading Questions",
  "number": "1.2",
  "title": "Check your understanding",
  "body": " Check your understanding   What is calculus?   What is calculus? Why is it important?    Calculus is the mathematical study of continuous change. It is important because it provides tools for modeling and understanding dynamic systems.    "
},
{
  "id": "welcome-reading-questions-2",
  "level": "2",
  "url": "welcome-reading-questions.html#welcome-reading-questions-2",
  "type": "Reading Question",
  "number": "1.2.1",
  "title": "What is calculus?",
  "body": " What is calculus?   What is calculus? Why is it important?    Calculus is the mathematical study of continuous change. It is important because it provides tools for modeling and understanding dynamic systems.   "
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
