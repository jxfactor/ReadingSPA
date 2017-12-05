<template>

  <div id="article" v-html="this.details[$route.params.id].html">
    
  </div>
</template>

<script>
	export default {
		computed : {
			details() {
				return this.$store.state.detail_List
			}
		}
	}
</script>
