import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-group',
  templateUrl: './avatar-group.component.html',
  styleUrls: ['./avatar-group.component.scss']
})
export class AvatarGroupComponent {
  @Input() avatars: string[] = [];
  @Input() maxVisible: number = 4;

  get visibleAvatars() {
    return this.avatars.slice(0, this.maxVisible);
  }

  get extraCount() {
    return this.avatars.length - this.maxVisible;
  }
}
