import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbHighlight } from "@ng-bootstrap/ng-bootstrap";
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,CommonModule,ReactiveFormsModule, FormsModule,NgbHighlight],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'student-portal';
    filter: FormControl;
    students = [
        {  
            name:'arun',
            country:'India',
            physics:88,
            maths:87,
            chemistry:78,
            computer:78
        },
        {  
            name:'rajesh',
            country:'India',
            physics:96,
            maths:100,
            chemistry:95,
            computer:78
        },
        {  
            name:'moorthy',
            country:'India',
            physics:89,
            maths:90,
            chemistry:70,
            computer:78
        },
        {  
            name:'raja',
            country:'India',
            physics:30,
            maths:25,
            chemistry:40,
            computer:78
        },
        {  
            name:'usha',
            country:'United States',
            physics:67,
            maths:45,
            chemistry:78,
            computer:78
        },
        {  
            name:'priya',
            country:'United States',
            physics:56,
            maths:46,
            chemistry:78,
            computer:78
        },
        {  
            name:'Sundar',
            country:'India',
            physics:12,
            maths:67,
            chemistry:67,
            computer:78
        },
        {  
            name:'Kavitha',
            country:'United States',
            physics:78,
            maths:71,
            chemistry:67,
            computer:78
        },
        {  
            name:'Dinesh',
            country:'India',
            physics:56,
            maths:45,
            chemistry:67,
            computer:78
        },
        {  
            name:'Hema',
            country:'United States',
            physics:71,
            maths:90,
            chemistry:23,
            computer:78
        },
        {  
            name:'Gowri',
            country:'United States',
            physics:100,
            maths:100,
            chemistry:100,
            computer:78
        },
        {  
            name:'Ram',
            country:'India',
            physics:78,
            maths:55,
            chemistry:47,
            computer:78
        },
        {  
            name:'Murugan',
            country:'India',
            physics:34,
            maths:89,
            chemistry:78,
            computer:78
        },
        {  
            name:'Jenifer',
            country:'United States',
            physics:67,
            maths:88,
            chemistry:90,
            computer:78
        }
    ];
    constructor(private fb : FormBuilder){
        this.filter = this.fb.control("",{nonNullable:true});
    }
}