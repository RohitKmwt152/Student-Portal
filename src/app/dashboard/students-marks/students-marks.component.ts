import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { SubjectDetailsComponent } from "../subject-details/subject-details.component";

@Component({
    selector: 'app-students-marks',
    standalone: true,
    templateUrl: './students-marks.component.html',
    styleUrl: './students-marks.component.scss',
    imports: [SubjectDetailsComponent]
})
export class StudentsMarksComponent {
	studentsMarksList: any;
    selectedRecords: any = [];
	fontSize: number = 26;
	physicsList: any = [];
	mathsList: any = [];
	chemistryList: any = [];
	computerList: any = [];

	constructor(
		private dashboardService: DashboardService
	) {}

	ngOnInit(): void {
		this.dashboardService.callStudetnsMarks().subscribe(
			(res: any) => {
				this.studentsMarksList = res;
				this.getDistinctSubjects();
			}	
		);
	}

	getDistinctSubjects(): void {
		this.studentsMarksList.forEach(
			(rec: any) => {
				if (rec.physics) {
					this.physicsList.push(rec);
				}

				if (rec.chemistry) {
					this.chemistryList.push(rec);
				}

				if (rec.computer) {
					this.computerList.push(rec);
				}

				if (rec.maths) {
					this.mathsList.push(rec);
				}
			}
		);
	}

	onClick(list: Array<any>): void {
		this.selectedRecords = list;
	}

	onIncrease(): void {
		this.fontSize++;
	}

	onReduce(): void {
		this.fontSize--;
	}
}
