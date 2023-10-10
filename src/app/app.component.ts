import { Component } from '@angular/core';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookIt-App';
  pageDisplayed = "bookshelf";

  onNavigatePage(page: string) {
    // console.log("APP COMP:", page)
    this.pageDisplayed = page;
  }
}
