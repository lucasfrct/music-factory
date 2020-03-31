import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.clocking()
  }

  protected source(src) {
    var audio = document.createElement("AUDIO")
    audio.setAttribute('src', src)
    return audio
  }

  protected video() {
    var video = document.createElement("VIDEO")
    video.setAttribute('data', "https://www.youtube.com/watch?v=l0iQpvNNQEU")
    this.play(video)
    console.log(video)

  }


  public card = {
    number: "-",
    name: "-",
    duration: "-",
    src: "-"
  }

  public status = {
    clock: "-",
    previous: this.card,
    current: this.card,
    next: this.card,
  } 

  protected running = []

  public playlist = []

  public list = [
    { 
      number: "01",
      name: "Chuva de Graça",
      duration: "-",
      clock: "-", 
      src: "./assets/audios/chuva.mp3",
      active: false,
    },

    { 
      number: "02",
      name: "Sossegai",
      duration: "-",
      clock: "-", 
      src: "./assets/audios/sossegai.mp3",
      active: false,
    }
  ]

  public cards = [...this.list]

  protected play(source) {
    source.play()
  }

  protected pause(source) {
    source.currentTime = 0 
    source.pause()
  }

  protected check(source) {
      return !source.paused
  }

  protected time(source) {
      return source.currentTime
  }

  protected duration(source){
      return source.duration
  }

  protected formatTime(currentTime) {
      // 60 -> 1
    var hour = "0" + Math.floor(currentTime / 3600)
    var minutes = "0" + Math.floor(currentTime / 60)
    var seconds = "0" + Math.floor(currentTime % 60)
    return String(String(hour).substr(-2) +":"+ String(minutes).substr(-2) +":"+String(seconds).substr(-2))
  }

  public togglePlay(card) {

   
    var src = this.running.filter((source)=> {
        return (source.number == card.number)
    })
  
    if(src.length == 1) {
        
        if (this.check(src[0].source)) {
            
            this.pause(src[0].source)
            
            this.running = this.running.filter((source)=> {
                return (source.number !== card.number)
            })

            card.active = false
            card.clock = this.getClock()
            this.status.previous = card
            this.playlist.push({...card})

        } else {
            this.play(src[0].source)
            card.active = true
        }
        
    } else {
        var audio = this.source(card.src)
        this.running.push( { number: card.number, source: audio })
        this.play(audio)

        audio.onloadeddata = () => {

            setTimeout(()=> {
                //card.duration = this.formatTime(this.duration(audio))
                card.duration = this.duration(audio)
            }, 10)
        }
        
        audio.onpause = () => {
            
            setTimeout(()=> {
                card.duration = this.formatTime(this.duration(audio))
            }, 10)

        }

        audio.ontimeupdate = ( ) => {
            card.duration = this.formatTime(this.time(audio))
        }
       
        this.status.current = card
        card.active = true
    }

  }

  protected clocking() {

    setInterval(()=> {
      
        this.status.clock = this.getClock()

    }, 500);

  }

  protected addZero(i) {
    return String(`0${i}`).substr(-2)
  }      

  protected getClock() {
    var today = new Date();

    return String(
      this.addZero(today.getHours()) +":"+ 
      this.addZero(today.getMinutes()) +":"+
      this.addZero(today.getSeconds())
    )
      

  }

}
