<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';
	import { includes } from '../@includes';

	$: if ($navigating)
		(() => {
			const from = window.location.pathname;
			const watchRoute = setInterval(() => {
				const to = window.location.pathname;
				if (to !== from) {
					clearInterval(watchRoute);
					includes();
				}
			}, 10);
		})();

	onMount(() => {
		includes();
	});
</script>

<svelte:head>
	<title>Replie（リプリー）- AIコミュニケーション支援ツール</title>
	<link rel="canonical" href="https://replie.net" />
	<link rel="icon" sizes="48x48" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffd600" />
	<meta name="msapplication-TileColor" content="#ffd600" />
	<meta name="theme-color" content="#ffd600" />
	<meta
		name="description"
		content="Replie（リプリー）は、LINE、SNS、ビジネスメール、あなたが返事に困ったときにAIがアドバイスをしてくれるアプリです。"
	/>
	<meta property="og:site_name" content="Replie (リプリー) - AIコミュニケーション支援ツール" />
	<meta property="og:title" content="Replie (リプリー) - AIコミュニケーション支援ツール" />
	<meta
		property="og:description"
		content="Replie（リプリー）は、LINE、SNS、ビジネスメール、あなたが返事に困ったときにAIがアドバイスをしてくれるアプリです。"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://replie.net" />
	<meta property="og:image" content="https://replie.net/ogp.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://replie.net/ogp.png" />
	<meta property="fb:app_id" content="612499812639918" />
	<meta name="robots" content="index" />
</svelte:head>

<Header />
<slot />
<Footer />
