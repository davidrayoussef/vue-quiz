const QUESTIONS = [
  {
    "question":"What's the difference between <code>grid</code> and <code>flexbox</code>?",
    "answers": [
      "<code>flexbox</code> is used for laying out items in a single dimension; a row OR a column.",
      "<code>grid</code> is for the layout of items in two dimensions; rows AND columns.",
      "<code>flexbox</code> is better for positioning elements within a block, while <code>grid</code> is better for laying out the main components of a page.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "Which of the following is used to make a website responsive?",
    "answers": [
      "Media queries.",
      "Flexible units like percent, vw, vh, em, rem.",
      "CSS features like <code>grid</code> and <code>flexbox</code>.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "How does the browser read CSS selectors?",
    "answers": [
      "Left to right.",
      "Right to left.",
      "Diagonally.",
      "None of the above."
    ],
    "correct": 1
  },
  {
    "question": "What's the order of specificity from highest to least?",
    "answers": [
      "<code>#id</code> > <code>!important</code> > <code>.class</code> > <code>tag</code>",
      "<code>#id</code> > <code>.class</code> > <code>tag</code> > <code>!important</code>",
      "<code>!important</code> > <code>#id</code> > <code>.class</code> > <code>tag</code>",
      "None of the above."
    ],
    "correct": 2
  },
  {
    "question": "Why would you use the <code>z-index</code> property?",
    "answers": [
      "To move an element from the right to the left.",
      "To move an overlapped element from the back to the front.",
      "To move an element from the top of the page to the bottom of the page.",
      "To change an element's width and height."
    ],
    "correct": 1
  },
  {
    "question": "What's the value order of single-declarations for the margin and padding properties, e.g. <code>margin: 20px 10px 30px 40px</code>.",
    "answers": [
      "Left Right Top Bottom",
      "Top Left Right Bottom",
      "Top Right Bottom Left",
      "None of the above."
    ],
    "correct": 2
  },
  {
    "question": "What are the four properties of the Box Model?",
    "answers": [
      "Width, height, padding, margins",
      "Horizontal margins, vertical margins, horizontal padding, vertical padding",
      "Content (width and height), padding, borders, margins",
      "None of the above."
    ],
    "correct": 2
  },
  {
    "question": "Which of the following is TRUE about the Box Model?",
    "answers": [
      "Padding specifies the space between the content area and the border.",
      "Border specifies the area between the padding on the inside and margin on the outside.",
      "Margin specifies the space outside the border.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "Which of the following will target a <code>p</code> tag inside a <code>div</code> ONLY if it's an immediate child?",
    "answers": [
      "<code>div p</code>",
      "<code>div > p</code>",
      "<code>div + p</code>",
      "<code>div ~ p</code>"
    ],
    "correct": 1
  },
  {
    "question": "Which of the following is true about the <code>box-sizing</code> property?",
    "answers": [
      "<code>box-sizing: border-box</code> includes border thickness and padding in the overall dimensions of the box; it prevents border and padding from affecting the size.",
      "<code>box-sizing: border-box</code> automatically adjusts the content area based on the remaining width, after subtracting border and padding.",
      "The default is <code>box-sizing: content-box</code>, which ?????",
      "All of the above. // Test this out in the browser"
    ],
    "correct": 3
  },
  {
    "question": "Which is true about the difference between <code>position: relative</code> and <code>position: absolute</code>?",
    "answers": [
      "<code>position: relative</code> positions an element relative to its default static position (relative to where it normally would have been).",
      "An element set to <code>absolute</code> will be ignored by other elements on the page (removed from the page flow).",
      "<code>position: absolute</code> positions an element relative to the last positioned parent element (or body if there are none).",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "What's the difference between an <code>id</code> and a <code>class</code>?",
    "answers": [
      "An <code>id</code> is unique and is used on one element; a <code>class</code> can be used on many elements.",
      "ids have higher specificity than classes.",
      "More than one <code>class</code> can be used for an element.",
      "All of the above."
    ],
    "correct": 3
  }
];

//
// What's the difference between display: none and visibility: hidden?
// An element with display: none will be completely removed from the web page.
// An element with visibility: hidden will not be visible on the web page, but the space occupied by it will.
// They both remove an element from the DOM.
//
//
// Which properties are used to affect the positioning of elements in the browser?
// position display z-index float and clear
// something something transition something
// something something visibility
// Only JavaScript allows you to affect positioning.
//
// What are the four position properties for block? elements?
// static relative absolute and fixed
//
// What's an instance where you would use the calc() function
//
// Which of the following is an example of the BEM pattern?
//
// performance in animations ... transform vs ?
//
// How do you center a div within a div in JavaScript?
// margin: 0 auto; in the containing elements
// display: flex; align-items center; on the parent element

export default QUESTIONS;
