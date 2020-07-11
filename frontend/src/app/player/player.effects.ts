import { PlayerComponent } from './player.component'

export class PlayerEffects {
    
    public constructor() { }

    public fadeIn(card, fn = null) {
        let volume = card.volume
        let unit = (volume / (card.attack + 1)) 
        let result = 0
        
        card.sound.volume = 0

        card.sound.addEventListener("timeupdate", ()=> {

            if(result >= volume ) {
                result = volume
                card.sound.volume = (result / 100)
                if (fn) { 
                    fn() 
                    card.sound.volume = volume
                }
            } else {
                card.sound.volume = (result / 100)
                result +=  unit
            }
        })

       

    }

    public fadeOut(card, fn = null) {
        let volume = card.volume
        let unit = (volume / (card.release + 1)) 
        let result = volume

        card.sound.addEventListener("timeupdate", ()=> {
            
            if(result <= 0) {
                result = 0
                card.sound.volume = 0
                if (fn) { 
                    fn() 
                    card.sound.volume = (volume / 100)
                }
            } else {
                card.sound.volume = (result / 100)
                result += - unit
            }

        })
    }
}