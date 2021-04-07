import { Component, OnInit} from '@angular/core';
import { Angular2MaterializeV1Service } from 'angular2-materialize-v1';
import { CacheService } from '../services/cache.service'
import { DataService } from '../services/data.service'


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    private materialize: Angular2MaterializeV1Service
    private cache: CacheService
    public data: any

    public user: any = {
        name: "lucasfrct",
        searches: ['diante do trono', 'fernanda brum'],
        libraries: [],
        playlists: [],
        podcasts: [],
        artistis: [],
        albuns: [],
        favorites: [],
        currentAudio: {},
        currentAudioList: [],
        sesseionAudioList: [],
        list: []
    }
    
    public menu: any = {
        icon: "menu",
        logoUrl: "assets/images/logo.png",
        items: [
            { name: "Início", icon: 'home', action: this.menuAction },
            { name: "Descobrir", icon: 'search', action: this.menuAction},
            { name: "Sua Biblioteca", icon: 'library_books', action: this.menuAction}
        ],
        playlists: [
            { name: "Criar Playlist", icon: 'add_box', action: this.menuAction},
            { name: "Mais tocadas", icon: 'favorite', action: this.menuAction},
        ],
        categories: [
            { name: "Playlist", actions: []},
            { name: "Podcasts", actions: []},
            { name: "Artistas", actions: []},
            { name: "Álbuns", actions: []},
        ],
    }

    public sound: any = {
        url: "",
        source: null,
        cursor: 0,
        volume: 0,
        shuffle: false,
        repeat: false,
        prev: false,
        next: false,
        play: ()=> { },
        onPlaylist: false,
        volumeActive: false,
    }

    constructor(
        angular2MaterializeService: Angular2MaterializeV1Service, 
        cacheService: CacheService,
        dataService: DataService,
    ) {

        this.materialize = angular2MaterializeService
        this.cache = cacheService
        this.data = dataService
    }

    ngOnInit(): void {
        this.loadChace()

        this.data.search.subscribe((search: any)=> {
            this.user.searches.push(search)
        })

        this.searchEvent(this.user.searches[0])
    }

    public loadChace () {
        let username: string = "lucasfrct"
        this.cache.set(username, this.user)
        this.user = this.cache.get(username)
        this.data.changeUser(this.user)
    }

    private menuAction(data: any) {
        console.log("HOME MENU ACTION: ", data)
    }

    public menuEvent(data: any) {
        console.log("HOME MENU EVENT: ", data)
    }
    
    public searchEvent(search: string) {
        this.data.changeSearch(search)
    }

    public barEvent(data: any) {
        console.log("BAR EVENT", data)
    }
    
}
