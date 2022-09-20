<template>
  <div>
    <Toc :pages="pages" />
    <div class="max-w-5xl px-4 pt-4 pb-64 mx-auto prose-sm prose">
      <div class="flex">
        <div
          v-for="item in folderToLoad"
          :key="item.path"
          class="w-full text-2xl font-bold text-center"
        >
          {{ item.name }}
        </div>
      </div>
      <div v-for="page in pages" :key="page" class="pb-8 border-b">
        <div class="flex flex-row space-x-8 sm:space-x-32">
          <div
            v-for="item in folderToLoad"
            :key="item.path"
            class="flex-1 overflow-hidden"
          >
            <nuxt-content
              v-if="page in item.items"
              class="flex-1 overflow-hidden"
              :document="item.items[page]"
            />
            <div v-else class="flex items-center justify-center flex-1 h-40">
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
    const folderToLoad = [
      {
        path: 'concurrency/javascript',
        name: 'Javascript',
        items: {},
      },
    ]
    let allPages = []
    for (const item of folderToLoad) {
      // folderToLoad.forEach(async (item) => {
      const data = await $content(item.path)
        .fetch()
        .catch((err) => {
          console.log('asyncData -> err', err)
          error({ statusCode: 404, message: 'Page not found' })
        })
      data.forEach((blog) => {
        item.items[blog.slug] = blog
      })
      console.log('asyncData -> item.path', data)
      allPages = [...allPages, ...data]
    }

    allPages.sort((page1, page2) => page1.slug - page2.slug)

    // console.log('asyncData -> pages', allPages)
    const pages = []

    for (const page of allPages) {
      if (!pages.includes(page.slug)) {
        pages.push(page.slug)
      }
    }

    return {
      folderToLoad,
      pages,
    }
  },
}
</script>
