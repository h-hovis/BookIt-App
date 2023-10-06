import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  // constructor(public title: string, public author: string, public genre: string, public coverImagePath: string) {}
}

export class Book {
	constructor(public title: string, public author: string, public genre: string, public coverImagePath: string) {}
}


