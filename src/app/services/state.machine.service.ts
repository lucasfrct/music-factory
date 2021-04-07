import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StateMachineService {

    public steps: any[] = []
    public current: string = this.steps[0]
    public observers: any = { }

    constructor() { }

    private provider(): any {
        let prov = { 
            length: (this.steps.length - 1),
            position: this.steps.indexOf(this.current), 
            prev: Number(this.steps.indexOf(this.current) - 1),
            next: Number(this.steps.indexOf(this.current) + 1)
        }

        return prov
    }

    private notifyAll(data: any = null): void {
        this.observers[this.current].forEach((callback: any) => {
            callback(data, this.current, this.steps)
        })
    }

    public next(data: any = null): string {
        let provider = this.provider()
        if(provider.next <= provider.length) {
            this.current = this.steps[provider.next]
            this.notifyAll(data)
        }
        return this.current
    }
    
    public prev(): string {
        let provider = this.provider()
        if(provider.prev >= 0 && provider.prev< provider.length) {
            this.current = this.steps[provider.prev]
            this.notifyAll()
        }
        return this.current
    }

    public setStep(step: string, data: any = null): string {    
        if(this.current != step && undefined != this.steps[this.steps.indexOf(step)]) {
            this.current = this.steps[this.steps.indexOf(step)]
            this.notifyAll(data)
        }
        return this.current
    }

    public step(step: string = '', callback: any = null): any[] {
        
        if(undefined == this.observers[step]) {
            this.observers[step] = []
            this.steps = Object.keys(this.observers)
        }

        this.observers[step].push(callback)
        return this.steps
    }

    public run(data: any = null) {
        this.current = this.steps[0]
        this.notifyAll(data)
    }

}
