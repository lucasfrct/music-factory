import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service'

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public service: ListService
    public list: any = []
   

    public categories: any = [
        { name: "Playlist", actions: []},
        { name: "Podcasts", actions: []},
        { name: "Artistas", actions: []},
        { name: "Álbuns", actions: []},
    ]

    constructor(listService: ListService) {
        this.service = listService
    }

    ngOnInit(): void {
        
        let that = this
        this.service.search("rock").subscribe((data: any)=> {
            that.list = data.data
            console.log("INIT Search: ", data)
        })
    }

    public search(input: any) {
        
        let that = this
        this.service.search(input.value).subscribe((data: any)=> {
            that.list = data.data
            console.log("RUN Search: ", input.value, data)
            
        })
    }

}
