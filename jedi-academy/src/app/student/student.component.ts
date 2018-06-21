import { Component, OnInit, Input } from '@angular/core'
import { IStudent } from './student.model'

@Component({
	selector: 'jad-student',
	templateUrl: './student.component.html',
	styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

	// @Input() name: string
	// @Input() isJedi: boolean

	@Input() student: IStudent

	constructor() { }

	ngOnInit() {
	}

	clicked() {
		alert(`Student: ${this.student.name}`)
	}

}
