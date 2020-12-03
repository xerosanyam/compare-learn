<template>
  <div class="prose prose-sm max-w-5xl mx-auto pt-4 pb-64 px-4">
    <div class="flex">
      <div class="w-full">
        <ul>
          <li v-for="topic in pages" :key="topic">
            <nuxt-link :to="{ hash: '#' + topic }">{{ topic }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="w-full font-bold text-2xl text-center">Java</div>
      <div class="w-full font-bold text-2xl text-center">Javascript</div>
    </div>
    <div class="w-full">
      <div class="w-1/6">Hello</div>
      <div class="w-5/6">
        <div v-for="page in pages" :key="page" class="border-b pb-8">
          <div class="flex flex-row space-x-8 sm:space-x-32">
            <nuxt-content
              v-if="javaPages[page]"
              class="flex-1 overflow-hidden"
              :document="javaPages[page]"
            />
            <div v-else class="flex-1 flex items-center justify-center h-40">
              <div>&nbsp;</div>
            </div>
            <nuxt-content
              v-if="jsPages[page]"
              :id="page"
              class="flex-1 overflow-hidden"
              :document="jsPages[page]"
            />
            <div
              v-else
              :id="page"
              class="flex-1 flex items-center justify-center h-40"
            >
              <div>&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let javaPages = await $content('programming-languages/java')
      .fetch()
      .catch((err) => {
        console.log('asyncData -> err', err)
        error({ statusCode: 404, message: 'Page not found' })
      })
    console.log('asyncData -> javaPages', javaPages)

    let jsPages = await $content('programming-languages/js')
      .fetch()
      .catch((err) => {
        console.log('asyncData -> err', err)
        error({ statusCode: 404, message: 'Page not found' })
      })
    console.log('asyncData -> jsPages', jsPages)

    const allPages = [...javaPages, ...jsPages]
    console.log('asyncData -> pages', allPages)
    allPages.sort(
      (page1, page2) => new Date(page1.createdAt) - new Date(page2.createdAt)
    )
    console.log('asyncData -> pages', allPages)
    const pages = []

    for (const page of allPages) {
      if (!pages.includes(page.slug)) {
        pages.push(page.slug)
      }
    }

    console.log('asyncData -> pages', pages)

    javaPages = javaPages.reduce((result, item, index) => {
      result[item.slug] = item
      return result
    }, {})

    jsPages = jsPages.reduce((result, item, index) => {
      result[item.slug] = item
      return result
    }, {})

    return {
      javaPages,
      jsPages,
      pages,
    }
  },
}
</script>
