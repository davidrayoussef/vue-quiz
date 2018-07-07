<template>
  <div id="app">
    <app-header
      :questions="questions"
      :step="step"
    >
    </app-header>
    <questions
      :questions="questions"
      :step="step"
      :userResponses="userResponses"
      :getScore="getScore"
      :enter="handleEnterPress"
    >
    </questions>
    <app-footer
      :questions="questions"
      :step="step"
      :userResponses="userResponses"
      :submit="handleSubmit"
      :next="next"
    >
    </app-footer>
  </div>
</template>

<script>
import QuestionsComponent from './components/Questions.vue';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
import QUESTIONS_DATA from './data/quiz-data';
import './style.css';
const { shuffle } = require('funcifyr');

const TEN_QUESTIONS = shuffle(QUESTIONS_DATA).slice(0, 10);

export default {
  data() {
    return {
      questions: TEN_QUESTIONS,
      step: 0,
      userResponses: Array(TEN_QUESTIONS.length)
    }
  },
  components: {
    'app-header': HeaderComponent,
    'questions': QuestionsComponent,
    'app-footer': FooterComponent
  },
  methods: {
    handleSubmit(e) {
      const { userResponses, step } = this.$data;

      e.target.disabled = true;

      if ( userResponses[~~step] === true ) {
        document.querySelector('.mark-correct').classList.add('correct');
      }
      else {
        document.getElementById('s' + ~~step).querySelector('input:checked').parentNode.classList.add('incorrect');
      }

      setTimeout(() => {
        this.step += .5;
      }, 950);
    },

    handleEnterPress(e) {
      e.target.querySelector('input').click();
    },

    next() {
      this.step += .5;
    },

    getScore() {
      return this.userResponses.filter(v => v === true).length;
    }
  }
};
</script>
