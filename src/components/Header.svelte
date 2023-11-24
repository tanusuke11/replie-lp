<script>
	const onEvent = {
		clickHamburger: () => {
			document.body.classList.toggle('js-menu-open');
		},
		clickMenu: () => {
			document.body.classList.remove('js-menu-open');
		},
		clickShare: () => {
			if (navigator.share) {
				document.body.classList.remove('js-menu-open');
				try {
					navigator.share({
						title: 'Replie（リプリー）- AIコミュニケーション支援ツール',
						text: 'Replie（リプリー）は、LINE、SNS、ビジネスメール、あなたが返事に困ったときにAIがアドバイスをしてくれるアプリです。',
						url: 'https://replie.net'
					});
				} catch {}
			}
		}
	};
</script>

<header
	class="c-header flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full border-gray-200 text-sm sm:py-0 dark:bg-gray-800 fixed dark:border-gray-700"
	data-heroout
>
	<div class="relative w-full mx-auto flex items-center px-6 lg:px-16" aria-label="Global">
		<div class="c-header__menu flex items-center justify-between">
			<div class="c-header__hamb" on:click={onEvent.clickHamburger}>
				<div />
				<div />
				<div />
			</div>
			<nav class="c-header__links">
				<ul>
					<li><a class="hover:bg-yellow-500" href="/#" on:click={onEvent.clickMenu}>HOME</a></li>
					<li>
						<a class="hover:bg-yellow-500" href="/#feature" on:click={onEvent.clickMenu}>特徴</a>
					</li>
					<li>
						<a class="hover:bg-yellow-500" href="/#usage" on:click={onEvent.clickMenu}>使い方</a>
					</li>
					<li>
						<a class="hover:bg-yellow-500" href="/terms/" on:click={onEvent.clickMenu}>利用規約</a>
					</li>
					<li>
						<a
							class="flex justify-center items-center hover:bg-yellow-500"
							href="https://app.replie.net/auth/signup/?openExternalBrowser=1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="mx-2"> ユーザー登録 </span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</a>
					</li>
					<li>
						<a
							class="flex justify-center items-center hover:bg-yellow-500"
							href="#"
							on:click={onEvent.clickShare}
							><span class="mx-2"> このアプリをシェア </span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
								/>
							</svg>
						</a>
					</li>
				</ul>
			</nav>
		</div>
		<a class="c-header__logo" href="/#" aria-label="Brand">
			<img src="/images/logo-header.png" alt="Replie（リプリー）" width="128" height="43" />
		</a>
	</div>
</header>

<style lang="scss" global>
	body.js-menu-open {
		overflow: hidden;
	}
	.c-header {
		transition: background-color 0.2s, height 0.2s;
		min-height: 70px;
		&__logo {
			@include mobile {
				.js-menu-open & {
					filter: brightness(10);
				}
			}
		}
		&__menu {
			position: fixed;
			top: 0;
			right: 0;
			height: 100vh;
			width: 100%;
			z-index: 1;
			max-width: 500px;
			overflow: hidden;
			pointer-events: none;

			.js-menu-open & {
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
				pointer-events: auto;
			}
		}
		&__hamb {
			cursor: pointer;
			user-select: none;
			pointer-events: auto;
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			top: 22px;
			right: 30px;
			height: 24px;
			width: 24px;

			& > div {
				position: relative;
				display: block;
				width: 24px;
				height: 2px;
				background-color: #555;
				transition: 0.2s;

				&:nth-of-type(1) {
					top: -8px;
				}
				&:nth-of-type(2) {
					top: 0px;
				}
				&:nth-of-type(3) {
					top: 8px;
				}
				.js-menu-open & {
					&:nth-of-type(1) {
						top: 0px;
						transform-origin: center;
						transform: rotate(45deg);
					}
					&:nth-of-type(2) {
						display: none;
					}
					&:nth-of-type(3) {
						top: -2px;
						transform-origin: center;
						transform: rotate(135deg);
					}
				}
			}
			&:hover::before {
				filter: brightness(1.05);
			}
			&::before {
				content: '';
				position: absolute;
				display: block;
				background-color: #ffd600;
				width: 56px;
				height: 56px;
				z-index: -1;
				border-radius: 50%;
				transition: background-color 0.3s, transform 0.4s, filter 0.3s;
				transition-timing-function: ease-in-out;
				.js-menu-open & {
					transform: scale(100);
				}
			}
		}
		&__links {
			width: 100%;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			display: flex;
			ul {
				width: 100%;
			}
			li {
				cursor: pointer;
				width: 100%;
				pointer-events: none;
				transition: opacity 0.3s, transform 0.3s;
				transform: translateY(-10px);
				opacity: 0;
			}
			.js-menu-open & li {
				transform: translateY(0px);
				pointer-events: auto;
				opacity: 1;
				@for $i from 1 through 6 {
					&:nth-of-type(#{$i}) {
						transition-delay: 0.1s * $i;
					}
				}
			}
			a {
				width: 100%;
				text-align: center;
				padding: 30px 20px;
				font-size: large;
			}
		}
		&.heroout {
			background-color: #ffd600;
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
			& .c-header__logo {
				filter: brightness(10);
			}
		}
	}
</style>
