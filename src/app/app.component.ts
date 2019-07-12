import { Component } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private scrollService: ScrollToService,
    private router: Router
  ) { }

  title = 'bluexpress';

  scrollToTop(element) {
    if (this.router.url === '/') {
      this.scrollService.scrollTo(element);
    } else {
      this.navigateTo('/');
      setTimeout(() => {
        console.log('ELEMENT', element, this.router.url);
        this.scrollService.scrollTo(element);
      }, 500);
    }
  }

  navigateTo(path) {
    this.router.navigateByUrl(path);
  }

}
