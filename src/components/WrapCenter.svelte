<script lang="ts">
	export let className: string | undefined = undefined;
	export let style: string | undefined = undefined;
</script>

<div class="flex flex-col items-center justify-center {className}" {style}>
	<slot />
</div>
