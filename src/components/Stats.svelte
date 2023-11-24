<script lang="ts">
	import { onMount } from 'svelte';
	import { useQuery } from '../@tools';

	$: data = { userCount: 0, mau: 0 };

	onMount(async () => {
		const response = await useQuery('fetchStatsCurrent');
		data.userCount = (response?.countConsumer ?? 0) + (response?.countMerchant ?? 0);
		data.mau = (response?.login ?? 0) + (response?.issueDone ?? 0) + (response?.issueFailed ?? 0);
	});
</script>

<!-- Features -->
<div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black">
	<!-- Grid -->
	<div class="flex justify-around">
		<!-- Stats -->
		<div class="text-center">
			<h2 class="text-lg sm:text-xl text-center font-semibold text-white">現在登録者数</h2>
			<p
				class="w-full mt-2 sm:mt-3 text-center text-3xl sm:text-5xl font-bold bg-clip-text bg-gradient-to-tl from-green-600 to-blue-600 text-transparent"
			>
				{data.userCount.toLocaleString()}
			</p>
			<p class="mt-1 text-white">Users</p>
		</div>
		<!-- End Stats -->

		<!-- Stats -->
		<div class="text-center">
			<h2 class="text-lg sm:text-xl text-center font-semibold text-white">アクティブユーザー数</h2>
			<p
				class="w-full mt-2 sm:mt-3 text-center text-3xl sm:text-5xl font-bold bg-clip-text bg-gradient-to-tl from-green-600 to-blue-600 text-transparent"
			>
				{data.mau.toLocaleString()}
			</p>
			<p class="mt-1 text-white">Per Month</p>
		</div>
		<!-- End Stats -->
	</div>
	<!-- End Grid -->
</div>
<!-- End Features -->
