/*
 * Autor: Lucas Costa
 * data: Julho de 2020
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WindowService } from './window.service'


@Component({
	selector: 'window',
	templateUrl: './window.html',
	styleUrls: [ "./window.css" ]
})

export class WindowComponent implements OnInit {
	
	@Input() collection: any
	@Output() onLoad: EventEmitter<any> = new EventEmitter()
	@Output() changeFile: EventEmitter<any> = new EventEmitter()
	
	private history: any = []
	private service: WindowService
	public path: any = ""
	public file: any = {}
	public active = false

	public directories: any = []
	public play: any

	public constructor(service: WindowService ) {
		this.service = service
	}

	ngOnInit() {
		this.history = (this.collection.history.length > 0) ? this.collection.history: ["drives"]
		this.load(this.history.pop())
		this.onLoad.emit(this)
	}

	public load(path) {
		
		this.history.push(path)
		this.collection.history.push(path)

		this.service.load(path).subscribe((directories)=> {
			this.directories = directories
			this.path = path
		})
	}

	public select(directory) {
		if(directory.type == "directory") {
			this.load(directory.name)
		}

		if(directory.type == "file") {
			this.active = false
			this.file = directory
			//this.collection.catalog.push(this.file)
			this.changeFile.emit(this.file)
		}
	}

	public return() {
		
		if(this.history.length > 1) {
			this.history = this.history.slice(0,-1)
		} else {
			this.history [0] = 'drives'
		}

		var parent = this.history.pop()
		 this.path = parent
		this.load(parent)
	}

	public toggleWindow() {
		this.active = !this.active
	}
}
