import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.css']
})

export class WorkspaceComponent implements OnInit {

    @Input() menu: any = { categories: { name: "Playlist", actions: [] } }
    @Input() user: any = { name: "" }
    @Output() menuEvent = new EventEmitter<any>()
    @Output() navEvent = new EventEmitter<any>()
    @Output() searchEvent = new EventEmitter<any>()
    @Output() userEvent = new EventEmitter<any>()

    public route: ActivatedRoute

    list: any

    constructor(activatedRoute: ActivatedRoute) { 
        this.route = activatedRoute
    }
    
    ngOnInit(): void { }

    public search(menu: any, input: any) {
        this.searchEvent.emit(String(input.value))
    }

    public categoryEvent(menu: any, cat: any) {
        this.menuEvent.emit({ menu, cat })
    }

    public navArrowEvent(menu: any, value: string) {
        let arrow = { arrow: value }
        this.navEvent.emit({ menu, arrow })
    }

    public userDispatch(menu: any, user: string) {

        this.userEvent.emit({ menu, user })
    }
}