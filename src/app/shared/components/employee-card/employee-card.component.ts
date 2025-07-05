import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee: any;
  @Input() customClasses: string | string[] | { [key: string]: boolean } = '';
  ngOnInit() {
  
  }


}
