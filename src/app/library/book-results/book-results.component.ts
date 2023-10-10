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
      'Sherlock Holmes',
      'Arthur Conan Doyle',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'),
    new Book(
      'The Hound of the Baskervilles',
      'Arthur Conan Doyle',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'),
    new Book(
      'The Sign of the Four',
      'Arthur Conan Doyle',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'),
    ];
}
