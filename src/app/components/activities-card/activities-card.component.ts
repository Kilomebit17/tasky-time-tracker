import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'activities-card',
  standalone: true,
  imports: [],
  templateUrl: './activities-card.component.html',
  styleUrl: './activities-card.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ActivitiesCardComponent {

  @Input({
    alias:'name',
    required:true
  }) title = ''
  @Input({
    alias:'info',
    required:true
  }) data = ''
  @Input({
    alias:'image',
    required:true
  }) picture = ''
}
