import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() code: string = ``;
  @Input() response: string = '';
  check: boolean = false;

  changed(evt: any) {
    this.check = evt.target.checked;
  }
  constructor() {}

  ngOnInit(): void {}
}
