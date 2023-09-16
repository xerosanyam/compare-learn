<template>
  <div class="fixed w-40 h-full overflow-auto bg-white">
    <a class="p-2 text-white bg-black cursor-pointer" href="/"
      >Compare & Learn</a
    >
    <ul class="p-4">
      <li v-for="topic in pages" :key="topic" class="text-xs list-disc">
        <nuxt-link :to="{ hash: '#' + topic }">{{ topic }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['pages'],
}
</script>
