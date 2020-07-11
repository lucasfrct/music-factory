/*
 * Autor: Lucas Costa
 * data: Julho de 2020
 */
import { Component } from '@angular/core';
import { StorageService } from '../storage/storage.service'

@Component({
	selector: 'cartridge',
	templateUrl: './cartridge.html',
	styleUrls: [ "./cartridge.css" ],
})

export class CartridgeComponent {
	
	public collection: any = { buffer: [], catalog: [] }

	public Card: any = {}
	public storage: StorageService

	public collections: any = []

	public Volume: any = null
	public WindowComponent: any = { active: false }
	public ContextComponent: any = { active: false }

	public constructor(storage: StorageService) { 
		this.storage = storage
	}
	
	public loadCard(Card) {
		this.collection.buffer = this.collection.buffer.map((card)=> {
			if(card.path === Card.path) {
				Card.name = card.name
				Card.vol = card.vol
				Card.volume(Card.vol)
				card = Card
			}
			return card 
		})
	}

	public loadWindow(WindowComponent) {
		WindowComponent.active = this.WindowComponent.active
		this.WindowComponent = WindowComponent
	}

	public loadVolume(Volume) {
		this.Volume = Volume
	}

	public loadContext(ContextComponent) {
		ContextComponent.Card = this.ContextComponent.Card
		this.ContextComponent = ContextComponent
	}

	public changeCollection(collection) {
		if(collection) {
			this.BufferizeCards()
			this.collection = collection
		}
	}

	public changeFile(file) {
		this.collection.catalog.push(file.name)
		this.storage.save(this.collection)

	}

	public BufferizeCards(CardFocus = { path: "", cue: false }) {
		
		if(
			CardFocus.path.length > 0 
			&& (this.collection.buffer.indexOf(CardFocus) == -1)
		) {
			this.collection.buffer.push(CardFocus)
		}

		this.collection.buffer.map((Card)=> {
			if(CardFocus.path !== Card.path) {
				
				if(typeof Card.stop == 'function' && !CardFocus.cue) {
					Card.stop()
				}

				if(!CardFocus.cue) {
					Card.active = false
				}
				
				Card.cue = false

			}
		})
	}

	public PlayCard(Card) {

		this.Card = Card
		this.Volume.Factory(Card)
		this.BufferizeCards(Card)
		Card.play()
		this.storage.save(this.collection)
		
		console.log("PLAYED EVENT", Card)
	}

	public toggleWindow() {
		if(this.collection.name && this.collection.name.length > 0) {
			this.WindowComponent.active = !this.WindowComponent.active
		}
	}

	public changeContextMenu(Card){
		this.Card = Card
		this.ContextComponent.active = Card.contextmenu
		this.ContextComponent.Card = Card
	}

	public removeCard(Card) {
		
		this.collection.buffer = this.collection.buffer.filter((card)=> {
			if(Card.path !== card.path) {
				return card
			}
		})

		this.collection.catalog = this.collection.catalog.filter((path)=> {
			if(path !== Card.path) {
				return path
			}
		})

		this.storage.save(this.collection)
		console.log("Remove", this.collection)
	}

	public renameCard(Card) {
		this.Card = Card
		this.storage.save(this.collection)
	}

	public reset() {
		this.storage.clear()
	}

	public hasKey(obj, key) {
		return (JSON.stringify(obj).indexOf(JSON.stringify(key)) !== -1)
	}

}
