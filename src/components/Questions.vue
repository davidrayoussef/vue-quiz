<template>
  <div>

    <!-- QUESTION VIEW -->
    <section
      v-if="qIndex === step"
      :key="'s' + qIndex"
      :id="'s' + qIndex"
      v-for="(question, qIndex) in questions"
    >
      <h2 tabindex="0">
        <p v-html="question.question"></p>
      </h2>
      <ol>
        <li 
          :key="'i' + qIndex + aIndex"
          :class="{ 'mark-correct': question.correct === aIndex && qIndex === step }"
          tabindex="0"
          @keyup.enter="enter"
          v-for="(answer, aIndex) in question.answers" 
        >
          <input
            type="radio"
            :id="'i' + qIndex + aIndex"
            :value="question.correct === aIndex ? true : aIndex"
            :name="qIndex"
            v-model="userResponses[qIndex]"
          >
          <label :for="'i' + qIndex + aIndex" v-html="answer"></label>
        </li>
      </ol>
    </section>

    <!-- QUESTION RESULT VIEW -->
    <section
      v-if="rIndex + .5 === step"
      :key="rIndex"
      class="results"
      v-for="(result, rIndex) in questions"
    >
      <h2>
        <p class="results-question" v-html="result.question"></p>
      </h2>
      <ol>
        <li
          :key="answer"
          :class="{ 'correct-result': result.correct === aIndex }"
          v-for="(answer, aIndex) in result.answers"
        >
          <p v-html="answer"></p>
        </li>
      </ol>
    </section>

    <!-- TOTAL RESULT VIEW -->
    <section 
      v-if="step === questions.length" 
      class="total-results"
      tabindex="0"       
    >
      <h2>Quiz results</h2>
      <p>
        Total score: <span>{{ getScore() }}</span> of <span>{{ questions.length }}</span>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  props: ['questions', 'step', 'userResponses', 'getScore', 'enter']
}
</script>
