import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'timesheets-info',
  standalone: true,
  imports: [],
  templateUrl: './timesheets-info.component.html',
  styleUrl: './timesheets-info.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TimesheetsInfoComponent {
  @Input() public title:string = '';
  @Input() public time:string = '';
}
