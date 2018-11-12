<template>
  <div>
    <h1 class="car">
      Parent: {{ carName }}
    </h1>

    <app-counter>
    </app-counter>

    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeFromParent="changeNameToHonda"
      @changedCarName="carName = $event"
    >
    </app-car>
  </div>
</template>

<script>
import Car from './components/Car.vue'
import Counter from './components/Counter.vue'

export default { 
  data() {
    return {
      carName: 'Lexus',
      carYear: 2008,
    }
  },
  methods: {
    changeNameToHonda() {
      this.carName = 'Honda Acord'
    }
  },
  components: {
    AppCar: Car,
    AppCounter: Counter,
  }
}
</script>

<style scoped>
  .car {
    border: 2px solid blue;
  }
</style>
