const QUESTIONS_DATA = [
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
    "question": "What's the value order of single-declarations for the <code>margin</code> and <code>padding</code> properties, e.g. <code>margin: 20px 10px 30px 40px</code>.",
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
      "<code>padding</code> specifies the space between the content area and the border.",
      "<code>border</code> specifies the area between the padding on the inside and margin on the outside.",
      "<code>margin</code> specifies the space outside the border.",
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
      "<code>box-sizing: border-box</code> includes border and padding in the overall dimensions of the box and prevents them from affecting its size.",
      "<code>box-sizing: border-box</code> automatically adjusts the content area based on the remaining size, after subtracting border and padding.",
      "The default is <code>box-sizing: content-box</code>, which doesn't include border and padding in the element's total width and height.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "Which is true about the difference between <code>position: relative</code> and <code>position: absolute</code>?",
    "answers": [
      "<code>position: relative</code> positions an element relative to its default static position (relative to where it normally would have been).",
      "An element set to <code>position: absolute</code> will be ignored by other elements on the page (removed from the page flow).",
      "<code>position: absolute</code> positions an element relative to the last positioned parent element (or body if there are none).",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "What's the difference between an <code>id</code> and a <code>class</code>?",
    "answers": [
      "An <code>id</code> is unique and is used on one element; a <code>class</code> can be used on many elements.",
      "An <code>id</code> has higher specificity than a <code>class</code>.",
      "More than one <code>class</code> can be used for an element.",
      "All of the above."
    ],
    "correct": 3
  },
  {
    "question": "If an element is NOT affected by the <code>top</code>, <code>left</code>, <code>right</code>, or <code>bottom</code> properties, what is the <code>position</code> property set to?",
    "answers": [
      "<code>position: absolute</code>",
      "<code>position: static</code>",
      "<code>position: fixed</code>",
      "<code>position: relative</code>"
    ],
    "correct": 1
  }
];

export default QUESTIONS_DATA;
