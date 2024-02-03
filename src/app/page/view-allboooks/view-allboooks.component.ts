import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-allboooks',
  standalone: true,
  imports: [],
  templateUrl: './view-allboooks.component.html',
  styleUrl: './view-allboooks.component.css'
})
export class ViewAllboooksComponent implements OnInit{
  private http:any;
  public bookList:any;

  constructor(private httpClient:HttpClient){
    this.http=httpClient;
  }
  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(){
    this.http.get('http://localhost:8080/book/get').subscribe((data:any)=>{
      this.bookList=data;
      console.log(this.bookList); 
    });
  }
}
