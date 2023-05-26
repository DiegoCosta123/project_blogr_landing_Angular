import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent {

  constructor(private route: ActivatedRoute, private router: Router) {}

  hidden = true;

  navbarMobile = 1275;

  scrollTo(elementId: string, page: string) {
    const currentPage = this.route.snapshot.url[0]?.path || '';
    console.log('currentPage', currentPage);

    if (currentPage !== page) {
      this.router.navigate([page]);
    }

    setTimeout(() => {
      const element = document.getElementById(elementId) as HTMLElement;
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 250);

    this.toggleNav();
  }

  toggleNav() {
    if (window.innerWidth > this.navbarMobile) {
      return;
    }

    this.hidden = !this.hidden;

    document.getElementsByTagName('html')[0].style.overflow = this.hidden
      ? 'auto'
      : 'hidden';
  }

}
