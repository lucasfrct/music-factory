import { CardClock } from './card.clock'

export class Card  {

    public cue: any = false
    public active: any = false
    public disabled: any = false
    public mute: any = false
    public contextmenu: any = false
    
    public path = ""        // caminho para o arquivo
    public number = ""
    public source = null    // objeto de audio
    
    public name = ""
    
    public vol = 100
    public time = "00:00:00"
    public duration = "00:00:00"
    public countdown ="00:00:00"
    
    public effects = []
    public metadata = { size: 0, atist: '', title: "", album: "", collection: "", naumber: "", track:"" }

    private endpoint = "http://localhost:6060/source?path="

    public constructor(path) {
        this.name = path.split("/").pop()
        this.path = path

        this.source = new Audio(this.endpoint+this.path)
        this.source.load()
        
        this.source.addEventListener("canplaythrough", (event) => {
            this.update()
            this.source.preload = 'auto'
        })
    }

    public Factory(source) {
        this.source = source
        return this.source
    }

    public play() {

        
        this.activeToggle()
        if(this.active) {
            
            // RELOAD SE PLAY ERROR
            setTimeout(()=> {
                if(!this.source.played.length) { location.reload() }
            }, 200)

            this.source.load()
            this.source.play()

        } else {
            this.stop()
        } 
            
    }

    public pause() {
        this.source.pause() 
    }

    public stop() {
        this.source.pause()
        this.source.currentTime = 0

        setTimeout(()=> { this.time = this.duration },10)
    }

    public update(callback = null) {

        this.source.addEventListener("loadeddata", ()=> {
        })
        
        this.source.addEventListener("durationchange", ()=> {
            
            if(isFinite(this.source.duration)) {
                this.duration = new CardClock().format(this.source.duration)
                this.countdown = new CardClock().format((this.source.duration - this.source.currentTime))
            }

            this.time = this.duration
            
        })
        
        this.source.addEventListener("timeupdate", ()=> {
            
            this.time = new CardClock().format(this.source.currentTime)
            
            this.countdown = this.time
            
            if(isFinite(this.source.duration)) {
                this.countdown = new CardClock().format((this.source.duration - this.source.currentTime))
            }

            if(callback !== null) {
                callback(this)
            }
        })
        
        this.source.addEventListener("play", ()=> {

        })

        this.source.addEventListener("pause", ()=> {
            setTimeout(()=> {
                this.time = this.duration
            }, 200)
        })

        this.source.addEventListener("ended", ()=> {
            this.active = false
            this.time = this.duration
            this.countdown = this.duration
        })

        this.source.addEventListener("volumechange", ()=> {
            
        })
    }

    public volume(volume = null) {
        
        this.vol = volume
        
        if(this.vol !== null) {
            if(this.vol >= 1) {
                this.muted(false)
                return this.source.volume = this.logVolume(this.vol)
            } else {
                this.muted(true)
                return 0
            }
        }

        return this.vol 
    }

    public logVolume(volume) {
        var minp = 0
        var maxp = 100
        var minv =  Math.log(0.0001)
        var maxv = Math.log(1)

        if(volume <= 100) { minv =  Math.log(0.0001) }
        if(volume <=  50) { minv =  Math.log(0.00005) }
        if(volume <=  20) { minv =  Math.log(0.00001) }
        if(volume <=  10) { minv =  Math.log(0.000005) }
        if(volume <=   3) { minv =  Math.log(0.000000001) }
        
        var scale = ( ( maxv - minv ) / ( maxp - minp ) )

        return Math.exp( minv + scale * (volume - minp) )
    }

    public muted(mute) {
        this.mute = mute
        this.source.muted = this.mute
    }

    public cueToggle(cue) {
        if(!this.active) {
            this.cue = cue
        }
    }

    public activeToggle() {
        if(!this.disabled && !this.cue) {
            this.active = !this.active
        }
    }

    public disabledToggle(disabled) {
        this.disabled = disabled
	}
}