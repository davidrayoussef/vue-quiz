import Vue from 'vue';
import QUESTIONS from './data/quiz-data';
const { shuffle } = require('funcifyr');

shuffle(QUESTIONS);

new Vue({
  el: '#app',
  data: {
    questions: QUESTIONS,
    step: 0,
    userResponses: Array(QUESTIONS.length)
  },
  methods: {
    next() {
      this.step++;
    },
    getScore() {
      return this.userResponses.filter(v => v === true).length;
    }
  }
});
