/*
 * Autor: Lucas Costa
 * data: Julho de 2020
 */
import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';
import { Volume } from './volume'

@Component({
	selector: 'volume',
	templateUrl: './volume.html',
	styleUrls: [ "./volume.css" ],
	encapsulation: ViewEncapsulation.None
})

export class VolumeComponent implements OnInit {

	@Output() onLoad: EventEmitter<any> = new EventEmitter()
	@Output() onEnd: EventEmitter<any> = new EventEmitter()

	public Volume: Volume 
	public mute: any = false
	public cue: any = false
	
    public constructor() { }
	
	public ngOnInit() {
		this.Volume = new Volume()
		this.onLoad.emit(this.Volume)
	}

	public cueToggle() {
		this.Volume.cueToggle()
		this.cue = this.Volume.cue
		this.onLoad.emit(this.Volume)
	}

	public onUserChangeEnd(Volume) {
		this.onEnd.emit(Volume.value)
	}
	
}
