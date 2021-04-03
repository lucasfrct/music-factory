import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    public menu: any = {
        icon: "menu",
        logoUrl: "assets/images/logo.png",
        items: [
            { name: "Início", icon: 'home'},
            { name: "Descobrir", icon: 'search'},
            { name: "Sua Biblioteca", icon: 'library_books'}
        ],
        playlists: [
            { name: "Criar Playlist", icon: 'add_box'},
            { name: "Mais tocadas", icon: 'favorite'},
        ]

    }
    constructor() { }

    ngOnInit(): void {
    }

}
