import { Component, OnInit, Input, Output, EventEmitter, ɵCodegenComponentFactoryResolver } from '@angular/core';

@Component({
    selector: 'app-playbar',
    templateUrl: './playbar.component.html',
    styleUrls: ['./playbar.component.css', './player.css']
})

export class PlaybarComponent implements OnInit {

    @Input() user: any 
    @Input() sound: any = {
        audio: null,
        cursor: 0,
        volume: 0,
        shuffle: false,
        repeat: false,
        prev: false,
        next: false,
        play: ()=> { },
        onPlaylist: false,
        volumeActive: false,
    }

    @Output() barEvent = new EventEmitter<any>()

    constructor() { }

    ngOnInit(): void { }

    public changeCursor(value: any) {
        this.sound.cursor = value
        this.barEvent.emit(this.sound)
    }

    public changeVolume(value: any) {
        this.sound.volume = value
        this.barEvent.emit(this.sound)
    }

    public formatTime(value: number) {
        if (value >= 0) {
            return Math.round(value / 1) + 's';
        }

        return value;
    }

    public formatVolume(value: number) {
        if (value >= 0) {
            return Math.round(value / 1) + 's';
        }

        return value;
    }

    public shuffleEvent() {
        this.sound.shuffle = !this.sound.shuffle 
        this.barEvent.emit(this.sound)
    }

    public prevEvent() {
        this.sound.prev = false
        this.barEvent.emit(this.sound)
    }

    public playEvent() {
        this.sound.play()
        this.barEvent.emit(this.sound)
    }


    public nextEvent() {
        this.sound.next = false
        this.barEvent.emit(this.sound)
    }

    public repeatEvent() {
        this.sound.repeat = !this.sound.repeat
        this.barEvent.emit(this.sound)
    }

    public playListEvent() {
        this.sound.onPlaylist = !this.sound.onPlaylist
        this.barEvent.emit(this.sound)
    }

    public volumeActive() {
        this.sound.volumeActive = !this.sound.volumeActive
        this.barEvent.emit(this.sound)
    }



}
