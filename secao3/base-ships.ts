class Spacecraft {

	constructor(public propulsor: string) {}

	public jumpToHyperspce() {
		console.log(`Entering hyperspace with ${this.propulsor}`)
	}

}

interface IContainership {
	cargoContainers: number
}

export {
	IContainership,
	Spacecraft,
}
