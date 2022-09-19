<template>
  <div>
    <Toc :pages="pages" />
    <div class="max-w-5xl px-4 pt-4 pb-64 mx-auto prose-sm prose">
      <div class="flex">
        <div class="w-full text-2xl font-bold text-center">Object</div>
        <div class="w-full text-2xl font-bold text-center">Functional</div>
      </div>
      <div v-for="page in pages" :key="page" class="pb-8 border-b">
        <div class="flex flex-row space-x-8 sm:space-x-32">
          <nuxt-content
            v-if="javaPages[page]"
            :id="page"
            class="flex-1 overflow-hidden"
            :document="javaPages[page]"
          />
          <div
            v-else
            :id="page"
            class="flex items-center justify-center flex-1 h-40"
          >
            <div>&nbsp;</div>
          </div>
          <nuxt-content
            v-if="jsPages[page]"
            class="flex-1 overflow-hidden"
            :document="jsPages[page]"
          />
          <div v-else class="flex items-center justify-center flex-1 h-40">
            <div>&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let javaPages = await $content('computer-science/paradigms/object')
      .fetch()
      .catch((err) => {
        console.log('asyncData -> err', err)
        error({ statusCode: 404, message: 'Page not found' })
      })
    console.log('asyncData -> javaPages', javaPages)

    let jsPages = await $content('computer-science/paradigms/functional')
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
