<template>
  <div>
    <Toc :pages="pages" />
    <div class="max-w-5xl px-4 pt-4 pb-64 pl-4 mx-auto prose-sm prose">
      <div class="flex">
        <div class="w-full text-2xl font-bold text-center">Java</div>
        <div class="w-full text-2xl font-bold text-center">Javascript</div>
      </div>
      <div class="w-full">
        <div v-for="page in pages" :key="page" class="pb-8 border-b">
          <div class="flex flex-row space-x-8 sm:space-x-32">
            <ContentDoc v-if="javaPages[page]" class="flex-1 overflow-hidden" :path="javaPages[page]._path" />
            <div v-else class="flex items-center justify-center flex-1 h-40">
              <div>&nbsp;</div>
            </div>
            <ContentDoc v-if="jsPages[page]" :id="page" class="flex-1 overflow-hidden" :path="jsPages[page]._path" />
            <div v-else :id="page" class="flex items-center justify-center flex-1 h-40">
              <div>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>


let { data: javaPages } = await useAsyncData('js', () => queryContent('/programming-languages/java').find())

let { data: jsPages } = await useAsyncData('js', () => queryContent('/programming-languages/js').find())

const allPages = [...javaPages.value, ...jsPages.value]

const getSlug = (path) => {
  return path?.split('/').pop()
}
const pages = []
for (const page of allPages) {
  if (!pages.includes(getSlug(page._path))) {
    pages.push(getSlug(page._path))
  }
}

javaPages = javaPages.value.reduce((result, item) => {
  result[getSlug(item._path)] = item
  return result
}, {})
jsPages = jsPages.value.reduce((result, item) => {
  result[getSlug(item._path)] = item
  return result
}, {})
</script>
