<template>
	<div id="app">
		<transition name="slide-fade">
			<router-view />
		</transition>
	</div>
</template>

<script>
export default {
	name: "App",
	created() {},
};
</script>

<style>
#nprogress .bar {
	height: 4px;
	border-radius: 4px;
	z-index: 999999;
}
</style>
