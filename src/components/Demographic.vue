<template>
	<div class="container">
		<div v-if="$route.params.tag == 'gender'" class="gender">
			<p>请选择您的姓名？</p>
			<button class="btn btn-primary" @click="pressOK ($route.params.tag, 1)">男</button>
			<button class="btn btn-primary" @click="pressOK ($route.params.tag, 0)">女</button>
		</div>
		
		<div v-if="$route.params.tag == 'age'" class="age">
			<p>请选择您的年龄？</p>
			<button class="btn btn-primary" @click="pressOK ($route.params.tag, 1)">好</button>
		</div>

		<div v-if="$route.params.tag == 'reading-time'" class="reading-time">
			<p>请选择您每天花在移动设备上的阅读时间？</p>
			<button class="btn btn-primary" @click="pressOK ($route.params.tag, 1)">好</button>
		</div>
	</div>
</template>

<script>
	export default {
		methods : {
			pressOK (tag, val) {
				if (tag == 'gender') {
					this.$store.state.tempGender = val
					this.$router.push({name: 'demographic', params: {tag: 'age'}})
				} 
				else if (tag == 'age') {
					this.$store.state.tempVal = val
					this.$router.push({name: 'demographic', params: {tag: 'reading-time'}})
				}
				else if (tag == 'reading-time') {
					this.$store.state.tempReadingTime = val
					this.$router.push({name: 'list'})
				}
			}
		}
	}
</script>
