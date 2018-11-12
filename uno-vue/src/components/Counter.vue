<template>
  <h1>
    {{ counter }}
  </h1>
</template>

<script>
import {eventEmitter} from '../main'

export default {
  data() {
    return {
      counter: 0,
    }
  },
  created() {
    eventEmitter.$on('updatedCounter', (e) => {
      this.counter = e
    })
  }
}
</script>


