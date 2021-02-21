import { Options, ChangeContext } from 'ng5-slider';

export class Volume {

    public active = false
    public cue = false
    public mute = false

    public source = null    // objeto de audio
    public volume = 100
    public time = 0

    public effects = []

	public options: Options = {
		floor: 0,
		ceil: 100,
        vertical: true,
        showSelectionBar: true,

        getSelectionBarColor: (value: number): string => {
            if (value <= 60) {
                return '#00916E'; // verde
            }
            if (value <= 90) {
                return '#E6AF2E'; // amarelo
            }
            return '#B80C09'; // vermelho
        },
        getPointerColor: (value: number): string => {
            if (value <= 60) {
                return '#00916E'; // verde
            }
            if (value <= 90) {
                return '#E6AF2E'; // amarelo
            }
            return '#B80C09'; // vermelho
        }
	}

    public constructor() { }

    public Factory(source) {
        this.source = source
        this.volume = this.source.vol
        this.source.cueToggle(this.cue)
        this.source.update((Card)=> {
            this.time = Card.time
        }) 
    }
    
    public onUserChange(changeContext: ChangeContext): void {
        if(this.source) {
            this.source.volume(this.volume)
        }
    }

    public onUserChangeEnd(changeContext: ChangeContext) {
        console.log("END Volume")
        //this.source.
    }

    public cueToggle() {
        this.cue = !this.cue
        if(this.source) {
            this.source.cueToggle(this.cue)
        }
    }
}