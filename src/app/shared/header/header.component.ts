import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
    ])
  ]
})
export class HeaderComponent {

}
