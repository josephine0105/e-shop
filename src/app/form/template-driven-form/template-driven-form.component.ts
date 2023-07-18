import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('userForm') uForm!: NgForm;
  constructor() {}
  Country = [{ countryname: 'India' }, { countryname: 'London' }];
  ngOnInit(): void {
    this.uForm.setValue({
      name: 'Josephine Mary',
    });
  }
  onSubmit(userForm: NgForm) {
    console.log('submiteed', userForm.form.value);
  }
}
