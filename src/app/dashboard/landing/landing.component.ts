import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  filter: FormControl;
	students!: Array<any>;
	
	constructor(
		private fb: FormBuilder,
		private dashboardServic: DashboardService
	) {
        this.filter = this.fb.control("", { nonNullable: true });
	}

	ngOnInit(): void {
		this.dashboardServic.callGetStudentsRecords().subscribe(
			(res:any) => {
				this.students = res;
			}
		);
	}
}
