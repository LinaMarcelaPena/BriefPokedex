import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.scss']
})
export class GeneralHeaderComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {

    $('.menu-burger, .menu-items').on('click', function() {
      $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
      $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    });
  } 
}
