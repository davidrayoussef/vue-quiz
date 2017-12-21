<template>
  <div id="app">
    <header>
      <h1>CSS Quiz</h1>
      <p v-if="step < questions.length">Question <span>{{ ~~step + 1 }}</span> of <span>{{ questions.length }}</span></p>
    </header>
    <section
      :id="'s' + qIndex"
      v-for="(question, qIndex) in questions"
      v-if="qIndex === step">
      <h2>
        <p class="question" v-html="question.question"></p>
      </h2>
      <ol>
        <li v-for="(answer, aIndex) in question.answers" :class="{ 'mark-correct': question.correct === aIndex && qIndex === step }">
          <input
            type="radio"
            :id="'i' + qIndex + aIndex"
            :value="question.correct === aIndex ? true : aIndex"
            :name="qIndex"
            v-model="userResponses[qIndex]">
          <label :for="'i' + qIndex + aIndex" v-html="answer"></label>
        </li>
      </ol>
    </section>
    <section class="results" v-for="(result, rIndex) in questions" v-if="rIndex + .5 === step">
      <h2><p class="question" v-html="result.question"></p></h2>
      <ol>
        <li
          v-for="(answer, aIndex) in result.answers"
          :class="{ visible: result.answers[result.correct] === 'All of the above.' ? true : result.correct === aIndex }">
          <p v-html="answer"></p>
        </li>
      </ol>
    </section>
    <section v-if="step === questions.length" class="total-results">
      <h2>Quiz results</h2>
      <p>
        Total score: <span>{{ getScore() }}</span> of <span>{{ questions.length }}</span>
      </p>
    </section>
    <footer>
      <button
        class="submit"
        :disabled="userResponses[step] === undefined"
        v-if="~~step === step && step < questions.length"
        @click="submit">
        SUBMIT
      </button>
      <button
        class="next"
        v-if="~~step !== step"
        @click="next">
        NEXT
      </button>
    </footer>
  </div>
</template>

<script>
import QUESTIONS from './data/quiz-data';
import './style.css';
const { shuffle } = require('funcifyr');

const TEN_QUESTIONS = shuffle(QUESTIONS).slice(0, 10);

export default {
  name: 'app',
  data() {
    return {
      questions: TEN_QUESTIONS,
      step: 0,
      userResponses: Array(TEN_QUESTIONS.length)
    }
  },
  methods: {
    submit(event) {
      const { userResponses, step } = this.$data;

      event.target.disabled = true;

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

    next() {
      this.step += .5;
    },

    getScore() {
      return this.userResponses.filter(v => v === true).length;
    }
  }
};
</script>
