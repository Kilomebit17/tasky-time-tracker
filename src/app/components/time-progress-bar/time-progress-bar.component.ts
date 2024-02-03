import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'time-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-progress-bar.component.html',
  styleUrl: './time-progress-bar.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TimeProgressBarComponent {
  @Input() total: number | string = 0;

  calcPercentage() {
    return (Number(this.total) > 8 ? 8 / 8 : Number(this.total) / 8) * 100;
  }
}
