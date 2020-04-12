<template>
	<h1>Commit v-node without slot</h1>
</template>

<script>
	export default {
		mounted()
		{
			this.$store.commit('COMMIT_VNODE', {vnode: this})
		},
	}
</script>