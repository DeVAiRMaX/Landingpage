import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',

  animations: [
    trigger('descriptionAnimation', [
      transition(':enter', [
        style({
          transform: 'translateY(-15%)',
          opacity: 0
        }),
        animate('1s ease-in-out', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('clientsTextAnimation', [
      transition(':enter', [
        style({
          transform: 'translateY(-35%)',
          opacity: 0
        }),
        animate('1s ease-in-out', style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('slideAnimationbounce', [
      transition(':enter', [
        style({
          transform: 'scale(0) rotate(360deg)',
          opacity: 0
        }),
        animate('500ms ease-in', style({
          transform: 'scale(1) rotate(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class DescriptionComponent { }
