<script lang="ts">
	onMount(() => {
		document.body.style.opacity = '1';
	});
</script>

<section>
	<div class="container">
		<h1>404エラー</h1>
		<div class="py-12" />
		<h3 class="text-center py-12 ">お探しのページは見つかりませんでした。</h3>
		<div class="py-16" />
		<div class="text-center">
			<a
				class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-lg text-white font-medium rounded-md transition py-3 px-16"
				href="/"
				style="color:white;text-decoration:none;"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
					/>
				</svg>
				ホームへ戻る
			</a>
		</div>
	</div>
</section>

<style lang="scss" scoped>
	@import 'src/styles/docs';
</style>
