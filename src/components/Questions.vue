<template>
  <div>
    <section
      v-if="qIndex === step"
      :id="'s' + qIndex"
      v-for="(question, qIndex) in questions">
      <h2>
        <p v-html="question.question"></p>
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
    <section
      v-if="rIndex + .5 === step"
      class="results"
      v-for="(result, rIndex) in questions">
      <h2>
        <p class="results-question" v-html="result.question"></p>
      </h2>
      <ol>
        <li
          v-for="(answer, aIndex) in result.answers"
          :class="{ 'correct-result': result.correct === aIndex }">
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
  </div>
</template>

<script>
export default {
  props: ['questions', 'step', 'userResponses', 'getScore']
}
</script>
