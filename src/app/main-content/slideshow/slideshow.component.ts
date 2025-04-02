import { Component } from '@angular/core';
import slideshowData from './slideshow.json';
import { SharedModule } from './../../shared.module';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss',
  animations: [
    trigger('slideAnimationleft', [
      transition(':enter', [
        style({ 
          transform: 'translateX(-20%)',
          opacity: 0 
        }),
        animate('500ms ease-in', style({ 
          transform: 'translateX(0)',
          opacity: 1 
        }))
      ])
    ]),
    trigger('slideAnimationright', [
      transition(':enter', [
        style({ 
          transform: 'translateX(20%)',
          opacity: 0 
        }),
        animate('500ms ease-in', style({ 
          transform: 'translateX(0)',
          opacity: 1 
        }))
      ]),  
    ]),
    trigger('slideDotAnimation', [
      transition(':enter', [
        style({ 
          transform: 'scale(0)',
          opacity: 0 
        }),
        animate('500ms ease-in', style({ 
          transform: 'scale(1)',
          opacity: 1 
        }))
      ]),  
    ])
  ]
})
export class SlideshowComponent {
  currentSlide = 0;
  slides = slideshowData;
  animationState = true;

  ngOnInit() {
    this.slides = slideshowData;
  }

  startSlider(index: number) {
    this.animationState = false;
    setTimeout(() => {
      this.currentSlide = index;
      this.animationState = true;
    }, 50);
  }

}
