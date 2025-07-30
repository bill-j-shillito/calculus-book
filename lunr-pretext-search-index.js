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
  "body": " What is calculus?  Much of the geometry you've studied before relies on shapes made up of straight lines and flat surfaces. For example, the perimeter of a rectangle is simply the sum of its sides, and the area is the product of its length and width. These formulas are straightforward because they deal with simple shapes. But what about more complex shapes, like curves or surfaces that aren't flat? How do we measure things like the length of a curve or the area under a wavy line?  Here's how the ideas you already know begin to generalize when we introduce calculus:   Before calculus With calculus  Slope of a line Slope of a curve (derivative)  Length of a segment Length of a curve (arc length)  Area of a rectangle Area under a curve (definite integral)  Average rate of change Instantaneous rate of change  Summing a few terms Adding infinitely many tiny pieces   Calculus lets us extend these familiar ideas to more complex situations by making use of the concept of infinitesimals quantities that are so small they can be thought of as infinitely close to zero. By breaking down complex shapes and processes into these infinitesimal pieces, we can apply the same principles that work for simple shapes to more complicated ones.  "
},
{
  "id": "welcome-sec-a-motivating-example",
  "level": "1",
  "url": "welcome-sec-a-motivating-example.html",
  "type": "Section",
  "number": "1.2",
  "title": "A motivating example",
  "body": " A motivating example  Let's look at a simple example that you've probably taken for granted: the formula for the area of a circle. You know that the area is given by the formula , where is the radius. But how do we arrive at this formula? How can we understand it in a way that makes sense without just memorizing it?  One way we can start to understand this is by thinking of the circle as being made of many tiny pieces. Imagine that the circle is made up of some number of thin concentric rings, like the layers of an onion. Each ring has a very small width, and if we add up the areas of all these rings, we can get an approximation for the area of the circle.  For example, suppose we chop the circle into four thin rings. If we slice through one radius of the circle as shown and let the rings flop out, we can see that each ring is like a tiny rectangle with a height equal to the circumference of the circle at that radius and a width equal to the thickness of the ring. The area of each ring can be approximated as the circumference times the width, as shown in the figure below.  (Placeholder for figure showing rings)  As we make the rings thinner and thinner, we can see that the shape we get is looking more and more like a triangle:  (Placeholder for figure showing rings approximating a triangle)  Now here's the key insight: what if we had an infinite number of these infinitesimally thin rings? In this case, the shape we get would be indistinguishable from a triangle, and we could use the formula for the area of a triangle to find the area of the circle. The area of a triangle is given by: Here, the base is the circumference of the circle (which is ) and the height is the radius ( ). So we can write the area of the circle as: This is exactly the formula we know!  Now, while this gave the answer we expected, there are some important questions that we can raise:  How do we know that the area of the circle is actually equal to the area of this triangle?  What happens if we try to apply this reasoning to other shapes?  How can we formalize this idea of adding up infinitely many tiny pieces?  If you're a bit skeptical about this reasoning, that's a good thing! The goal of calculus is to provide a rigorous framework for answering these questions.  "
},
{
  "id": "welcome-reading-questions",
  "level": "1",
  "url": "welcome-reading-questions.html",
  "type": "Reading Questions",
  "number": "1.3",
  "title": "Check your understanding",
  "body": " Check your understanding  (These are just placeholders for now)   What is the main idea behind calculus?  Calculus allows us to understand and describe change by breaking things into infinitesimally small pieces, enabling us to apply familiar geometric concepts to more complex shapes and processes.    How does the area of a circle relate to the concept of infinitesimals?  The area of a circle can be understood by approximating it as an infinite number of infinitesimally thin rings, which can be summed to yield the familiar formula for the area of a circle.    Why is it important to question the reasoning behind familiar formulas in calculus?  Questioning the reasoning helps us develop a deeper understanding of the concepts and ensures that we can apply calculus rigorously to various shapes and processes.   "
},
{
  "id": "welcome-reading-questions-3",
  "level": "2",
  "url": "welcome-reading-questions.html#welcome-reading-questions-3",
  "type": "Reading Question",
  "number": "1.3.1",
  "title": "",
  "body": " What is the main idea behind calculus?  Calculus allows us to understand and describe change by breaking things into infinitesimally small pieces, enabling us to apply familiar geometric concepts to more complex shapes and processes.  "
},
{
  "id": "welcome-reading-questions-4",
  "level": "2",
  "url": "welcome-reading-questions.html#welcome-reading-questions-4",
  "type": "Reading Question",
  "number": "1.3.2",
  "title": "",
  "body": " How does the area of a circle relate to the concept of infinitesimals?  The area of a circle can be understood by approximating it as an infinite number of infinitesimally thin rings, which can be summed to yield the familiar formula for the area of a circle.  "
},
{
  "id": "welcome-reading-questions-5",
  "level": "2",
  "url": "welcome-reading-questions.html#welcome-reading-questions-5",
  "type": "Reading Question",
  "number": "1.3.3",
  "title": "",
  "body": " Why is it important to question the reasoning behind familiar formulas in calculus?  Questioning the reasoning helps us develop a deeper understanding of the concepts and ensures that we can apply calculus rigorously to various shapes and processes.  "
},
{
  "id": "welcome-exercises",
  "level": "1",
  "url": "welcome-exercises.html",
  "type": "Exercises",
  "number": "1.4",
  "title": "Exercises",
  "body": " Exercises   Suppose we break up the circle in a different way, say into equal sectors. We then arrange them in an alternating pattern. The case where is shown below.   Sketch the arrangement for .  What happens as increases?  What if we were to let approach infinity? What shape do you think we would get?  How does the case of infinitely many infinitely thin sectors give us the area of the circle?     "
},
{
  "id": "welcome-exercises-2",
  "level": "2",
  "url": "welcome-exercises.html#welcome-exercises-2",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": " Suppose we break up the circle in a different way, say into equal sectors. We then arrange them in an alternating pattern. The case where is shown below.   Sketch the arrangement for .  What happens as increases?  What if we were to let approach infinity? What shape do you think we would get?  How does the case of infinitely many infinitely thin sectors give us the area of the circle?    "
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
