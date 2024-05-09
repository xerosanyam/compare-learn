<template>
	<div class="max-w-full pb-64 mx-auto prose-sm prose">
		<div class="flex">
			<div class="max-w-40">
				<Toc :pages="pages" />
			</div>
			<div class="w-5/6 p-2">
				<div class="flex">
					<div class="w-full text-2xl font-bold text-center">{{ topic1?.topic }}</div>
					<div class="w-full text-2xl font-bold text-center">{{ topic2?.topic }}</div>
				</div>
				<div v-for="page in pages" :key="page" class="pb-8 border-b">
					<div class="flex flex-row space-x-8 sm:space-x-32">
						<ContentDoc v-if="data1 && data1[page]" class="flex-1 overflow-hidden" :path="data1[page]._path" />
						<div v-else class="flex items-center justify-center flex-1 h-40">
							<div>&nbsp;</div>
						</div>
						<ContentDoc v-if="data2 && data2[page]" :id="page" class="flex-1 overflow-hidden"
							:path="data2[page]._path" />
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

const props = defineProps({
	topic1: Object,
	topic2: Object
})

let { data: data1 } = await useAsyncData('topic1', () => queryContent(props.topic1.path).find())
let { data: data2 } = await useAsyncData('topic2', () => queryContent(props.topic2.path).find())

const allPages = [...(data1?.value||[]), ...(data2?.value || [])];

const getSlug = (path) => {
	return path?.split('/').pop()
}
const pages = []
for (const page of allPages) {
	if (!pages.includes(getSlug(page._path))) {
		pages.push(getSlug(page._path))
	}
}

data1 = data1?.value?.reduce((result, item) => {
	result[getSlug(item._path)] = item
	return result
}, {})
data2 = data2?.value?.reduce((result, item) => {
	result[getSlug(item._path)] = item
	return result
}, {})
</script>
