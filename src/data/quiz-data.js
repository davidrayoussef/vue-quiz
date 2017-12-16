const QUESTIONS = [
  {
    "question":"What's the difference between grid and flexbox?",
    "answers": [
      "Flexbox is used for laying out items in a single dimension; a row OR a column.",
      "Grid is for the layout of items in two dimensions; rows AND columns.",
      "Flexbox is better for positioning elements within a block, while grid is better for laying out the main components of a page.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "Which of the following is used to make a website responsive?",
    "answers": [
      "Media queries.",
      "Flexible units like percent, vw, vh, em, rem.",
      "CSS features like grid and flexbox.",
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
    "question": "What is the order of specificity from highest to least?",
    "answers": [
      "#id > !important > .class > tag",
      "#id > .class > tag > !important",
      "!important > #id > .class > tag",
      "None of the above."
    ],
    "correct": 2
  },
  {
    "question": "Why would you use the z-index property?",
    "answers": [
      "To move an element from the right to the left.",
      "To move an overlapped element from the back to the front.",
      "To move an element from the top of the page to the bottom of the page.",
      "To change an element's width and height."
    ],
    "correct": 1
  },
  {
    "question": "What's the value order of single-declarations for the margin and padding properties, e.g. margin: 20px 10px 30px 40px.",
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
    "question": "Which of the following will target a paragraph tag inside a div ONLY if it's an immediate child?",
    "answers": [
      "div p",
      "div > p",
      "div + p",
      "div ~ p"
    ],
    "correct": 1
  },
  {
    "question": "Which of the following is true about the box-sizing property?",
    "answers": [
      "box-sizing: border-box includes border thickness and padding in the overall dimensions of the box; it prevents border and padding from affecting the size.",
      "box-sizing: border-box automatically adjusts the content area based on the remaining width, after subtracting border and padding.",
      "The default is box-sizing: content-box, which ?????",
      "All of the above. // Test this out in the browser"
    ],
    "correct": 3
  },
  {
    "question": "Which is true about the difference between position: relative and position: absolute?",
    "answers": [
      "position: relative positions an element relative to its default static position (relative to where it normally would have been).",
      "An element set to absolute will be ignored by other elements on the page (removed from the page flow).",
      "position: absolute positions an element relative to the last positioned parent element (or body if there are none).",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "What's the difference between an ID and a class?",
    "answers": [
      "An ID is unique and is used on one element; a class can be used on many elements.",
      "IDs have higher specificity than classes.",
      "More than one class can be used for an element.",
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
