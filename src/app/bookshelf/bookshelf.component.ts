import { Component } from '@angular/core';
import { BookComponent } from '../shared/book/book.component';
import { Book } from '../shared/book/book.model';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent {
  selectedBook: Book;
}
