<template>
  <div>
    <h1>
      Parent: {{ carName }}
    </h1>

    <app-car
      :carName="carName"
      :carYear="carYear"
      >
    </app-car>
  </div>
</template>

<script>
import Car from './Car.vue'

export default {
  data () {
    return {
      carName: 'Bla bla bla',
      carYear: 2018,
    }
  },
  components: {
    appCar: Car,
  }
}
</script>

<style>

</style>
