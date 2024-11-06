import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from '../model/books';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})


export class BooksListComponent {
  title = "Liste des nouveaux livres :";
  
  books = [
    new Book(1,"Atomic Habits","James Clear",35),
    new Book(2,"The slight edge", "Jeff Olsen",30),
    new Book(3,"Power of habits","...",25),
    
    
  ];
  action = "";

  changeAction(action : string){
    this.action = action;
  }

  addBook(book: Book){
    this.books=[...this.books, book];
    this.changeAction("");
  }
}

