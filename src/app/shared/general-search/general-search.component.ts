import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'general-search',
  templateUrl: './general-search.component.html',
  styleUrls: ['./general-search.component.scss']
})
export class GeneralSearchComponent implements OnInit{
  @Output() public emmitSearch: EventEmitter <string> = new EventEmitter();
   

  constructor() {}

  ngOnInit(): void {
  }

  public search(value: string) {
    this.emmitSearch.emit(value);
  }
}
