import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  form: FormGroup = new FormGroup({})

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      task: new FormControl('', [Validators.required]),
      language: new FormControl('', [Validators.required]),
      source: new FormControl('', [Validators.required])
    })
  }

  check() {
    console.warn(this.form.value)
  }

  get name() {
    return this.form.get('name');
  }

  get task() {
    return this.form.get('task');
  }

  get source() {
    return this.form.get('source');
  }

  get language() {
    return this.form.get('language');
  }

  showToastr() {
    this.toastr.success('Message submitted sucessfully', 'Success');
  }
}
