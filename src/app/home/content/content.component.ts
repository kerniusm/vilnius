import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

type UserFields = 'gender' | 'date';
type FormErrors = { [u in UserFields ] };



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  startDate = new Date(1980, 0, 1);

  gender = [
    {value: 'vyr', viewValue: 'Vyras'},
    {value: 'mot', viewValue: 'Moteris'},
  ];

  userForm: FormGroup;
  formErrors: FormErrors = {
    'gender': '',
    'date': ''
  };


  validationMessage = {
    'gender': {
      'required': 'Lytis yra privaloma \n',
      'pattern': 'Dont play \n'

    },

    'date': {
      'matDatepickerParse': 'MMMM-dd-mm \n'
    }

};

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.userForm = this.formbuilder.group(
      {
        'gender': ['', [
          Validators.required,
          Validators.pattern('(vyr)?(mot)?')
        ]],

        'date': ['', [
          Validators.required
        ]],

      }
    );
    this.userForm.valueChanges.subscribe(
      (data) => this.onValueChanged(data)
    );
    this.onValueChanged();
  }


  onValueChanged(data?: any){

    if (!this.userForm){return; }

    const form = this.userForm;

    for (const field in this.formErrors){
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)){
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid){
          const message = this.validationMessage[field];
          if (control.errors){
            console.log(control.errors)
            for (const key in control.errors){
              if (Object.prototype.hasOwnProperty.call(control.errors, key)){
                this.formErrors[field] += `${(message as {[key: string]: string}) [key]}`;
              }
            }
          }
        }
      }
    }
  }


  search(){
    this.userForm.value['gender'];
    this.userForm.value['date'];

    // console.log(     this.userForm.value['date']  );
  }

}
