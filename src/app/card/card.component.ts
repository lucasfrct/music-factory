import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input() card: any
    @Output() list = new EventEmitter()

    constructor() { }

    ngOnInit(): void { }

    public cardClick(card: any) {
        console.log("CLICK card: ", card)

        console.log("CLICK card: ", card.preview)

        let au = new Audio(card.preview)
        au.play()
        
        setTimeout(()=> { au.pause() }, 3000)

    }

}
