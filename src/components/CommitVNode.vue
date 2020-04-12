<script>
	export default {
		mounted()
		{
			this.$store.commit('COMMIT_VNODE', {vnode: this.$slots.default})
		},

		render(createElement, hack)
		{
			return '';
		}
	}
</script>

<style scoped>

</style>