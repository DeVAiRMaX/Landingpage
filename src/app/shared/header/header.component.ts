import { Component, Renderer2 } from '@angular/core';
import { SharedModule } from '../../shared.module';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('responsiveMenuAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-25%)' }),
        animate('250ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HeaderComponent {
  showResponsiveMenu: boolean = false;

  constructor(private renderer: Renderer2) {}


  toggleResponsiveMenu() {
    this.showResponsiveMenu = !this.showResponsiveMenu;
    console.log('Responsive Menu:', this.showResponsiveMenu ? 'Geöffnet' : 'Geschlossen');

    if (this.showResponsiveMenu) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

}
