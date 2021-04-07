import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    @Input() menu: any
    @Output() menuEvent = new EventEmitter<any>()

    public menuIn: any = {
        icon: "menu",
        logoUrl: "assets/images/logo.png",
        items: [
            { name: "Início", icon: 'home', action: null },
        ],
        playlists: [
            { name: "Criar Playlist", icon: 'add_box', action: null },
        ]
    }

    constructor() { 
        this.menu = this.menuIn
    }
    
    ngOnInit(): void { }
    
    public actionMenuEvent(menu: any, item: any) {
        //console.log("ACTION MENU EVENT: ", menu, item)
        this.menuEvent.emit({menu, item})
    }


}
