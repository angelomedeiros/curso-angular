import * as _ 												from 'lodash'
import { IContainership, Spacecraft } from './base-ships'
import { MillenniumFalcon } 					from './starfighters'

const ship = new Spacecraft('hyperdrive')
ship.jumpToHyperspce()

const falcon = new MillenniumFalcon(3)
falcon.jumpToHyperspce()

const goodForTheJob = (shipJob: IContainership) => shipJob.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'Yes' : 'No'}`)
