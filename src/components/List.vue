<template>
	<div class="container">
		<p v-if="!documents.length">
			<strong>
			还没有任何文章
			</strong>
		</p>
		<div>
			<a v-for="(document, index) in documents" @click="displayDetails(index)">							
				<div>
					<img :src="document.image" class="img-responsive" />
				</div>
				<div>
					<p class="text-center">
					{{ document.name }}
					</p>
				</div>								
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		computed : {
			documents() {
				return this.$store.state.list
			}
		}, 
		methods : {
			displayDetails (index) {				
				this.$router.push({name: 'document', params: {id: index}})
			}
		}
	}
</script>
