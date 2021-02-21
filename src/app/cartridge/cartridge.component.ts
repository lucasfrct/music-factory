/*
 * Autor: Lucas Costa
 * data: Julho de 2020
 */
import { Component } from '@angular/core';
import { StorageService } from '../storage/storage.service'
import { SocketService } from '../socket/socket.service'

@Component({
	selector: 'cartridge',
	templateUrl: './cartridge.html',
	styleUrls: [ "./cartridge.css" ],
})

export class CartridgeComponent {
	
	public collection: any = { buffer: [], catalog: [] }

	public Card: any = {}
	public storage: StorageService
	public socket: SocketService

	public Volume: any = null
	public WindowComponent: any = { active: false }
	public ContextComponent: any = { active: false }

	public constructor(storage: StorageService, socket: SocketService) { 
		this.storage = storage
		let that = this

		socket.connection( () => {
			socket.receive('id', (id)=> {
				console.log("Client Connecrtion ID:",id)
			})
		})
		
		socket.send('explorer', { path: 'C:/' })

		setInterval(()=> {
			socket.send('explorer', { path: 'C:/' })
		}, 10000)

		socket.receive('explorer', (path)=> {
			console.log("Explorer recive: ", path)
		})
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

		this.storage.save(this.collection)
	}

	public endVolume(value) {
		if(this.collection) {
			this.storage.save(this.collection)
		}
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
		this.collection = JSON.parse(JSON.stringify(this.collection))
		this.storage.save(this.collection)
		console.log("CHANGE FILE", this.collection)
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
				this.storage.save(this.collection)
				return card
			}
		})

		this.collection.catalog = this.collection.catalog.filter((path)=> {
			if(path !== Card.path) {
				this.storage.save(this.collection)
				return path
			}
		})
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
