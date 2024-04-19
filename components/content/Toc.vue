<template>
  <div class="h-full border">
    <div class="sticky top-0 w-40 overflow-auto ">
      <ul class="p-4">
        <li v-for="topic in pages" :key="topic" class="text-xs list-disc">
          <nuxt-link :to="{ hash: '#' + topic }">{{ topic }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['pages'],
}
</script>
