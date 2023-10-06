import { Component } from '@angular/core';
import { Book } from 'src/app/shared/book/book.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  myBooks: Book[] = [
    new Book(
      'The Hobbit',
      'J.R.R. Tolkien',
      'Fantasy',
      'https://images-na.ssl-images-amazon.com/images/I/51ZQ7NB7KML._SX331_BO1,204,203,200_.jpg'
      ),
    new Book(
      'The Fellowship of the Ring',
      'J.R.R. Tolkien',
      'Fantasy',
      'https://images-na.ssl-images-amazon.com/images/I/51ZQ7NB7KML._SX331_BO1,204,203,200_.jpg'
      ),
    new Book(
      'The Two Towers',
      'J.R.R. Tolkien',
      'Fantasy',
      'https://images-na.ssl-images-amazon.com/images/I/51ZQ7NB7KML._SX331_BO1,204,203,200_.jpg'
      ),
    ];
}
