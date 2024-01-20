import { Component, Input } from '@angular/core';
import { UserAvatarComponent } from "./user-avatar/user-avatar.component";
import { User } from "./user.interface";

@Component({
  selector: 'user',
  standalone: true,
  imports: [UserAvatarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() userInfo: User | undefined = undefined;
}
