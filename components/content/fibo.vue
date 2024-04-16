<template>
  <div>
    <span>Enter num here:</span
    ><input
      v-model="num"
      class="mx-2 border px-1"
      type="number"
      placeholder="Enter a num"
      @keyup.enter="calculateFiboMemo"
    />
    <div class="m-2">
      <button
        class="p-2 bg-gray-200 text-base text-gray-800 rounded"
        @click="calculateFibo"
      >
        Calculate
      </button>
      <button
        class="p-2 bg-gray-200 text-base text-gray-800 rounded"
        @click="calculateFiboMemo"
      >
        Calculate using Memoized
      </button>
    </div>
    <div>Result: {{ result }}</div>
    <div>
      Time to Calculate: {{ timeToCalculate }}
      <div v-if="cached">Cached Result</div>
    </div>
  </div>
</template>
<script>
import { fibo, fiboMemorizer } from '../../assets/arithmetic'
export default {
  data() {
    return {
      num: 0,
      result: 0,
      timeToCalculate: 0,
      cached: false,
    }
  },
  methods: {
    calculateFibo() {
      const t0 = performance.now()
      this.result = fibo(this.num)
      const t1 = performance.now()
      this.timeToCalculate = t1 - t0
      this.cached = false
    },
    calculateFiboMemo() {
      const t0 = performance.now()
      const result = fiboMemorizer(this.num)
      this.result = result[0]
      this.cached = !!result[1]
      const t1 = performance.now()
      this.timeToCalculate = t1 - t0
    },
  },
}
</script>
