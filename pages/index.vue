<template>
  <div class="prose prose-sm max-w-5xl mx-auto pt-4 pb-64">
    <div class="fixed top-0 right-0">
      <ul>
        <li v-for="topic in pages" :key="topic">
          <a :href="'#' + topic">{{ topic }}</a>
        </li>
      </ul>
    </div>
    <div class="flex mb-4">
      <div class="w-full font-bold text-xl text-center">Java</div>
      <div class="w-full font-bold text-xl text-center">Javascript</div>
    </div>
    <div v-for="page in pages" :key="page" class="border-b pb-8">
      <div class="flex flex-row space-x-32">
        <nuxt-content
          v-if="javaPages[page]"
          :id="page"
          class="flex-1 overflow-hidden"
          :document="javaPages[page]"
        />
        <div
          v-else
          :id="page"
          class="flex-1 flex items-center justify-center h-40"
        >
          <div>&nbsp;</div>
        </div>
        <nuxt-content
          v-if="jsPages[page]"
          class="flex-1 overflow-hidden"
          :document="jsPages[page]"
        />
        <div v-else class="flex-1 flex items-center justify-center h-40">
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let javaPages = await $content('java')
      .fetch()
      .catch((err) => {
        console.log('asyncData -> err', err)
        error({ statusCode: 404, message: 'Page not found' })
      })
    console.log('asyncData -> javaPages', javaPages)

    let jsPages = await $content('js')
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
