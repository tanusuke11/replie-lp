import { useAgent } from '../@tools';

class Inview {
	constructor() {
		this.defineMethod();

		if (useAgent().isMobile || useAgent().isTablet) {
			this.setInteraction(['[data-inview]'], false);
		} else {
			this.setInteraction(['[data-inview]'], true);
		}
		this.setHeroOut('#hero');
	}

	defineMethod() {
		/**
		 * @function HTMLElement.prototype.inview HTML要素と画面の交差を判定し処理を実行する
		 */
		Object.defineProperty(HTMLElement.prototype, 'inview', {
			configurable: true,
			enumerable: false,
			writable: true,
			/**
			 * @function callbackInView  HTML要素が画面内に入った時に実行する関数
			 * @function callbackOutView  HTML要素が画面から出た時に実行する関数
			 */
			value: function (
				callbackInView: (arg0: IntersectionObserverEntry) => void,
				callbackOutView: (arg0: IntersectionObserverEntry) => void
			) {
				const inViewOptions = {
					root: null,
					rootMargin: '-5%', //要素が交差する手前でコールバックを呼び出したい場合はrootMarginに0%以外の値を
					threshold: [0] //交差領域が100%変化した時にコールバックを呼び出す
				};
				const outViewOptions = {
					root: null,
					rootMargin: '-2%', //要素が交差する手前でコールバックを呼び出したい場合はrootMarginに0%以外の値を
					threshold: [0] //交差領域が100%変化した時にコールバックを呼び出す
				};

				new IntersectionObserver(function (entries) {
					entries.forEach(function (e) {
						//要素が画面内に入った時( e.isIntersecting 交差を判定するブール値)
						if (
							e.isIntersecting &&
							Object.prototype.toString.call(callbackInView) === '[object Function]'
						) {
							callbackInView(e);
						}
					});
				}, inViewOptions).observe(this);

				new IntersectionObserver(function (entries) {
					entries.forEach(function (e) {
						//要素が画面から出た時
						if (
							!e.isIntersecting &&
							Object.prototype.toString.call(callbackOutView) === '[object Function]'
						) {
							callbackOutView(e);
						}
					});
				}, outViewOptions).observe(this);
			}
		});
	}

	setInteraction(elements: any[], alternate: boolean) {
		elements.forEach(function (e) {
			Array.prototype.forEach.call(document.querySelectorAll(e), function (i) {
				i.inview(
					function () {
						i.classList.add('inview');
					},
					function () {
						if (alternate) i.classList.remove('inview');
					}
				);
			});
		});
	}

	setHeroOut(hero: string) {
		Array.prototype.forEach.call(document.querySelectorAll('[data-heroout]'), function (j) {
			j.classList.remove('heroout');
		});
		Array.prototype.forEach.call(document.querySelectorAll(hero), function (i) {
			i.inview(
				function () {
					Array.prototype.forEach.call(document.querySelectorAll('[data-heroout]'), function (j) {
						j.classList.remove('heroout');
					});
				},
				function () {
					Array.prototype.forEach.call(document.querySelectorAll('[data-heroout]'), function (j) {
						j.classList.add('heroout');
					});
				}
			);
		});
	}
}

export function inview() {
	new Inview();
}
