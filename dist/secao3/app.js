class Spacecraft {
    constructor(propulsor) {
        this.propulsor = propulsor;
    }
    jumpToHyperspce() {
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}
let ship = new Spacecraft('hyperdrive');
ship.jumpToHyperspce();
class MillenniumFalcon extends Spacecraft {
    constructor() {
        super('hyperdrive');
    }
    jumpToHyperspce() {
        if (Math.random() >= 0.5) {
            super.jumpToHyperspce();
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    }
}
let falcon = new MillenniumFalcon();
falcon.jumpToHyperspce();