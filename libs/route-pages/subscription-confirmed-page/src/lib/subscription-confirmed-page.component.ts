import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'subscription-confirmed',
  templateUrl: './subscription-confirmed.component.html',
  styleUrls: ['./subscription-confirmed.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterLink,
  ],
})
export class SubscriptionConfirmedPageComponent {}
