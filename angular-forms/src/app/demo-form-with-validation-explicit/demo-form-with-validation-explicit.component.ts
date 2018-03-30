import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validation-explicit',
  templateUrl: './demo-form-with-validation-explicit.component.html',
  styles: []
})
export class DemoFormWithValidationExplicitComponent {
myForm: FormGroup;
sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku' : ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
   }

  onSubmit(value: string): void {
    console.log('you submitted value ', value);
  }

}
