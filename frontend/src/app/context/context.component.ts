/*
 * Autor: Lucas Costa
 * data: Julho de 2020
 */
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'context',
    templateUrl: './context.html',
    styleUrls: [ './context.css']
})

export class ContextComponent implements OnInit {
    
    @Input() Card: any = { name: "" }
    @Output() onLoad: EventEmitter<any> = new EventEmitter() 
    @Output() onRemove: EventEmitter<any> = new EventEmitter()
    @Output() onRename: EventEmitter<any> = new EventEmitter()

    public active = true
    public renameToggle = false
    public removeToggle = false

    constructor() {}

    ngOnInit() { 
        this.onLoad.emit(this)
    }

    public toggleContext() {
        this.active = !this.active
        this.Card.contextmenu = this.active
    }

    public rename(Card){
        this.renameToggle = !this.renameToggle
    }
    
    public saveName(Card) {
        this.toggleContext()
        this.onRename.emit(Card)
    }

    public remove(Card){
        this.toggleContext()
        this.onRemove.emit(Card)
    }


}
