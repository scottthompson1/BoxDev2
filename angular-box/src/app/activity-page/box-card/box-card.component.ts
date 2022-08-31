import { Component, Input, OnInit } from '@angular/core';
import { Box } from 'src/app/objects/box';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.css']
})
export class BoxCardComponent implements OnInit {
  @Input() box!: Box;
  addBox: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log("Events log" + JSON.stringify(this.box))
  }

  displayEvent(){
    this.addBox = !this.addBox;
  }

}
