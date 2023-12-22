<!-- Hero -->
<section id="hero" class="c-hero">
	<figure class="c-hero__bg">
		<video autoplay loop playsinline muted src="/images/bg-graph.mp4" />
	</figure>
	<!-- Grid -->
	<div class="py-16 lg:py-4 lg:flex">
		<!-- svelte-ignore missing-declaration -->
		<WrapCenter className="lg:w-1/2 p-10 c-hero__catch" style="">
			<div>
				<h1
					class="block text-3xl font-bold text-gray-800 text-4xl lg:text-6xl lg:leading-tight dark:text-white"
				>
					その返事、<Br /><span class="text-blue-600">AI</span>に相談しよう
				</h1>
				<p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
					Replie（リプリー）は、LINE、SNS、ビジネスメール、<Br
					/>あなたが返事に困ったときにAIがアドバイスをしてくれるアプリです。
				</p>
				<!-- Buttons -->
				<div class="grid gap-4 grid-cols-2 mt-5">
					<a
						class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700text-sm lg:text-base text-white font-medium rounded-md  transition py-3 px-4"
						href="https://app.replie.net/?openExternalBrowser=1"
						target="_blank"
						rel="noopener noreferrer"
						style="pointer-events: none;"
					>
					<div>

						<del>使ってみる</del>
						<div class="font-bold">サービス準備中</div>
					</div>
						<svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path
								d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</a>
					<a
						class="inline-flex bg-white justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border shadow-sm font-medium rounded-md transition py-3 px-4  dark:shadow-slate-700/[.7] dark:text-white"
						href="https://docs.google.com/forms/d/e/1FAIpQLSeEopkZ6N_OxZe9YiD09XCj2UyVfFIkSZlQg3NmQCfFAPDoxw/viewform"
						target="_blank"
						rel="noopener noreferrer"
					>
						ご意見・要望を送る
						<svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path
								d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!-- End Buttons -->
		</WrapCenter>
		<!-- End Col -->

		<!-- svelte-ignore missing-declaration -->
		<WrapCenter className="lg:w-1/2 c-hero__img">
			<img src="/images/cap-blank.png" alt="Demo" width="296" height="600" />
			<video autoplay loop playsinline muted src="/images/cap-demo-noframe.mp4" />
		</WrapCenter>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</section>
<!-- End Hero -->

<!-- End Hero -->
<style lang="scss" global>
	.c-hero {
		height: 100vh;
		width: 100vw;
		margin: auto;
		max-height: 800px;
		overflow: hidden;

		@include mobile {
			height: 1200px;
			max-height: unset;
		}

		&__bg {
			pointer-events: none;
			video,
			&::after {
				content: '';
				position: absolute;
				z-index: -1;
				top: 0;
				left: 0;
				object-fit: cover;
				height: 100vh;
				width: 100vw;
				max-height: 800px;
				background: rgba(0, 255, 255, 0.8);
				@include mobile {
					height: 1200px;
					max-height: unset;
				}
			}
		}

		&__catch,
		&__img {
			height: 100vh;
			max-height: 800px;
			@include mobile {
				height: 500px;
				max-height: unset;
			}
		}

		&__img {
			user-select: none;
			position: relative;
			img {
				position: absolute;
				top: 0;
				bottom: 0;
				margin: auto;
				height: 600px;
			}
			video {
				position: absolute;
				top: 25px;
				bottom: 0;
				margin: auto;
				height: 547px;
				border-radius: 2px;
			}
		}
	}
</style>
