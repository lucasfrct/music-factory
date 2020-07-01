export class PlayerCard {

    public active = false
    public cue = false
    public compress = false
    public src = ""
    public duration = ""
    public countdown =""
    public time = ""
    public volume = 60
    public sound = null
    public number = ""
    public name = ""
    public attack = 4 // fadein
    public release = 10 // fadeout

    public constructor({name, src }) {
        this.name = name
        this.src = src
    }
}