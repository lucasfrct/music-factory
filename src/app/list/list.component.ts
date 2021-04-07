import { Component, OnInit, Input } from '@angular/core';
import { DeezerService } from '../deezer/deezer.service'
import { DataService } from '../services/data.service'
import { StateMachineService } from '../services/state.machine.service'

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    @Input() user: any = { name: 'lcfrct' }

    private service: any
    private data: any

    public list: any = []
    public control = {
        model: true
    }

    constructor(
        deezerService: DeezerService,
        dataService: DataService
    ) {
        this.service = deezerService
        this.data = dataService
    }

    ngOnInit(): void {

        this.data.search.subscribe((search: string) => {
            this.search(search)
        })

        this.data.user.subscribe((user: any) => {
            this.user = user
        })
    }

    public search(search: string) {
        let that = this
        let stateMachine = new StateMachineService()

        stateMachine.step("init", (data: any) => {
            stateMachine.next(this.list)

            this.service.search(search).subscribe((data: any) => {
                stateMachine.next(data)
            })

        })

        stateMachine.step("load", (data: any, step: string) => {
            this.control.model = true
        })

        stateMachine.step("done", (data: any, step: string, steps: any[]) => {
            that.list = data.data
            this.control.model = false
        })

        stateMachine.run(this.user)

    }

    public trackLoad(track: any) {
        this.data.changeUser(track)
        console.log("track laod:")
    }

}
