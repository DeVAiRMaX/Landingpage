import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('headerAnimation', [
      transition(':enter', [
        style({
          transform: 'translateY(-50%)',
          opacity: 0
        }),
        animate('500ms ease-in', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('responsiveMenuAnimation', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)',
        }),
        animate('300ms ease-in', style({
          transform: 'translateX(0)',
        }))
      ]),
      transition(':leave', [
        style({
          transform: 'translateX(0)',
        }),
        animate('300ms ease-in', style({
          transform: 'translateX(100%)',

        }))
      ])
    ])
  ]
})
export class HeaderComponent {
  showResponsiveMenu: boolean = false;

}
