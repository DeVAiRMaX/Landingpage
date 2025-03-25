import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ClientsComponent } from './clients/clients.component';
import { DescriptionComponent } from './description/description.component';
import { InfoComponent } from './info/info.component';
import { HelpingComponent } from './helping/helping.component';

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
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
