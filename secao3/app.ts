class Spacecraft {

	constructor(public propulsor: string) {}

	public jumpToHyperspce() {
		console.log(`Entering hyperspace with ${this.propulsor}`)
	}

}

let ship = new Spacecraft('hyperdrive')
ship.jumpToHyperspce()

class MillenniumFalcon extends Spacecraft {

	constructor() {
		super('hyperdrive')
	}

	public jumpToHyperspce() {
		if (Math.random() >= 0.5) {
			super.jumpToHyperspce()
		} else { console.log('Failed to jump into hyperspace') }
	}

}

let falcon = new MillenniumFalcon()
falcon.jumpToHyperspce()

interface Containership {
	cargoContainers: number
}