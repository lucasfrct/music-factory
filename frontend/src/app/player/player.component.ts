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
        src: "-",
        source: null,
        volume: 0,
    }

    public status = {
        clock: "-",
        previous: this.card,
        current: this.card,
    }

    protected running = []

    public playlist = []

    public list = [
        {
            number: "01",
            name: "Alternate - Dance",
            duration: "-",
            clock: "-",
            src: "./assets/audios/Alternate.mp3",
            active: false,
        },

        {
            number: "02",
            name: "BG 1",
            duration: "-",
            clock: "-",
            src: "./assets/audios/bg-white-1.mp3",
            active: false,
        },

        {
            number: "03",
            name: "BG 2",
            duration: "-",
            clock: "-",
            src: "./assets/audios/bg-white-2.mp3",
            active: false,
        },

        {
            number: "04",
            name: "BG 3",
            duration: "-",
            clock: "-",
            src: "./assets/audios/bg-white-3.mp3",
            active: false,
        },

        {
            number: "05",
            name: "Discagem 1",
            duration: "-",
            clock: "-",
            src: "./assets/audios/cel-disc.mp3",
            active: false,
        },
        {
            number: "06",
            name: "Competição 1",
            duration: "-",
            clock: "-",
            src: "./assets/audios/competition-1.mp3",
            active: false,
        },
        {
            number: "07",
            name: "Competição 2",
            duration: "-",
            clock: "-",
            src: "./assets/audios/competition-2.mp3",
            active: false,
        },
        {
            number: "08",
            name: "Competição 3",
            duration: "-",
            clock: "-",
            src: "./assets/audios/competition-3.mp3",
            active: false,
        },
        {
            number: "09",
            name: "Intro",
            duration: "-",
            clock: "-",
            src: "./assets/audios/intro.mp3",
            active: false,
        },
        {
            number: "10",
            name: "Jornal 1",
            duration: "-",
            clock: "-",
            src: "./assets/audios/jornal-1.mp3",
            active: false,
        },
        {
            number: "11",
            name: "Jornal 2",
            duration: "-",
            clock: "-",
            src: "./assets/audios/jornal-2.mp3",
            active: false,
        },
        {
            number: "12",
            name: "Jornal 3",
            duration: "-",
            clock: "-",
            src: "./assets/audios/jornal-3.mp3",
            active: false,
        },
        {
            number: "13",
            name: "Jornal 4",
            duration: "-",
            clock: "-",
            src: "./assets/audios/jornal-4.mp3",
            active: false,
        },
        {
            number: "14",
            name: "Jornal 5",
            duration: "-",
            clock: "-",
            src: "./assets/audios/jornal-5.mp3",
            active: false,
        },
        {
            number: "15",
            name: "Jornal 6",
            duration: "-",
            clock: "-",
            src: "./assets/audios/jornal-6.mp3",
            active: false,
        },
        {
            number: "16",
            name: "Jornal 7",
            duration: "-",
            clock: "-",
            src: "./assets/audios/jornal-7.mp3",
            active: false,
        },
        {
            number: "17",
            name: "Jornal 8",
            duration: "-",
            clock: "-",
            src: "./assets/audios/jornal-8.mp3",
            active: false,
        },
        {
            number: "18",
            name: "Julgamento",
            duration: "-",
            clock: "-",
            src: "./assets/audios/Judgement.mp3",
            active: false,
        },
        {
            number: "19",
            name: "Eletro Pop",
            duration: "-",
            clock: "-",
            src: "./assets/audios/Nightlife.mp3",
            active: false,
        },
        {
            number: "20",
            name: "Pop Happy",
            duration: "-",
            clock: "-",
            src: "./assets/audios/pop-happy.mp3",
            active: false,
        },
        {
            number: "21",
            name: "Rock Progressivo",
            duration: "-",
            clock: "-",
            src: "./assets/audios/rock-progressive.mp3",
            active: false,
        },
        {
            number: "22",
            name: "Sugar",
            duration: "-",
            clock: "-",
            src: "./assets/audios/Sugar.mp3",
            active: false,
        },
        {
            number: "23",
            name: "Pop Violão",
            duration: "-",
            clock: "-",
            src: "./assets/audios/violon.mp3",
            active: false,
        },
        {
            number: "24",
            name: "Superação 1",
            duration: "-",
            clock: "-",
            src: "./assets/audios/vitoria-1.mp3",
            active: false,
        },
        {
            number: "25",
            name: "Discagem 2",
            duration: "-",
            clock: "-",
            src: "./assets/audios/connection.mp3",
            active: false,
        },
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

    protected volume(source){
        return source.volume
    }

    protected formatTime(currentTime) {
        // 60 -> 1
        var hour = "0" + (Math.floor(currentTime / 3600) % 60)
        var minutes = "0" + ( Math.floor(currentTime / 60) % 60)
        var seconds = "0" + Math.floor(currentTime % 60)
        return String(String(hour).substr(-2) +":"+ String(minutes).substr(-2) +":"+String(seconds).substr(-2))
    }

    public togglePlay(card) {

        var src = this.running.filter((source)=> {
            return (source.number == card.number)
        })

        if(src.length == 1) {

            if (this.check(card.source)) {

                card.active = false
                card.clock = this.getClock()
                card.duration = this.duration(card.source)
                card.volume = (this.volume(card.source) * 100)

                this.pause(card.source)

                this.status.previous = card

                this.playlist.unshift({...card})

                this.running = this.running.filter((source)=> {
                    return (source.number !== card.number)
                })

            } else {
                this.play(card.source)
                card.active = true
                card.clock = this.getClock()
                card.duration = this.duration(card.source)
                card.volume = (this.volume(card.source) * 100)
            }

        } else {
            var audio = this.source(card.src)

            this.running.push( { number: card.number, source: audio })

            this.play(audio)

            card.source = audio

            audio.onloadeddata = () => {

                setTimeout(()=> {
                    card.clock = this.getClock()
                    card.duration = this.duration(audio)
                    card.volume = (this.volume(audio) * 100)
                }, 10)

            }

            audio.onpause = () => {

                setTimeout(()=> {
                    card.duration = this.formatTime(this.duration(audio))
                    card.volume = (this.volume(audio) * 100)
                }, 10)

            }

            audio.ontimeupdate = ( ) => {
                card.duration = this.formatTime(this.time(audio))
            }

            card.active = true
            this.status.current = card
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

    public changeVolume(value) {

        if(this.status.current.number.length > 1) {
        this.status.current.volume = value
        this.status.current.source.volume = (value / 100)
        }

    }


}
