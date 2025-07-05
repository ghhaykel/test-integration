import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface EmployeeInfo {
  label: string;
  data: string;
  borderColor?: string;
}

@Component({
  selector: 'app-employee-infos',
  templateUrl: './employee-infos.component.html',
  styleUrls: ['./employee-infos.component.scss']
})
export class EmployeeInfosComponent {
  @Input() title: string = 'Informations';
  @Input() infos: EmployeeInfo[] = [];
  @Input() editable: boolean = true;
  
  @Output() onEdit = new EventEmitter<void>();

   isActive: boolean = false;
 
     toggleEdit() {
    this.isActive = !this.isActive;
    this.onEdit.emit(); 
  }
 
}
