import { Component } from '@angular/core';
import { EmployeeInfo } from 'src/app/shared/components/employee-infos/employee-infos.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  selectedResponsable: any = null;
  selectedEmployee: any = null;
  selectedEmployeeBorderColor: string = '';

  responsables = [
    {
      id: 1,
      name: 'Jean Dupont',
      position: 'Responsable cuisine',
      status: 'active',
      photo: 'assets/images/avatars/1.jpg',
      color: '#BD9DFA',
    },
    {
      id: 2,
      name: 'Marie Martin',
      position: 'Responsable terrace',
      status: 'inactive',
      photo: 'assets/images/avatars/2.jpg',
      color: '#57BFCF ',
    },
    {
      id: 3,
      name: 'Jean Dupont',
      position: 'Chef de service',
      status: 'active',
      photo: 'assets/images/avatars/3.png',
      color: '#FF9B42',
    },
    {
      id: 4,
      name: 'Nom Prénom',
      position: 'Responsable de salle',
      status: 'inactive',
      photo: 'assets/images/avatars/4.png',
      color: '#385FE3',
    },
  ];
  employees = [
    {
      id: 1,
      name: 'Nom Prénom',
      position: 'Manager',
      status: 'active',
      photo: 'assets/images/avatars/3.png',
      color: '#FF9B42',
    },
    {
      id: 2,
      name: 'Nom Prénom',
      position: 'Manager',
      status: 'inactive',
      photo: 'assets/images/avatars/4.png',
      color: '#385FE3',
    },
    {
      id: 2,
      name: 'Nom Prénom',
      position: 'Manager',
      status: 'inactive',
      photo: 'assets/images/avatars/4.png',
      color: '#385FE3',
    },
    {
      id: 2,
      name: 'Nom Prénom',
      position: 'Manager',
      status: 'inactive',
      photo: 'assets/images/avatars/4.png',
      color: '#385FE3',
    },
  ];
  avatarsList = [
    'assets/images/avatars/1.jpg',
    'assets/images/avatars/2.jpg',
    'assets/images/avatars/3.png',
    'assets/images/avatars/4.png',
    'assets/images/avatars/5.jpg',
    'assets/images/avatars/1.jpg',
    'assets/images/avatars/2.jpg',
    'assets/images/avatars/3.png',
    'assets/images/avatars/4.png',
    'assets/images/avatars/5.jpg',
  ];
  ngOnInit() {
    if (this.employees.length > 0) {
      this.selectedEmployee = this.employees[0];
      this.selectItem(0, 'employee');
    }
  }
  toggleEdit() {
    console.log('Événement onEdit');
  }
  selectItem(index: number, listType: 'employee' | 'responsable') {
    if (listType === 'employee') {
      this.selectedEmployee = this.employees[index];
      this.selectedResponsable = null;
    } else {
      this.selectedResponsable = this.responsables[index];
      this.selectedEmployee = null;
    }
  }

  activeTab = 'list';

  personalInfos: EmployeeInfo[] = [
    { label: 'Nom', data: 'Lydia' },
    { label: 'Prénom', data: 'Bauer' },
    { label: 'Date de naissance', data: '27/12/1993' },
    { label: 'Ville de naissance', data: 'Paris' },
    { label: 'Code postal de naissance', data: '20091' },
    { label: 'Pays de naissance', data: 'France' },
    { label: 'Sexe', data: 'Homme' },
    { label: 'Situation', data: 'Non' },
  ];
  openEditModal() {}
}
