class Spacecraft {

	constructor(public propulsor: string) {}

	public jumpToHyperspce() {
		console.log(`Entering hyperspace with ${this.propulsor}`)
	}

}

let ship = new Spacecraft('hyperdrive')
ship.jumpToHyperspce()

class MillenniumFalcon extends Spacecraft implements IContainership {

	public cargoContainers: number

	constructor() {
		super('pica das galaxias')
		this.cargoContainers = 2
	}

	public jumpToHyperspce() {
		if (Math.random() >= 0.5) {
			super.jumpToHyperspce()
		} else { console.log('Failed to jump into hyperspace') }
	}

}

let falcon = new MillenniumFalcon()
falcon.jumpToHyperspce()

interface IContainership {
	cargoContainers: number
}

let goodForTheJob = (shipJob: IContainership) => shipJob.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'Yes' : 'No'}`)
