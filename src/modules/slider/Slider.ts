import { images } from "../../data/sliderImages";
import { IModule } from "../../interfaces/module";
import style from './style.module.scss';



export default class Slider implements IModule {
	public _parentBlock: HTMLDivElement = document.createElement('div');
	private blockClassName: string = `${style.slider} container`;

	public rendering(): void {
		this._parentBlock.className = this.blockClassName;
		this.showImage();
	}

	private showImage(index: number = 0) {
		this._parentBlock.innerHTML = `
			<div class=${style.slider__imageBox}>
				<img class=${style.slider__image} src=${images[index].src}>
			</div>
			<ul id='sliderDotList' class=${style.slider__dotList}>
				${images.map((item, idx) => (
					`<li id='mainSlider${idx}'
						data-index=${idx}
						class=${index === idx
						? style.slider__dot_active
						: style.slider__dot}>
					</li>`
				)).join('')}
			</ul>`

			const nextIndex = index === images.length - 1 ? 0 : index + 1;

			this.addEvents(nextIndex);
	}

	private addEvents(index: number): void {
		const timerId = setTimeout(() => {
			this.showImage(index)
		}, 5000);

		const sliderDotList = document.getElementById('sliderDotList');

		sliderDotList.addEventListener('click', (e: MouseEvent): void => {

			const target: HTMLLIElement = e.target as HTMLLIElement;
			const choosedIndex = Number(target.getAttribute('data-index'))

			clearTimeout(timerId)
			this.showImage(choosedIndex);
		})
	}

	public get parentBlock(): HTMLElement {
		return this._parentBlock;
	}
}