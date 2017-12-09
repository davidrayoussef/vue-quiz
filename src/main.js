import Vue from 'vue';
import QUESTIONS from './data/quiz-data';
const { shuffle } = require('funcifyr');

const TEN_QUESTIONS = shuffle(QUESTIONS).slice(0, 10);

new Vue({
  el: '#app',
  data: {
    questions: TEN_QUESTIONS,
    step: 0,
    userResponses: Array(TEN_QUESTIONS.length)
  },
  methods: {
    next() {
      const { userResponses, step } = this.$data;
      console.log(userResponses[~~step]);
      this.step += .5;
    },
    getScore() {
      return this.userResponses.filter(v => v === true).length;
    }
  }
});
