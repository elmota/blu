import { Component } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private scrollService: ScrollToService) {  }

  title = 'bluexpress';

  scrollToTop(element) {
    console.log('SCROLL', element)
    this.scrollService.scrollTo(element);
  }
}
