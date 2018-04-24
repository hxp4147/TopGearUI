import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displaytab(event){
    event.srcElement.classList('show');
    event.srcElement.classList('active');
  }
}
