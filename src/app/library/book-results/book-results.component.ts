import { Component } from '@angular/core';
import { Book } from 'src/app/shared/book/book.component';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent {
  allBooks: Book[] = [
    new Book(
      'The Hobbit',
      'J.R.R. Tolkien',
      'Fantasy',
      'https://source.unsplash.com/50x50/?fantasy,book'),

    new Book(
      'The Fellowship of the Ring',
      'J.R.R. Tolkien',
      'Fantasy',
      'https://source.unsplash.com/50x50/?fantasy,book'),

    new Book(
      'The Two Towers',
      'J.R.R. Tolkien',
      'Fantasy',
      'https://source.unsplash.com/50x50/?fantasy,book'),
    ];
}
