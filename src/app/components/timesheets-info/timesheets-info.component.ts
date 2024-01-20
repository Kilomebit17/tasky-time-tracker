import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TimeI } from "../../modules/interfaces/time.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'timesheets-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timesheets-info.component.html',
  styleUrl: './timesheets-info.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TimesheetsInfoComponent {
  @Input() public title:string = '';
  @Input() public time:TimeI | null = null;
}
