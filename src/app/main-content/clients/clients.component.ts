import { Component } from '@angular/core';
// import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
  // animations: [
  //   trigger('clientsTextAnimation', [
  //     transition(':enter', [
  //       style({
  //         opacity: 0
  //       }),
  //       animate('1s ease-in-out', style({
  //         opacity: 1
  //       }))
  //     ])
  //   ]),
  //   trigger('slideAnimationbounce', [
  //     transition(':enter', [
  //       style({
  //         transform: 'scale(0)  rotate(360deg)',
  //         opacity: 0
  //       }),
  //       animate('500ms ease-in', style({
  //         transform: 'scale(1)  rotate(0)',
  //         opacity: 1
  //       }))
  //     ]),
  //   ])
  // ]
})
export class ClientsComponent {

}
