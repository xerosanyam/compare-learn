<template>
  <div class="fixed w-40 p-4 bg-white">
    <ul>
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
