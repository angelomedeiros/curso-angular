import { IContainership, Spacecraft } from './base-ships'

class MillenniumFalcon extends Spacecraft implements IContainership {

	public cargoContainers: number

	constructor(cargoContainers) {
		super('pica das galaxias')
		this.cargoContainers = cargoContainers
	}

	public jumpToHyperspce() {
		if (Math.random() >= 0.5) {
			super.jumpToHyperspce()
		} else { console.log('Failed to jump into hyperspace') }
	}

}

export { MillenniumFalcon }
