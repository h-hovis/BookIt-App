import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  @Input() book: Book;
  @Output() bookSelected = new EventEmitter<void>();

  onBookSelected() {
    // Tell App that someone clicked on a book!
    this.bookSelected.emit();
 }
}

export class Book {
	constructor(public title: string, public author: string, public genre: string, public coverImagePath: string) {}
}
