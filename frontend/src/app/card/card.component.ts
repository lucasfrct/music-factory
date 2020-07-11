/*
 * Autor: Lucas Costa
 * data: Julho de 2020
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from './card'

@Component({
	selector: 'card',
	templateUrl: './card.html',
	styleUrls: [ "./card.css" ]
})

export class CardComponent implements OnInit {
	
	@Input() path: any = ""
	@Input() disabled: any = false

	@Output() played: EventEmitter<any> = new EventEmitter()
	@Output() changeContextmenu: EventEmitter<any> = new EventEmitter()
	@Output() onLoad: EventEmitter<any> = new EventEmitter()
	
	public Card: any = { path: "", cue: false }
	
	public constructor() { }
	
	public ngOnInit() {
		this.Card = new Card(this.path)
		this.onLoad.emit(this.Card)
	}

	public play(Card) {
		Card.disabledToggle(this.disabled)
		this.played.emit(Card)
	}

	public changeContextMenu(Card) {
		Card.contextmenu = !Card.contextmenu 
		this.enableContextMenu()
		this.changeContextmenu.emit(Card)
	}

	public enableContextMenu() {
		document.addEventListener('contextmenu', (event)=> { event.preventDefault() })
	}
	
}
