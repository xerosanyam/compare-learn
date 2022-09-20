<template>
  <button class="p-2 bg-gray-300" @click="block">Block Call Stack</button>
</template>
<script>
export default {
  methods: {
    block() {
      alert('blocking for 5s')
      const time = new Date()
      while (time > new Date() - 5000) {}
      alert('unblocked')
    },
  },
}
</script>
