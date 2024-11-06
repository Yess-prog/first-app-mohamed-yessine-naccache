import { Component, EventEmitter, Input, Output } from '@angular/core';
import { last } from 'rxjs';
import { Book } from '../model/books';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookEditComponent {
  @Input() lastId?:number;
  @Output() bookEdited= new EventEmitter<Book>();
  
  
  editBook(title : string, author : string, price : number){
    const oldBook =  new Book(
      
      this.lastId,
      title,
      author,
      price
    );


    this.bookEdited.emit(oldBook);

    console.log(oldBook);
  }

}
