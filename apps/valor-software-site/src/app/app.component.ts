import {AfterContentInit, Component} from '@angular/core';

@Component({
  selector: 'valor-software-site-base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit{
  title = 'valor-software-site';


  ngAfterContentInit() {
      window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
