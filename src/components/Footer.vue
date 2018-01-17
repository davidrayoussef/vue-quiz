<template>
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
</template>

<script>
export default {
  props: ['questions', 'step', 'userResponses', 'submit', 'next']
}
</script>
