<template>
  <header>
    <h1>CSS Quiz</h1>
    <p v-if="step < questions.length">Question <span>{{ ~~step + 1 }}</span> of <span>{{ questions.length }}</span></p>
  </header>
</template>

<script>
export default {
  props: ['questions', 'step']
}
</script>
