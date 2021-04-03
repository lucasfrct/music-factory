import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playbar',
  templateUrl: './playbar.component.html',
  styleUrls: ['./playbar.component.css', './player.css']
})
export class PlaybarComponent implements OnInit {

  timeline: number = 0

  public pictureManip(value: any) {
    console.log("VALUE", value)
  }

  formatLabel(value: number) {
    if (value >= 0) {
      return Math.round(value / 1) + 's';
    }

    return value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
