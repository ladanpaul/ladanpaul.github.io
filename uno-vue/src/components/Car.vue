<template>
  <div>
    <div class="car">
      <h3> Name: {{ carName }} \ {{ reverseName }}</h3>
      <p> Year: {{ carYear }} </p>
      <button @click="changeFromParent()" >Change from Parent</button>
      <button @click="changeName">Change car name</button>
      <button @click="updateCounter">Update Counter</button>
    </div>
  </div>
</template>

<script>
import {eventEmitter} from '../main'

export default {
  // props: ["carName", "carYear"],
  props: {
    carName: {
      type: String,
      required: true,
      default: 'Default name',
    },
    carYear: Number,
    changeFromParent: Function,
  },
  data() {
    return {
      number: 1,
    }
  },
  methods: {
    changeName() {
      this.newCarName = 'Lexus IS250'
      this.$emit('changedCarName', this.newCarName)
    },
    updateCounter() {
      eventEmitter.$emit('updatedCounter', this.number ++)
    }
  },
  computed: {
    reverseName() {
      return this.carName.split('').reverse().join('');
    }
  }
}
</script>

<style scoped>
  .car {
    border: 2px solid orange;
  }
</style>

