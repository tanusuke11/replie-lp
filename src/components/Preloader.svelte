<script lang="ts">
	$: isLoaded = false;
	onMount(() => {
		try {
			isLoaded = !!sessionStorage.getItem('isLoaded');
			if (!isLoaded) {
				sessionStorage.setItem('isLoaded', 'true');
				document.body.classList.add('isLoaded');
			}
			document.body.style.opacity = '1';
		} catch {
			document.body.style.opacity = '1';
		}
	});
</script>

<div class="preloader">
	<svg
		width="256"
		height="256"
		viewBox="0 0 67.733329 67.733333"
		version="1.1"
		id="svg5"
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		><defs id="defs2"
			><rect x="529.72144" y="835.78265" width="496.08829" height="331.2861" id="rect959" /><rect
				x="467.50015"
				y="251.40746"
				width="594.46515"
				height="222.81932"
				id="rect7200"
			/><rect
				x="494.40665"
				y="151.34897"
				width="512.90485"
				height="153.03062"
				id="rect7144"
			/><linearGradient id="linearGradient3866"
				><stop
					style="stop-color:#f9d75c;stop-opacity:1;"
					offset="0"
					id="stop3864"
				/></linearGradient
			><filter
				style="color-interpolation-filters:sRGB"
				id="filter2784"
				x="-0.064152218"
				y="-0.064152218"
				width="1.1428845"
				height="1.1428845"
				><feFlood
					flood-opacity="0.501961"
					flood-color="rgb(200,200,200)"
					result="flood"
					id="feFlood2774"
				/><feComposite
					in="flood"
					in2="SourceGraphic"
					operator="in"
					result="composite1"
					id="feComposite2776"
				/><feGaussianBlur
					in="composite1"
					stdDeviation="1"
					result="blur"
					id="feGaussianBlur2778"
				/><feOffset dx="1" dy="1" result="offset" id="feOffset2780" /><feComposite
					in="SourceGraphic"
					in2="offset"
					operator="over"
					result="composite2"
					id="feComposite2782"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB"
				id="filter2796"
				x="-0.018827736"
				y="-0.046303969"
				width="1.0455004"
				height="1.1119013"
				><feFlood
					flood-opacity="0.501961"
					flood-color="rgb(200,200,200)"
					result="flood"
					id="feFlood2786"
				/><feComposite
					in="flood"
					in2="SourceGraphic"
					operator="in"
					result="composite1"
					id="feComposite2788"
				/><feGaussianBlur
					in="composite1"
					stdDeviation="1"
					result="blur"
					id="feGaussianBlur2790"
				/><feOffset dx="1" dy="1" result="offset" id="feOffset2792" /><feComposite
					in="SourceGraphic"
					in2="offset"
					operator="over"
					result="composite2"
					id="feComposite2794"
				/></filter
			><filter
				style="color-interpolation-filters:sRGB"
				id="filter2808"
				x="-0.11833681"
				y="-0.084457465"
				width="1.2732372"
				height="1.1949754"
				><feFlood
					flood-opacity="0.501961"
					flood-color="rgb(200,200,200)"
					result="flood"
					id="feFlood2798"
				/><feComposite
					in="flood"
					in2="SourceGraphic"
					operator="in"
					result="composite1"
					id="feComposite2800"
				/><feGaussianBlur
					in="composite1"
					stdDeviation="1"
					result="blur"
					id="feGaussianBlur2802"
				/><feOffset dx="1" dy="1" result="offset" id="feOffset2804" /><feComposite
					in="SourceGraphic"
					in2="offset"
					operator="over"
					result="composite2"
					id="feComposite2806"
				/></filter
			></defs
		><g id="layer1"
			><g id="g1904" transform="matrix(0.88823037,0,0,0.88823037,-102.80826,-21.697476)"
				><path
					style="fill:#f9d75c;fill-opacity:1;stroke:#f9d75c;stroke-width:1.68165;stroke-dasharray:none;stroke-opacity:1"
					d="m 153.78713,80.432727 c 1.21154,-3.80205 1.30212,-6.52348 0.31837,-9.5647 -0.52882,-1.63482 -1.09058,-2.53658 -2.37903,-3.81893 -0.90943,-0.90513 -1.30122,-1.20792 -2.04198,-1.57812 -1.26858,-0.63397 -1.76319,-0.69487 -2.44541,-0.30112 -0.31234,0.18027 -1.70607,1.49133 -3.38304,3.18239 -2.51201,2.53311 -2.89312,2.87583 -3.19799,2.87583 h -0.34612 v -13.83414 -13.83414 l 0.41713,-0.069 c 0.63355,-0.10472 26.75843,-0.0815 26.92465,0.0239 0.19546,0.12397 -0.15987,0.54005 -2.91084,3.40854 -2.59328,2.70407 -3.85559,4.08766 -4.03474,4.42241 -0.17973,0.33582 0.0342,0.98429 1.01429,3.07466 1.13422,2.4191 1.69781,4.24458 2.18418,7.07465 0.19183,1.11617 0.16142,4.10544 -0.056,5.50611 -0.5138,3.30994 -1.81938,6.6154 -3.53678,8.95437 -0.83192,1.13302 -3.90979,4.16732 -4.82663,4.75829 -0.81149,0.52307 -1.86104,1.08152 -2.03261,1.08152 -0.0559,0 0.0937,-0.61318 0.33256,-1.36262 z"
					id="path5632"
				/><circle
					style="fill:none;fill-opacity:1;stroke:#f9d75c;stroke-width:4;stroke-dasharray:none;stroke-opacity:1"
					id="path1244"
					cx="154.00583"
					cy="62.609108"
					r="34.293434"
				/></g
			></g
		></svg
	>
</div>

<style lang="scss" global>
	body {
		opacity: 0;
		transition: opacity 0.5s;
	}
	.preloader {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1001;
		width: 100vw;
		height: 100vh;
		margin: auto;
		text-align: center;
		background-color: #ffd600;
		opacity: 0;
		pointer-events: none;

		.isLoaded & {
			opacity: 1;
			pointer-events: auto;
			animation: fadeOut 3s forwards cubic-bezier(0.9, 0, 0.1, 1);
		}

		svg {
			position: absolute;
			top: 50%;
			left: 50%;
			display: block;
			margin: auto;
			transform: translate(-50%, -50%);
			path {
				stroke: white !important;
				stroke-dasharray: 200 !important;
				stroke-width: 2 !important;
				transition: 0.5s;
				animation: draw 2.5s forwards ease-in-out;
			}
			circle {
				fill: transparent !important;
				stroke: white !important;
				stroke-dasharray: 300 !important;
				stroke-width: 3 !important;
				transition: 0.5s;
				animation: draw-circle 2.5s forwards cubic-bezier(0.9, 0, 0.1, 1);
			}
		}
	}

	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		85% {
			transform: translateX(0vw);
		}
		95% {
			opacity: 1;
			transform: translateX(100vw);
		}
		100% {
			opacity: 0;
			transform: translateX(100vw);
			pointer-events: none;
		}
	}

	@keyframes draw {
		0% {
			fill: transparent;
			stroke-dashoffset: 200;
		}
		20% {
			fill: transparent;
			stroke-dashoffset: 200;
		}
		80% {
			fill: transparent;
		}
		100% {
			fill: white;
			stroke-dashoffset: 0;
		}
	}

	@keyframes draw-circle {
		0% {
			fill: transparent;
			stroke-dashoffset: 300;
		}
		20% {
			fill: transparent;
			stroke-dashoffset: 300;
		}
		50% {
			fill: transparent;
			stroke-dashoffset: 300;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}
</style>
