<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<CommitVNode>
			<HelloWorld msg="Welcome to Your Vue.js App"/>
		</CommitVNode>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	import CommitVNode from "./components/CommitVNode";

	export default {
		name: 'App',
		components: {
			HelloWorld,
			CommitVNode
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
