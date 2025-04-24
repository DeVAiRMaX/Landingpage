import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ClientsComponent } from './clients/clients.component';
import { DescriptionComponent } from './description/description.component';
import { InfoComponent } from './info/info.component';
import { HelpingComponent } from './helping/helping.component';
import { CaringMarketingComponent } from './caring-marketing/caring-marketing.component';
import { FooterComponent } from './footer/footer.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SharedModule } from '../shared.module';

// AnimationKey definiert die zulässigen Animationseigenschaften
type AnimationKey =
  | 'scrollAnimationDescription'
  | 'scrollAnimationInfo'
  | 'scrollAnimationHelping'
  | 'scrollAnimationCaringMarketing'
  | 'scrollAnimationClient'
  | 'scrollAnimationSlider'
  | 'scrollAnimationFooter'
  | 'scrollAnimationHeader';

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
      state('hidden', style({
        opacity: 0,
        // transform: 'translateX(-3%)'
      })),
      state('visible', style({
        opacity: 1,
        // transform: 'translateX(0)'
      })),
      transition('hidden <=> visible', animate('500ms ease-in-out'))
    ]),
    trigger('loadAnimation', [
      state('hidden', style({
        opacity: 0,
      })),
      state('visible', style({
        opacity: 1,
      })),
      transition('hidden <=> visible', animate('500ms ease-in-out'))
    ]),
  ]
})
export class MainContentComponent implements AfterViewInit {

  scrollProgress = 0;
  isScrolling = false;

  scrollAnimationHeader: 'hidden' | 'visible' = 'hidden';
  scrollAnimationDescription: 'hidden' | 'visible' = 'hidden';
  scrollAnimationInfo: 'hidden' | 'visible' = 'hidden';
  scrollAnimationHelping: 'hidden' | 'visible' = 'hidden';
  scrollAnimationCaringMarketing: 'hidden' | 'visible' = 'hidden';
  scrollAnimationClient: 'hidden' | 'visible' = 'hidden';
  scrollAnimationSlider: 'hidden' | 'visible' = 'hidden';
  scrollAnimationFooter: 'hidden' | 'visible' = 'hidden';

  @ViewChild('header', { static: true, read: ElementRef }) headerElement!: ElementRef;
  @ViewChild('description', { static: true, read: ElementRef }) descriptionElement!: ElementRef;
  @ViewChild('info', { static: true, read: ElementRef }) infoElement!: ElementRef;
  @ViewChild('helping', { static: true, read: ElementRef }) helpingElement!: ElementRef;
  @ViewChild('caringMarketing', { static: true, read: ElementRef }) caringMarketingElement!: ElementRef;
  @ViewChild('client', { static: true, read: ElementRef }) clientElement!: ElementRef;
  @ViewChild('slider', { static: true, read: ElementRef }) sliderElement!: ElementRef;
  @ViewChild('footer', { static: true, read: ElementRef }) footerElement!: ElementRef;

  ngAfterViewInit(): void {
    // Array mit Konfigurationen – die Property-Werte werden als AnimationKey gecastet
    const configs: { element: HTMLElement; property: AnimationKey }[] = [
      { element: this.headerElement?.nativeElement, property: 'scrollAnimationHeader' as AnimationKey },
      { element: this.descriptionElement?.nativeElement, property: 'scrollAnimationDescription' as AnimationKey },
      { element: this.infoElement?.nativeElement, property: 'scrollAnimationInfo' as AnimationKey },
      { element: this.helpingElement?.nativeElement, property: 'scrollAnimationHelping' as AnimationKey },
      { element: this.caringMarketingElement?.nativeElement, property: 'scrollAnimationCaringMarketing' as AnimationKey },
      { element: this.clientElement?.nativeElement, property: 'scrollAnimationClient' as AnimationKey },
      { element: this.sliderElement?.nativeElement, property: 'scrollAnimationSlider' as AnimationKey },
      { element: this.footerElement?.nativeElement, property: 'scrollAnimationFooter' as AnimationKey },
    ].filter(c => !!c.element);

    // Observer, der den Zustand der Animation anhand der Sichtbarkeit ändert
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const config = configs.find(c => c.element === entry.target);
        if (config) {
          this[config.property] = entry.isIntersecting ? 'visible' : 'hidden';
        }
      });
    }, { threshold: 0.5 });

    // Alle konfigurierten Elemente beobachten
    configs.forEach(c => c.element && observer.observe(c.element));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;
    this.isScrolling = scrollTop > 20;
  }
}
