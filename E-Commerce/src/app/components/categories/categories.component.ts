import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Output() 
  sendCategory: EventEmitter<string> = new EventEmitter<string>() 

  constructor() { }

  ngOnInit(): void {
  }
  
  getCategory($event:any){
    console.log($event.target.classList.toString())
    this.sendCategory.emit($event.target.classList.toString());
  }

}
