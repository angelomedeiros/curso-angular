"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_ships_1 = require("./base-ships");
class MillenniumFalcon extends base_ships_1.Spacecraft {
    constructor(cargoContainers) {
        super('pica das galaxias');
        this.cargoContainers = cargoContainers;
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
exports.MillenniumFalcon = MillenniumFalcon;
