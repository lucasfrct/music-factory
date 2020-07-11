import { PlayerCard } from '../card/card'
import { PlayerClock } from './player.clock'

export class PlayerFactoryCards {
    
    private cards = []

    public constructor(cards) { this.cards = cards }

    public shape() {
        return this.cards.map((list, index )=> {
            
            const card = new PlayerCard({ name: list.name, src: list.src })
            
            card.number =  String("0" + (index + 1)).substr(-2)
            card.sound = new Audio(card.src)

            card.sound.onloadeddata = ()=> {
                card.duration = new PlayerClock().format(card.sound.duration)
                card.sound.volume = this.parseVolume(card.volume)
            }
            
            return card
        })
    }

    private parseVolume(volume) {
        return (volume / 100)
    }

}