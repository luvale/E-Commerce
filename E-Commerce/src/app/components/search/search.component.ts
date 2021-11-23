import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {

  @Output() 
  searchEmitter: EventEmitter<string> = new EventEmitter<string>() 

  constructor() { }

  ngAfterViewInit(): void {
    const search = document.getElementById('search')!;
    const keyup = fromEvent(search, 'keyup');
    keyup.pipe(
      map((e:any) => e.currentTarget.value),
      debounceTime(400)
    ).subscribe(res => this.searchEmitter.emit(res));
  }

}
