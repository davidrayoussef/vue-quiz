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
    submit() {
      const { userResponses, step } = this.$data;

      if ( userResponses[~~step] === true ) {
        document.querySelector('.markCorrect').classList.add('correct');
      }
      else {
        document.getElementById('s' + ~~step).querySelector('input:checked').parentNode.classList.add('incorrect');
      }

      setTimeout(() => {
        this.step += .5;
      }, 950);
    },

    next() {
      this.step += .5;
    },

    getScore() {
      return this.userResponses.filter(v => v === true).length;
    }
  }
});
