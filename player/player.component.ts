import { Component, OnInit, HostListener } from '@angular/core'
import { Options } from 'ng5-slider';
import { PlayerFactoryCards } from './player.factory.card'
import { PlayerCard } from './player.card'
import { PlayerEffects } from './player.effects'
import { PlayerClock } from './player.clock'
import { CatalogService } from './player.service'

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: [ 
        './css/player.component.css', 
        './css/player.bar.status.css', 
        './css/player.list.css',
        './css/player.cards.css',
        './css/player.controls.css'
    ],
})

export class PlayerComponent extends PlayerEffects implements OnInit {

    private key: any
    private catalogService: any
    
    public timer: any // relógio
    public cue: any
    public cards = []
    public playedCards = []

    public options: Options = { floor: 0, ceil: 100 };

    public status = {
        offair: new PlayerCard({ name: "", src: ""}),
        onair: new PlayerCard({ name: "", src: ""}),
        cue: new PlayerCard({ name: "", src: ""}),
    }

    constructor(private CatalogService: CatalogService) {
        super( );
        this.catalogService = CatalogService
    }

    ngOnInit(): void {

        this.clock()

        this.catalogService.getBgs().subscribe((cards: any) => {
            this.cards = new PlayerFactoryCards(cards).shape()
        });
    }

    protected clock() {
        setInterval(()=> { this.timer = new PlayerClock().time() }, 400);
    }

    @HostListener('document:keydown', ['$event'])
    public handleKeyboardEvent(event: KeyboardEvent) {
        this.key = event.key;
        
        this.controlVolume(this.key)
        
        this.controlCue(this.key)
    }

    protected play(sound) {
        sound.play()
    }

    protected pause(sound) {
        sound.pause()
    }

    protected stop(sound) {
        this.resetTime(sound)
        sound.pause()
    }

    protected check(sound) {
        return !sound.paused
    }

    protected time(sound) {
        return sound.currentTime
    }

    protected resetTime(sound) {
        sound.currentTime = 0
    }

    protected duration(sound){
        return sound.duration
    }

    protected volume(sound){
        return sound.volume
    }

    protected parseVolume(volume) {
        return (volume / 100)
    }

    protected formatVolume(volume) {
        return (volume * 100)
    }

    public togglePlay(card) {
        console.log("Click")
        console.log(this.check(card.sound))

        // Pause Audio
        if(this.check(card.sound) && !this.cue) {
            console.log("PAUSE", card)
            //this.pause(card.sound)
            card.sound.pause()

            //this.actionPause(card)
            

            //this.fadeOut(card, ()=> {
            //})

        }

        // CUE Audio
        if(this.cue) {
            card.cue = !card.cue
            
            //this.status.cue = card

            if(card.cue) {
                this.status.cue = card
            } else {
                this.status.cue = null
            }
        }

        // Play Audio
        if(!this.check(card.sound) && !this.cue){
            //this.fadeIn(card)
            this.play(card.sound)
            //this.onTime(card)
            //this.actionPlay(card)
        }

    }

    private actionPlay(card) {
        card.sound.onplay = () => {
            card.active = true
            card.cue = false
            card.clock = new PlayerClock().time()
            this.status.onair = card
        }
    }

    private actionPause(card){
        card.sound.onpause = () => {

            card.active = false
            card.cue = false
            card.clock = new PlayerClock().time()

            this.resetTime(card.sound)
            this.status.offair = card
            this.playedCards.unshift({...card})
        }
    }

    private onTime(card, fn = null) {
        let clock = new PlayerClock()

        card.sound.ontimeupdate = ( ) => {
            console.log("time")
            card.time = clock.format(this.time(card.sound))
            card.countdown = clock.format(this.duration(card.sound) - this.time(card.sound))
            card.sound.volume = this.parseVolume(card.volume)
        }
    }

    public controlVolume(key) {

        this.status.onair.volume = (this.status.onair.volume <= this.options.floor) ? this.options.floor : this.status.onair.volume
        this.status.onair.volume = (this.status.onair.volume >= this.options.ceil) ? this.options.ceil : this.status.onair.volume

        switch (key) {
            case "ArrowLeft":
                this.status.onair.volume += - 1
                break;
            case "ArrowRight":
                this.status.onair.volume += 1
                break;
            case "ArrowUp":
                this.status.onair.volume += 10
                break;
            case "ArrowDown":
                this.status.onair.volume += - 10
                break;
        }
    }

    public toggleCue() {
        return this.cue = !this.cue
    }

    protected controlCue(key) {
        if( "c" == key) { this.toggleCue() }
    }

}
