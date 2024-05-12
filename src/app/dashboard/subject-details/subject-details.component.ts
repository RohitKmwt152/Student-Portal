import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subject-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-details.component.html',
  styleUrl: './subject-details.component.scss'
})
export class SubjectDetailsComponent {
    @Input() records!: any;
	@Input() size: number = 26;
	@Output() sizeChange = new EventEmitter<number>();

	onIncrease(): void {
		this.resize(+1);
	}

	onReduce(): void {
		this.resize(-1);
	}

	resize(delta: number): void {
		this.size = Math.min(40, Math.max(8, +this.size + delta));
		this.sizeChange.emit(this.size);
	}
}
