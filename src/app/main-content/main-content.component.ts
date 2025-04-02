import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ClientsComponent } from './clients/clients.component';
import { DescriptionComponent } from './description/description.component';
import { InfoComponent } from './info/info.component';
import { HelpingComponent } from './helping/helping.component';
import { CaringMarketingComponent } from './caring-marketing/caring-marketing.component';
import { FooterComponent } from './footer/footer.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeaderComponent,
    SlideshowComponent,
    ClientsComponent,
    DescriptionComponent,
    InfoComponent,
    HelpingComponent,
    CaringMarketingComponent,
    FooterComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),

      transition('hidden => visible', animate('750ms ease-in-out'))
    ])
  ]
})
export class MainContentComponent implements AfterViewInit {

  scrollAnimationDescription: 'hidden' | 'visible' = 'hidden';
  scrollAnimationInfo: 'hidden' | 'visible' = 'hidden';
  scrollAnimationHelping: 'hidden' | 'visible' = 'hidden';
  scrollAnimationCaringMarketing: 'hidden' | 'visible' = 'hidden';
  scrollAnimationClient: 'hidden' | 'visible' = 'hidden';

  @ViewChild('description', { static: true, read: ElementRef }) descriptionElement!: ElementRef;
  @ViewChild('info', { static: true, read: ElementRef }) infoElement!: ElementRef;
  @ViewChild('helping', { static: true, read: ElementRef }) helpingElement!: ElementRef;
  @ViewChild('caringMarketing', { static: true, read: ElementRef }) caringMarketingElement!: ElementRef;
  @ViewChild('client', { static: true, read: ElementRef }) clientElement!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === this.descriptionElement.nativeElement && this.scrollAnimationDescription !== 'visible') {
            this.scrollAnimationDescription = 'visible';
            console.log('Description sichtbar');
            obs.unobserve(entry.target);
          }
          if (entry.target === this.infoElement.nativeElement && this.scrollAnimationInfo !== 'visible') {
            this.scrollAnimationInfo = 'visible';
            console.log('Info sichtbar');
            obs.unobserve(entry.target);
          }
          if (entry.target === this.helpingElement.nativeElement && this.scrollAnimationHelping !== 'visible') {
            this.scrollAnimationHelping = 'visible';
            console.log('Helping sichtbar');
            obs.unobserve(entry.target);
          }
          if (entry.target === this.caringMarketingElement.nativeElement && this.scrollAnimationCaringMarketing !== 'visible') {
            this.scrollAnimationCaringMarketing = 'visible';
            console.log('Caring Marketing sichtbar');
            obs.unobserve(entry.target);
          }
          if (entry.target === this.clientElement.nativeElement && this.scrollAnimationClient !== 'visible') {
            this.scrollAnimationClient = 'visible';
            console.log('Caring Marketing sichtbar');
            obs.unobserve(entry.target);
          }
        }
      });
    }, { threshold: 0.5 });

    if (this.descriptionElement?.nativeElement) {
      observer.observe(this.descriptionElement.nativeElement);
    }
    if (this.infoElement?.nativeElement) {
      observer.observe(this.infoElement.nativeElement);
    }
    if (this.helpingElement?.nativeElement) {
      observer.observe(this.helpingElement.nativeElement);
    }
    if (this.caringMarketingElement?.nativeElement) {
      observer.observe(this.caringMarketingElement.nativeElement);
    }
    if (this.clientElement?.nativeElement) {
      observer.observe(this.clientElement.nativeElement);
    }
  }
}
